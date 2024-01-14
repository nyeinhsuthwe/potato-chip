/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Modal } from 'flowbite-react';
import { useState } from 'react';
import {motion } from 'framer-motion'
import { Button } from 'flowbite-react';

const AlertBox = () => {
const [openModal, setOpenModal] = useState(false);
  return (
    <div><motion.div className='flex flex-wrap gap-2'
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

    </motion.div></div>
  )
}

export default AlertBox