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
    navigate("/") // go back to login page
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 via-pink-400 to-yellow-300">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-[400px] p-8 bg-white/30 backdrop-blur-lg border border-white/40 rounded-3xl shadow-2xl"
      >
        {/* Header with Logout */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">📝 My To-Do List</h2>
          <motion.button
            onClick={handleLogout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 py-1 bg-white/20 text-white rounded-lg hover:bg-white/40 transition shadow-md text-sm"
          >
            Logout
          </motion.button>
        </div>

        {/* Task Input */}
        <div className="flex mb-4">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            type="text"
            placeholder="Enter a task..."
            className="flex-1 px-4 py-3 bg-white/20 text-white placeholder-gray-200 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-400 transition"
          />
          <motion.button
            onClick={handleAdd}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-2 px-4 py-3 bg-white/30 backdrop-blur-lg text-white rounded-xl hover:bg-white/50 transition shadow-lg"
          >
            Add
          </motion.button>
        </div>

        {/* Task List */}
        <ul className="space-y-3">
          {tasks.map((t, i) => (
            <li
              key={i}
              className="flex items-center justify-between px-4 py-3 bg-white/20 text-white border border-white/30 rounded-xl shadow-md"
            >
              <span
                onClick={() => handleToggle(i)}
                className={`cursor-pointer ${t.done ? "line-through opacity-60" : ""}`}
              >
                {t.text}
              </span>
              <button
                onClick={() => handleDelete(i)}
                className="text-red-300 hover:text-red-500 transition"
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
