import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { motion } from 'framer-motion'

const Signup = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")

  function handleUser(evt) { setUser(evt.target.value) }
  function handlePass(evt) { setPass(evt.target.value) }

  function handleSignup() {
    axios.post("http://localhost:3000/signup", { username: user, password: pass })
      .then(() => {
        alert("Register successfully! Please login.")
        navigate("/")
      })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-pink-100 via-purple-200 to-blue-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-80 p-6 bg-white border border-gray-300 rounded-2xl shadow-xl text-center"
      >
        <h2 className="text-2xl font-semibold mb-6 text-pink-700">Create Account</h2>

        <input
          onChange={handleUser}
          type="text"
          placeholder="Username"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          required
        />

        <input
          onChange={handlePass}
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          required
        />

        <motion.button
          onClick={handleSignup}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
        >
          Sign Up
        </motion.button>
      </motion.div>
    </div>
  )
}

export default Signup
