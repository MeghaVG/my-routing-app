import React from 'react'
import {useNavigate } from 'react-router-dom'
import HeaderComponent from './HeaderComponent'
import { MainContainer } from './styles'

export default function ErrorPage() {
    const navigate=useNavigate()

    const handleClick =()=>{
        navigate('/')
    }

  return (
    <>
    <HeaderComponent />
    <MainContainer>
        <p>Oops! Page not found</p>
        <button onClick={handleClick}>Back to Home Page</button>
    </MainContainer>
    </>
    
  )
}
