import { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'
import { turns } from './constants'
import { checkWinner, checkEndGame, winnerCombo } from './logic'
import { WinnerModal } from './WinnerModal'
import { saveToLocalStorage, removeLocalStorage } from './localStorage'
import { Board } from './Board'
import { useCallback } from 'react'
import { Modal } from './Modal'

export const PiedraPapelTijera = () => {
  const [winner, setWinner] = useState(null)
  const [isActiveCPU, setIsActiveCPU] = useState(false)
  const [showModal, setShowModal] = useState(true)
  const textoBotonVS = isActiveCPU ? 'Jugar VS Persona' : 'Jugar VS CPU'

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
    }) 

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? turns.X
    }) 
    
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(turns.X)
    setWinner(null)
    winnerCombo.length = 0
    removeLocalStorage()
  }

  const changeTurn = useCallback(() => {
    const newTurn = turn === turns.X ? turns.O : turns.X
    setTurn(newTurn)
  }, [turn])

  const changeBoardCPU = useCallback((newBoard, newTurn, randomIndex) => {
    newBoard[randomIndex] = turn
    setBoard(newBoard)
    changeTurn()

    saveToLocalStorage({
      board: newBoard,
      turn: newTurn
    })
    isThereWinner(newBoard)
  }, [changeTurn, turn])


  const isThereWinner = (newBoard) => {
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      confetti()
    } else if(checkEndGame(newBoard)) {
        setWinner(false)
      }
  }

  const updateBoard = (index) => {
    if(board[index] || winner) return
    changeTurn()

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === turns.X ? turns.O : turns.X

    saveToLocalStorage({
      board: newBoard,
      turn: newTurn
    })
    isThereWinner(newBoard)
  }

  const updateBoardCPU = useCallback(() => {
    if(winner) return
    const newBoard = [...board]
    const newTurn = turn === turns.X ? turns.O : turns.X
    if (newBoard.every(el => el !== null)) return

    if (isActiveCPU && turn === turns.O) {
      const randomIndex = Math.floor(Math.random() * 9)
      if (newBoard[randomIndex] === null) {
        changeBoardCPU(newBoard, newTurn, randomIndex)
        } else {
            updateBoardCPU()
          }
      }
  }, [board, isActiveCPU, turn, winner, changeBoardCPU])

  useEffect(() => {
    updateBoardCPU()
  }, [updateBoardCPU, turn])

  return (
    <main>
      <h1 className="text-center py-3 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-red-900 to-red-500 md:text-5xl">3 en raya</h1>
      <WinnerModal resetGame={resetGame} winner={winner} />
      <section className='mb-4 flex justify-center'>
        { winner === null && <p className='text-red-maroon text-lg font-bold border-4 border-transparent p-2 md:text-2xl'>Turno de: {turn}</p> }
      </section>
      <Board board={board} updateBoard={updateBoard} winner={winner} />

      <div className='flex justify-center items-center mt-8'>
        <button 
          className='bg-gradient-to-b from-red-maroon to-red-maroon text-orange-light font-bold py-1 px-2 rounded-lg text-lg hover:scale-110 transition-transform md:text-2xl md:py-2 md:px-4' 
          onClick={resetGame}
          >Nueva partida
        </button>
        <button 
          className='ml-6 bg-gradient-to-b from-red-maroon to-red-maroon text-orange-light font-bold py-1 px-2 rounded-lg text-lg hover:scale-110 transition-transform md:text-2xl md:py-2 md:px-4' 
          onClick={() => setIsActiveCPU(!isActiveCPU) & resetGame()}
          >{textoBotonVS}
        </button>
      </div>

      {
      showModal && <Modal  
      setShowModal={setShowModal}
      titulo='Juego 3 en Raya' 
      mensaje='Objetivo: Unir 3 ⭕/❌ de forma vertical, horizontal o diagonal.' 
      textButton2='Aceptar' 
      />
     }
    </main>
  )
}
