import React from 'react'
import Header from './Header'
import {motion } from 'framer-motion'
import { Button } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import AlertBox from './AlertBox';

const Sweet = () => {
  return (
    <div>
        <div className='h-full' style={{backgroundColor:'black'}}>
    <Header/>
    <div className='d-flex mx-auto h-100' style={{backgroundColor:'black'}}>
    <div className='border-end ' style={{paddingRight:'50px'}}>
        <motion.div
        animate={{ x: 40 }}
        transition={{ duration: 0.4 }}>
         <h3 className='text-white font-semibold' style={{marginTop:'90px', marginLeft:'50px'}}> Sweet Sauce Flavor</h3><br/><span className='text-white font-semibold' style={{ marginLeft:'50px'}}>Price-1200ks</span>
        </motion.div>

        <div className='d-flex'>

        <NavLink to='/honey' style={{textDecoration:'none'}}>
        <motion.div className='flex flex-wrap gap-2'
        
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: 40 }}
        transition={{ duration: 0.3 }}>
        
        <Button color="failure" style={{marginTop:'10px', marginLeft:'80px'}}>Prev</Button>

        </motion.div>
        </NavLink>
        
        <AlertBox/>

        <NavLink to='/barbecue' style={{textDecoration:'none'}}>
        <motion.div className='flex flex-wrap gap-2'
        
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: 40 }}
        transition={{ duration: 0.3 }}>
        
        <Button color="failure" style={{marginTop:'10px', marginLeft:'20px'}}>Next</Button>

        </motion.div>
        </NavLink>
        </div>
        </div>
        
        <div className=''>
        <motion.div
        
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        
         
        >
            
         <img src="/img/Thick-Sweet-chili-sauce.jpg" alt="" className=' rounded-circle' style={{ height:'330px' , width:"390px", marginTop:'70px', marginLeft:'85px'}} /> 
         
        </motion.div>
        
        
        </div>

        <div>
        <motion.div className="" 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        
         
        >
            
         <img src="/img/sweet.jpg" alt="" style={{ height:'390px' , width:"450px", marginTop:'50px', marginRight:'300px'}} /> 
         
        </motion.div>
        
        
        </div>
    </div>
    <span style={{marginTop:'50px'}} >...<br/>....<br/>....</span>
</div>
    </div>
  )
}

export default Sweet