import React from 'react'
// import { HiMenuAlt4 } from "react-icons/hi";
// import { AiOutlineClose } from "react-icons/ai";
import logo  from '../../assests/logo.png';

const NavBarItem = ({ title, classProps }) => {
    return (
      <li className={`mx-4 cursor-pointer ${classProps}`}>
        {title}
      </li>
    )
}

const NavBar = () => {

  return (
    <nav className='w-full flex md:justify-center justify-between items-center'>
      <div className='md:flex-[0.5] flex-initial justify-center items-center'>
        <img src={logo} alt="krypt" className=' cursor-pointer'/>
        <ul className="text-blue md:flex hidden list-none flex-row justify-between items-center">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className="text-blue bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      </div>
    </nav>
  )
}

export default NavBar
