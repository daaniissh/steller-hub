import React from 'react'
import { AiFillInstagram, AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import AnimatePage from '../animation/Animation'
const Header = ({country,not,ct}) => {
  return (
    <header className="bg-white p-5 w-full  shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
     
          <AnimatePage initial={{ opacity: 0, x: 50 }} animate={{ opacity: 2, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{
            ease: "easeIn",
            duration: 1
          }} >
            <div style={{ fontFamily: "'Mochiy Pop One', sans-serif" }} className="text-black text-center text-lg md:text-2xl font-semibold">STELLER HUB</div>
          </AnimatePage>
          <nav>  <AnimatePage initial={{ opacity: 0 ,x:-50}} animate={{ opacity: 2,x:0 }} exit={{ opacity: 0,x:50 }} transition={{
            ease: "easeIn",
            duration: 1
          }} >

            <ul className="flex text-xl  font-bold space-x-4">
            <div className="select-none text-[10px] badge border-lime-300">{country}</div>
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