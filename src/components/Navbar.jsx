import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar w-[100vw] h-[8vh] bg-white fixed top-0 shadow-sm ">
    <div className="navbar-start m-4 ">
   
      <a className=" text-black text-xl">Hotel Booking</a>
    </div>
  
    <div className="navbar-end">
      <a className="btn">Get started</a>
    </div>
  </div>
  )
}

export default Navbar
