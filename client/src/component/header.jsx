import React from 'react'
import { AiFillInstagram, AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import AnimatePage from '../animation/Animation'
const Header = ({country,not,ct,spin}) => {
  return (
    <header className="bg-white p-5 w-full  shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
     
          <AnimatePage initial={{ opacity: 0, x: 50 }} animate={{ opacity: 2, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{
            ease: "easeIn",
            duration: 1
          }} >
            <div style={{ fontFamily: "'Mochiy Pop One', sans-serif" }} className="text-black select-none text-center text-lg md:text-2xl font-[600] flex justify-center items-center"><span className='s ml-[1px] text-3xl md:text-4xl' >S</span> teller hub</div>
          </AnimatePage>
          <nav>  <AnimatePage initial={{ opacity: 0 ,x:-50}} animate={{ opacity: 2,x:0 }} exit={{ opacity: 0,x:50 }} transition={{
            ease: "easeIn",
            duration: 1
          }} >

            <ul className="flex text-xl  font-bold space-x-4">
          {spin ?  <div className=' badge border-lime-300 flex justify-center items-center flex-col' >
              <svg width="10" height="10" fill='#42858C' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><animateTransform attributeName="transform" type="rotate" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite" /></path></svg>
              

            </div> :  <div className="select-none text-[10px] badge border-lime-300">{country}</div>}
              <li className='w-5 h-5 animate-bounce cursor-pointer' >
                <a href="https://www.instagram.com/steller_hub/reels/" className="text-white  "><img src="/instagram.png" alt="" /></a>
              </li>
              <li className='w-5 h-5' >
                <a href="https://www.facebook.com/profile.php?id=61551224851202" className="text-white  cursor-pointer"><img src="/facebook.png" alt="" /></a>
              </li>
              <li className='w-5 h-5' >
                <a href="mailto: market54321678@gmail.com" className="text-white  cursor-pointer"><img src="/gmail.png" alt="" /></a>
              </li>

            </ul>      </AnimatePage>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header