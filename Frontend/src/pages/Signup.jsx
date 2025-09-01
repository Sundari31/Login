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
    {/* Inputs and Button same as Login but with pink-blue hover effects */}
  </motion.div>
</div>

  )
}

export default Signup
