import React from 'react'
import Header from './Header'
import {motion } from 'framer-motion'
import { Button } from 'flowbite-react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    
  return (
    <div className='h-full' style={{backgroundColor:'black'}}>
        <Header/>
        <div className="row mx-auto h-100"
        >
            <div className="col-4">
            <motion.div
            animate={{ x: 40 }}
            transition={{ duration: 0.4 }}>
             <h2 className='text-white font-semibold' style={{marginTop:'90px', marginLeft:'160px'}}> Every People<br/>Loves our<br/> Potato Chips</h2>
            </motion.div>

            <NavLink to='/menu' style={{textDecoration:'none'}}>
            <motion.div className='flex flex-wrap gap-2'
            
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ y: 40 }}
            transition={{ duration: 0.3 }}>
            
            <Button color="failure" style={{marginTop:'10px', marginLeft:'220px'}}>Menu</Button>

            </motion.div>
            </NavLink>
            </div>
        
            <motion.div className="col-8" 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            
             
            >
                
             <img src="/img/photo_2023-12-29_20-39-59.jpg" alt="" style={{marginLeft:'120px', height:'450px' , width:"600px"}} /> 
             
            </motion.div>

         <span style={{marginTop:'55px'}}>...</span>
        </div>
    </div>
  )
}

export default Home