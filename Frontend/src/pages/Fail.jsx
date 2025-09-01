import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Fail = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-400 via-pink-500 to-purple-600">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-3xl shadow-2xl text-center p-10 w-[400px]"
      >
        <h1 className="text-4xl font-bold text-white mb-4">❌ Login Failed!</h1>
        <p className="text-lg text-white/90 mb-6">
          Your username or password is incorrect.
        </p>

        <Link
          to="/signup"
          className="block w-full mb-4 bg-white/30 backdrop-blur-lg text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/50 transition shadow-lg"
        >
          Register Here
        </Link>

        <Link
          to="/"
          className="block w-full bg-white/20 backdrop-blur-lg text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/40 transition shadow-md"
        >
          Try Again
        </Link>

        <p className="mt-4 text-sm text-white/80">
          Please check your details and try again.
        </p>
      </motion.div>
    </div>
  )
}

export default Fail
