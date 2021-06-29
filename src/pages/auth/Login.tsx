import React, { useEffect, useState } from 'react'
import './auth.css'
// import AuthService from 'src/services/AuthService'
import { useHistory } from "react-router-dom";
// import { useAuth } from 'src/state/AuthContext';

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const hist = useHistory()
  // const [auth, setAuth] = useAuth()

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setEmail(e.target.value)
  }

  const handlePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  // const handleSubmit = async () => {
  //   const user = await AuthService.login({email, password})
  //   if(user && user.id) {
  //     setAuth({
  //       ...auth,
  //       isLoggedIn: true,
  //       user
  //     })
  //     hist.push('/')
  //   }
  // }
  return (
    <div className="page center">
      <form className="form-container">
        <h1 className="title">Login</h1>
        <input type="email" onChange={handleEmail} autoComplete="email" placeholder="email" className="auth-input" />
        <input type="password" onChange={handlePass} autoComplete="password" placeholder="password" className="auth-input" />
        <button type="button" className="auth-button">Login</button>
      </form>
    </div>
  )
}