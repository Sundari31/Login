import React from 'react'
import { motion } from 'framer-motion'

const Success = () => {
  return (
   <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-green-200 via-green-300 to-yellow-300">
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl text-center p-10 w-[400px]"
  >
    <h1 className="text-4xl font-extrabold text-white mb-4 animate-bounce">🎉 Welcome!</h1>
    <p className="text-lg text-white/90 mb-6">You have successfully logged in.</p>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/50 transition shadow-lg"
    >
      Go to Home
    </motion.button>
    <p className="mt-4 text-lg text-gray-500">Enjoy exploring your account 🎉</p>
  </motion.div>
</div>

  )
}

export default Success
