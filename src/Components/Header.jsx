import { Navbar} from 'flowbite-react'
import React from 'react'
import { NavLink } from 'react-router-dom' 


const Header = () => {
  return (
    
    <div className='sticky-top ' >

   <Navbar className='fluid sticky-top py-1 bg-black'>
      
      <h4 className=" fw-bold self-center whitespace-nowrap text-white text-xl font-semibold mt-1">My Chips</h4>
      
      <Navbar className='mx-auto bg-black'>
       <NavLink to='/home'  style={{textDecoration:'none'}}>
        <span className='text-white fw-bold mr-5' style={{fontSize:'14px'}}>Home</span>
       </NavLink>
       <NavLink to='/menu' style={{textDecoration:'none'}}>
        <span className='text-white fw-bold ml-5 mr-5'  style={{fontSize:'14px'}}>Menu</span>
       </NavLink>
       <NavLink to='/contact' style={{textDecoration:'none'}}>
        <span className='text-white fw-bold ml-5 mr-5'  style={{fontSize:'14px'}}>Contact</span>
       </NavLink>

       <NavLink to='/about' style={{textDecoration:'none'}}>
        <span className='text-white fw-bold ml-5 mr-5'  style={{fontSize:'14px'}}>About Me</span>
       </NavLink>
       
      </Navbar>

     
     <NavLink to='/side'><button type="button"><i className="fa-solid fa-bars text-white fs-4 me-4"></i></button></NavLink>
     
      
       </Navbar>




        </div>
    
  )
}

export default Header
