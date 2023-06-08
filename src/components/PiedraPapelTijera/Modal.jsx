export const Modal = ({ 
  setShowModal, 
  titulo='Titulo', 
  mensaje='Mensaje', 
  textButton1='Aceptar', 
  textButton2='Cancelar', 
  handleFunction 
}) => {
  
  return (
    <div className='w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-70 flex justify-center items-center z-50'>
      <div className='bg-white w-96 h-72 rounded-xl flex flex-col p-6'>
        <div className='flex justify-end'>
          <i onClick={() => setShowModal(false)} className='bx bx-window-close bg-transparent text-black border-none text-2xl cursor-pointer transition-colors hover:text-red-maroon'></i> 
        </div>

        <div className='text-2xl inline-block text-center text-red-maroon font-bold'>
          <h3>{titulo}</h3>
        </div>

        <div className='flex justify-center items-center text-xl text-center my-9'>
          <p>{mensaje}</p>
        </div>

        <div className="flex justify-center items-center">
          <button className="py-2 px-4 rounded-lg text-red-800 font-bold text-xl bg-orange-light transition-colors hover:bg-gradient-to-b from-orange-light to-red-maroon" onClick={() => setShowModal(false)}>{textButton2}</button>
        </div>

      </div>
    </div>
  )
}