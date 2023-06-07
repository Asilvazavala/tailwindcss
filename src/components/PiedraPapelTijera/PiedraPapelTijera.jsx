import { useState } from 'react'
import confetti from 'canvas-confetti'
import { turns } from './constants'
import { checkWinner, checkEndGame } from './logic'
import { WinnerModal } from './WinnerModal'
import { saveToLocalStorage, removeLocalStorage } from './localStorage'
import { Board } from './Board'

export const PiedraPapelTijera = () => {
  const [winner, setWinner] = useState(null)

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

    removeLocalStorage()
  }

  const updateBoard = (index) => {
    if(board[index] || winner) return
    // Actualizar tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // Cambiar turno
    const newTurn = turn === turns.X ? turns.O : turns.X
    setTurn(newTurn)
    // Guardar partida
    saveToLocalStorage({
      board: newBoard,
      turn: newTurn
    })
    // Revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      confetti()
      // window.alert(`El ganador es ${newWinner}`)
      // Revisar si hay empate
    } else if(checkEndGame(newBoard)) {
        setWinner(false)
      }
  }

  return (
    <main className="bg-gradient-to-b from-orange-light to-maroon h-screen ">
      <h1 className="text-center py-3 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-red-900 to-red-500">3 en raya</h1>
      <WinnerModal resetGame={resetGame} winner={winner} />
      <section className='mb-6 flex justify-center'>
        { winner === null && <p className='text-red-maroon text-2xl font-bold border-4 border-transparent p-2'>Turno de: {turn}</p> }
      </section>
      <Board board={board} updateBoard={updateBoard} />


      <div className='flex justify-center items-center mt-6'>
        <button className='bg-gradient-to-b from-red-maroon to-red-maroon text-orange-light font-bold py-2 px-4 rounded-lg text-2xl hover:scale-110 transition-transform' onClick={resetGame}>Empezar de nuevo</button>
      </div>
    </main>
  )
}
