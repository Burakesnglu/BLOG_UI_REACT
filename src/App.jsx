import { useState } from 'react'
import './App.css'
import AdminLayout from '../src/layouts/admin-layout/AdminLayout'
import UserLayout from '../src/layouts/user-layout/UserLayout'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Blog from './components/blog/Blog'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  let role = 'User'

  return (
    <>
      {role == 'Admin' ? (
        <AdminLayout />
      ) : (
        <UserLayout />
      )}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
