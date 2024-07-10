import React,{useState, useContext} from 'react'
import UserContext from '../../context/UserContext'

function Login() {
  const [username, setUsername]= useState('')
  const [password, setPassword]= useState('')
  const {setUser} = useContext(UserContext)
  const handleSubmit = (e) =>{
    e.preventDefault()
    setUser({username, password}) 
  }
  return (
    <>
    <h1 className='bg-slate-500 text-white'> Enter username</h1>
    <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='username'></input>
    <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder='password'></input>
    <button onClick={handleSubmit} className='border-2 border-cyan-400 rounded p-2'>Login</button>
    </>
  )
}

export default Login