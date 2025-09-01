import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Todo = () => {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  const navigate = useNavigate()

  const handleAdd = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, done: false }])
      setTask("")
    }
  }

  const handleToggle = (index) => {
    const newTasks = [...tasks]
    newTasks[index].done = !newTasks[index].done
    setTasks(newTasks)
  }

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
  }

  const handleLogout = () => {
    navigate("/") 
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-teal-50 to-green-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-[400px] p-8 bg-white/30 backdrop-blur-lg border border-white/40 rounded-3xl shadow-2xl"
      >

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-black">📝 My To-Do List</h2>
          <motion.button
            onClick={handleLogout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 py-1 bg-blue-400 text-white font-semibold rounded-xl hover:bg-blue-500 transition shadow-md"
          >
            Logout
          </motion.button>
        </div>

        <div className="flex mb-4">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            type="text"
            placeholder="Enter a task..."
            className="flex-1 px-4 py-3 bg-white border border-gray-300 text-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <motion.button
            onClick={handleAdd}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-2 px-4 py-3 bg-blue-400 text-white font-semibold rounded-xl hover:bg-blue-500 transition shadow-md"
          >
            Add
          </motion.button>
        </div>

        <ul className="space-y-3">
          {tasks.map((t, i) => (
            <li
              key={i}
              className="flex items-center justify-between px-4 py-3 bg-white/20 text-black border border-white/30 rounded-xl shadow-md"
            >
              <span
                onClick={() => handleToggle(i)}
                className={`cursor-pointer ${t.done ? "line-through opacity-60" : ""}`}
              >
                {t.text}
              </span>
              <button
                onClick={() => handleDelete(i)}
                className="text-red-500 hover:text-red-300 transition"
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

export default Todo
