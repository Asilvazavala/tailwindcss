import reactIcon from '../assets/react.svg'
export const Prueba = () => {

  return (
    <section className="h-screen">
      <nav className="text-black text-xl fixed flex bg-sky-600 justify-evenly items-center h-14 w-screen top-0 font-bold">
        <a className="hover:text-white transition-colors" href="">Home</a>
        <a className="hover:text-white transition-colors" href="">Extra</a>
        <a className="hover:text-white transition-colors" href="">Contact</a>
      </nav>

      <main className="pt-28 px-16 flex">
        <div className="w-1/2">
          <h1 className='text-5xl font-bold'>Hola, soy Antonio Silva</h1>
          <p className='text-lg my-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus blanditiis, nobis cupiditate expedita quis aliquam cumque, quam necessitatibus explicabo a.</p>
          <button className='font-bold bg-sky-300 rounded-md py-1 px-3 hover:scale-110 transition-transform text-lg'>Contact</button>
          <div className='flex mt-12 underline'>
            <a href="">Linkedin</a>
            <a className='ml-5' href="">Github</a>
          </div>
        </div>

        <div className="w-1/2 flex justify-center">
          <img src={reactIcon} alt="react icon"/>
        </div>
      </main>

      <aside className='mt-6 grid grid-cols-3 gap-5 px-16 md:grid-cols-4'>
        <div className='font-bold bg-sky-200 w-48 h-48 flex justify-center items-center'>1</div>
        <div className='font-bold bg-sky-200 w-48 h-48 flex justify-center items-center'>2</div>
        <div className='font-bold bg-sky-200 w-48 h-48 flex justify-center items-center'>3</div>
        <div className='font-bold bg-sky-200 w-48 h-48 flex justify-center items-center'>4</div>
        <div className='font-bold bg-sky-200 w-48 h-48 flex justify-center items-center'>5</div>
        <div className='font-bold bg-sky-200 w-48 h-48 flex justify-center items-center'>6</div>
      </aside>
    </section>
  )
}
