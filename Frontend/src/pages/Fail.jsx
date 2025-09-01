import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Fail = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-teal-50 to-green-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-3xl shadow-2xl text-center p-10 w-[400px]"
      >
        <h1 className="text-4xl font-bold text-black mb-4">❌ Login Failed!</h1>
        <p className="text-lg text-black/90 mb-6">
          Your username or password is incorrect.
        </p>

        <Link
          to="/signup"
          className="block w-full mb-4 bg-red-500 backdrop-blur-lg text-black font-semibold px-6 py-3 rounded-xl hover:bg-red-400 transition shadow-lg"
        >
          Register Here
        </Link>

        <Link
          to="/"
          className="block w-full bg-red-500 backdrop-blur-lg text-black font-semibold px-6 py-3 rounded-xl hover:bg-red-400 transition shadow-md"
        >
          Try Again
        </Link>

        <p className="mt-4 text-sm text-black/80">
          Please check your details and try again.
        </p>
      </motion.div>
    </div>
  )
}

export default Fail
