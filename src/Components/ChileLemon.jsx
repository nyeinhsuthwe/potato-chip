/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Header from './Header'
import {motion } from 'framer-motion'
import { Button } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import { Modal } from 'flowbite-react';
import { useState } from 'react';

const ChileLemon = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className='h-full' style={{backgroundColor:'black'}}>
    <Header/>
    <div className='d-flex mx-auto h-100' style={{backgroundColor:'black'}}>
    <div className='border-end ' style={{paddingRight:'50px'}}>
        <motion.div
        animate={{ x: 40 }}
        transition={{ duration: 0.4 }}>
         <h3 className='text-white font-semibold' style={{marginTop:'90px', marginLeft:'50px'}}> Chile Lemon Flavor</h3><br/><span className='text-white font-semibold' style={{ marginLeft:'50px'}}>Price-1200ks</span>
        </motion.div>

        <div className='d-flex'>

        <NavLink to='/barbecue' style={{textDecoration:'none'}}>
        <motion.div className='flex flex-wrap gap-2'
        
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: 40 }}
        transition={{ duration: 0.3 }}>
        
        <Button color="failure" style={{marginTop:'10px', marginLeft:'80px'}}>Prev</Button>

        </motion.div>
        </NavLink>

        <motion.div className='flex flex-wrap gap-2'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ y: 40 }}
            transition={{ duration: 0.3 }}>
            
        <Button color="failure" style={{marginTop:'10px', marginLeft:'20px'}} onClick={() => setOpenModal(true)}>Buy</Button>
       <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup> 
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <img src='/img/Lays-Logo-1997.png' className="mx-auto mb-4 h-14 w-35 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Comfirm Purchase?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => setOpenModal(false)}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

            </motion.div>

        <NavLink to='/cream' style={{textDecoration:'none'}}>
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
            
         <img src="/img/chile2.jpg" alt="" className=' rounded-circle' style={{ height:'330px' , width:"390px", marginTop:'70px', marginLeft:'85px'}} /> 
         
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
            
         <img src="/img/chile lemon.jpg" alt="" style={{ height:'390px' , width:"450px", marginTop:'50px', marginRight:'300px'}} /> 
         
        </motion.div>
        
        
        </div>
    </div>
    <span style={{marginTop:'50px'}} >...<br/>....<br/>....</span>
</div>
  )
}

export default ChileLemon