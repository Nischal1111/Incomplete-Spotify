import React from 'react'
import "../Css/login.css"
import { loginUrl } from './spotify'

const Login = () => {
  return (
    <div className='login'>
    <img src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='Spotify'></img>
    <a href={loginUrl}>Login with Spotify</a>
    </div>
  )
}

export default Login
