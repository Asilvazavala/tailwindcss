import reactIcon from '../assets/react.svg'
export const Prueba = () => {
  const listItem = document.querySelectorAll('#landing-header li');
  const menuBackDrop = document.querySelector('#menu-backdrop');

  listItem.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      const { left, top, width, height } = item.getBoundingClientRect()
            
      menuBackDrop.style.setProperty('--left', `${left}px`)
      menuBackDrop.style.setProperty('--top', `${top}px`)
      menuBackDrop.style.setProperty('--width', `${width}px`)
      menuBackDrop.style.setProperty('--height', `${height}px`)
      menuBackDrop.style.opacity = '1'
      menuBackDrop.style.visibility = 'visible'
    })

    item.addEventListener('mouseleave', () => {
      menuBackDrop.style.opacity = '0'
      menuBackDrop.style.visibility = 'hidden'
    })
  })

  return (
    <section className="h-screen">
      <header id='landing-header' className='flex items-center fixed top-0 px-8 py-2 w-full justify-between text-black text-md font-bold'>
        <div className='flex flex-grow basis-0'>
          <img src={reactIcon} alt='reactIcon' />
        </div>

        <nav>
          <ul className='flex [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2'>
            <li><a className="hover:text-white transition-colors" href="">Home</a></li>
            <li><a className="hover:text-white transition-colors" href="">Extra</a></li>
            <li><a className="hover:text-white transition-colors" href="">Contact</a></li>
            <li><a className="hover:text-white transition-colors" href="">Soporte</a></li>
            <li><a className="hover:text-white transition-colors" href="">Hola</a></li>
          </ul>
        </nav>

        <nav className="flex flex-grow basis-0 justify-end">
          <ul className='flex [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2'>
            <li><a className="hover:text-white transition-colors" href="">Registro</a></li>
            <li><a className="hover:text-white transition-colors" href="">Iniciar Sesión</a></li>
          </ul>
        </nav>  

        <div id='menu-backdrop' className='absolute bg-black/70 backdrop-blur-lg rounded
         left-[var(--left)] top-[var(--top)]
         w-[var(--width)] h-[var(--height)]
         transition-all duration-500 ease-in-out opacity-0 -z-10'>
        </div>
      </header>

      <main className="pt-28 px-16 flex flex-grow basis-0">
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
