import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import "./Header.css"

function Header() {
    return (
        <div className='header'>
        <PersonIcon fontSize="large" className='headerIcon'  />
        <img className='logo' src='https://cdn.iconscout.com/icon/free/png-256/tinder-3089460-2567412.png' alt=''/>
        <MessageIcon fontSize="large" className='headerIcon'/>
        </div>
    )
}

export default Header