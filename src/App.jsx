import React from 'react'
import primeNewsLogo from "../public/fotor-ai-20240619223645-removebg-preview.png"

const App = () => {
  return (
    <section className='navbar w-full h-[120px] flex items-center justify-center'>
      <div className="nav-main-content w-[80%] h-full flex items-center justify-around">
        <figure className="logo w-[230px] h-full p-[8px] ">
          <img src={primeNewsLogo} alt="" className="object-contain h-full w-full rounded-lg scale-150 hover:scale-[1.7]" />
        </figure>

        <div className="search-bar w-[40%]">
          <input type="text" placeholder='Enter Categories ...' className='w-full p-[10px] rounded-2xl outline-none border-0 text-lg' />
        </div>

        <div className="nav-links flex gap-10">
          <div className="home">
            <span className="font-semibold text-[20px] hover:text-red-700 cursor-pointer">HOME</span>
          </div>
          <div className="categories">
            <span className="font-semibold text-[20px] hover:text-red-700 cursor-pointer">CATEGORY</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
