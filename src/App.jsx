import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)
  //ab provider ka access de rhe h
  return (
    <>
      <UserContextProvider>
        <h1>Context-Api-1</h1>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App
