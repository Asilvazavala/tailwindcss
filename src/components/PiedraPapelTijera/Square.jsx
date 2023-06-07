
export const Square = ({ children, updateBoard, index }) => {  
  const handleClick = () => {
    updateBoard(index)
  }
  
  return (
    <div 
      onClick={handleClick} 
      className="w-24 h-24 rounded-md grid items-center justify-center cursor-pointer text-5xl border-4 border-red-maroon">
      {children}
    </div>
  )
}
