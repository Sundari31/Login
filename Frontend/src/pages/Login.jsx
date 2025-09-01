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
          navigate("/todo")
        } else {
          navigate("/fail")
        }
      })
  }

  return (
   <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-teal-50 to-green-100">
  <motion.div
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="w-96 p-8 bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-xl text-center"
  >
    <h2 className="text-3xl font-bold mb-6 text-gray-800">Welcome Back 👋</h2>

    <input
      onChange={handleUser}
      type="text"
      placeholder="Username"
      className="w-full mb-4 px-4 py-3 bg-white border border-gray-300 text-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      required
    />

    <input
      onChange={handlePass}
      type="password"
      placeholder="Password"
      className="w-full mb-6 px-4 py-3 bg-white border border-gray-300 text-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      required
    />

    <motion.button
      onClick={handleCheck}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full bg-blue-400 text-white font-semibold py-3 rounded-xl hover:bg-blue-500 transition shadow-md"
    >
      Sign In
    </motion.button>

    <p className="mt-6 text-gray-600">
      New User? <Link to={"/signup"} className="text-blue-500 hover:text-blue-700 underline">Register</Link>
    </p>
  </motion.div>
</div>

  )
}

export default Login
