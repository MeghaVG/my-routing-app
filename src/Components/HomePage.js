import React, { createContext, useState } from 'react'
import{MainContainer} from './styles'
import { useNavigate, useOutletContext } from 'react-router-dom'
// import AboutPage from './AboutPage'

export const UserContext=createContext()

const HomePage = () => {
  const {sharedData,setSharedData}=useOutletContext()
  const [data,setData]=useState(sharedData)
  const navigate=useNavigate()

  const handleChange=(e)=>{
    setData(e.target.value)
    setSharedData(e.target.value)
  }

  const handleClick=()=>{
    navigate('/aboutPage')
  }

  return (
    // <UserContext.Provider value={data}>
    <MainContainer>
      <input type='text' placeholder='Username' value={data} onChange={handleChange}/>
      <button onClick={handleClick}>Submit</button>
    </MainContainer>
    // <UserDetails/>
    // </UserContext.Provider>
  )
}

export default HomePage