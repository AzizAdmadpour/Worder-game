import React from 'react'
import { Link } from 'react-router-dom'
export default function Main_page() {
  return (
    <div className='container'>
    <div className='game-container'>
        
        <div className='tabs'>
            <img className='logo' src="logo.png" alt="" />
        <Link to='/guess-word'>
        <div className='tab' >
            <span>Plat Solo GAME</span>
            <img className='icon' src='gamepad.svg' alt='game-pad'/>
        </div>
        </Link>

    <Link to='/multi-player'>
        <div className='tab'>
            <span>PLay Against The Robot</span>
            <img className='icon' src='bot.svg' alt='game-pad'/>
        </div>
    </Link>
    <p className='intro'>You Can Play Solo And With Robot to Imporve Yourself in this gane</p>
  
        </div>
    </div>
            <img className='mobile-case' src='mobile-case.png' alt='mobile'/>
    
    </div>
  )
}
