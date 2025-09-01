import React from 'react'
import { Link } from 'react-router-dom'

const Fail = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="border border-red-400 bg-white rounded-2xl shadow-lg text-center p-10 w-[400px]">
          <h1 className="text-3xl font-bold text-red-600 mb-4">❌ Login Failed!</h1>
          <p className="text-lg text-gray-700 mb-6">
            Your username or password is incorrect.
          </p>
          <Link
            to="/signup"
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Register Here
          </Link>
          <p className="mt-4 text-sm text-gray-500">
            Or go back and try again.
          </p>
        </div>
      </div>
    </>
  )
}

export default Fail