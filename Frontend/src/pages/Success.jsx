import React from 'react'
import { motion } from 'framer-motion'

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-green-200 via-green-100 to-yellow-100">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="border border-green-400 bg-white rounded-2xl shadow-xl text-center p-10 w-[400px]"
      >
        <h1 className="text-3xl font-bold text-green-600 mb-4 animate-pulse">✅ Welcome!</h1>
        <p className="text-lg text-gray-700 mb-4">You have successfully logged in.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition'
        >
          Go to Home
        </motion.button>
        <p className="mt-4 text-sm text-gray-500">Enjoy exploring your account 🎉</p>
      </motion.div>
    </div>
  )
}

export default Success
