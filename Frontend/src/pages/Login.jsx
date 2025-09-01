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
    axios.post("http://localhost:3000/login", { username: user, password: pass })
      .then((data) => {
        if (data.data === true) {
          navigate("/success")
        } else {
          navigate("/fail")
        }
      })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-purple-200 via-pink-100 to-yellow-100">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-80 p-6 bg-white border border-gray-300 rounded-2xl shadow-xl text-center"
      >
        <h2 className="text-2xl font-semibold mb-6 text-purple-700">Welcome Back !</h2>

        <input
          onChange={handleUser}
          type="text"
          placeholder="Username"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          required
        />

        <input
          onChange={handlePass}
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          required
        />

        <motion.button
          onClick={handleCheck}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition"
        >
          Sign In
        </motion.button>

        <p className='m-4 font-semibold text-gray-600'>
          New User? <Link to={"/signup"} className='text-purple-500 hover:text-purple-700'> Register</Link>
        </p>
      </motion.div>
    </div>
  )
}

export default Login
