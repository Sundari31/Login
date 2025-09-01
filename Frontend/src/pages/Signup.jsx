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
    axios.post("https://login-2-vio4.onrender.com/signup", { username: user, password: pass })
      .then(() => {
        alert("Register successfully! Please login.")
        navigate("/")
      })
  }

  return (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-blue-400">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="w-96 p-8 bg-white/30 backdrop-blur-lg border border-white/40 rounded-3xl shadow-2xl text-center"
  >
    <h2 className="text-3xl font-bold mb-6 text-white drop-shadow-lg">Create Account ✨</h2>
    <input
  onChange={handleUser}
  type="text"
  placeholder="Username"
  className="w-full mb-4 px-4 py-3 bg-white/20 text-white placeholder-gray-200 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-400 transition"
/>

<input
  onChange={handlePass}
  type="password"
  placeholder="Password"
  className="w-full mb-6 px-4 py-3 bg-white/20 text-white placeholder-gray-200 border border-white/30 rounded-xl focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-pink-400 transition"
/>

<motion.button
  onClick={handleSignup}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="w-full bg-white/30 backdrop-blur-lg text-white font-semibold py-3 rounded-xl hover:bg-white/50 transition shadow-lg"
>
  Sign Up
</motion.button>

  </motion.div>
</div>

  )
}

export default Signup
