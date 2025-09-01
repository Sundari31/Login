import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")

  function handleUser(evt) { setUser(evt.target.value) }
  function handlePass(evt) { setPass(evt.target.value) }

  function handleCheck() {
    axios.post("https://login-2-vio4.onrender.com/login", { username: user, password: pass })
      .then((data) => {
        if (data.data === true) {
          navigate("/success")
        } else {
          navigate("/fail")
        }
      })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 via-pink-400 to-yellow-300">
  <motion.div
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="w-96 p-8 bg-white/30 backdrop-blur-lg border border-white/40 rounded-3xl shadow-2xl text-center"
  >
    <h2 className="text-3xl font-bold mb-6 text-white drop-shadow-lg">Welcome Back 👋</h2>

    <input
      onChange={handleUser}
      type="text"
      placeholder="Username"
      className="w-full mb-4 px-4 py-3 bg-white/20 text-white placeholder-gray-200 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-400 transition"
    />

    <input
      onChange={handlePass}
      type="password"
      placeholder="Password"
      className="w-full mb-6 px-4 py-3 bg-white/20 text-white placeholder-gray-200 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-400 transition"
    />

    <motion.button
      onClick={handleCheck}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full bg-white/30 backdrop-blur-lg text-white font-semibold py-3 rounded-xl hover:bg-white/50 transition shadow-lg"
    >
      Sign In
    </motion.button>

    <p className="mt-6 text-white/90">
      New User? <Link to={"/signup"} className="underline hover:text-yellow-200">Register</Link>
    </p>
  </motion.div>
</div>

  )
}

export default Login
