import React from 'react';
import { NavLink } from 'react-router-dom';
import './ErrorPage.css'

function ErrorPage() {
  return (
    <div className='Error'>
     <h1>Error 404</h1>
     <h1>Not found page for this url 😐</h1>
     <NavLink to='/'><button id='to_home'>Go Home</button></NavLink>
    </div>
  )
}

export default ErrorPage