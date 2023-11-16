import React from 'react'
import Header from '../component/Header'
import { Login } from '../component/Login'


const LoginPage = () => {
  return (
  <>
  <div className='max-w-md w-full space-y-8'>
  <Header 
  heading="Login to your account"
  paragraph="Don't have an account yet? "
  linkName="Signup"
 
  ></Header>
 
  <Login />
  </div>
  </>
  )
}

export default LoginPage