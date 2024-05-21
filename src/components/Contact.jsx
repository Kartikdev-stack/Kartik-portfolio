import React from 'react'
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      className='border-b border-neutral-900 pb-20'>
      <h2 className='my-10 text-4xl text-center text-white'> Connect with Me !!</h2>
      <div className='text-center tracking lighter text-white'>
        <p whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className='my-4'
          >{CONTACT.address}</p>
        <p>{CONTACT.phoneNo}</p>
        <a href="#" className='border-b'>{CONTACT.email}</a>
      </div>
    </motion.div>
  )
}

export default Contact
