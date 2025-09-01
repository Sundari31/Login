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
      </div><div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-400 via-pink-500 to-purple-600">
  <div className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-3xl shadow-2xl text-center p-10 w-[400px]">
    <h1 className="text-4xl font-bold text-white mb-4">❌ Login Failed!</h1>
    <p className="text-lg text-white/90 mb-6">Your username or password is incorrect.</p>
    <Link
      to="/signup"
      className="bg-white/30 text-white px-6 py-3 rounded-xl hover:bg-white/50 transition shadow-lg"
    >
      Register Here
    </Link>
    <p className="mt-4 text-sm text-white/80">Or go back and try again.</p>
  </div>
</div>

    </>
  )
}

export default Fail