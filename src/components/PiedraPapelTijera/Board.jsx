import { Square } from './Square'

export const Board = ({ board, updateBoard }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <section className="grid grid-cols-3 gap-10">
        {
          board.map((el, index) => {
            return (
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}
                >
                  {board[index]}
                </Square>
            )
          })
        }
      </section>
    </div>
  )
}
