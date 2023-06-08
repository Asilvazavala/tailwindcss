import { winnerCombo } from './logic'

export const Square = ({ children, updateBoard, index, winner }) => {  
  const handleClick = () => {
    updateBoard(index)
  }
  
  return (
    <div 
      onClick={handleClick} 
      className={`w-16 h-16 rounded-md grid items-center justify-center cursor-pointer text-2xl
      border-4 border-red-maroon md:w-24 md:h-24 md:text-5xl ${winner && winnerCombo.includes(index) && 'bg-red-900'}`}>
      {children}
    </div>
  )
}
