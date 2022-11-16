import React from 'react'
import { Link } from 'react-router-dom'
import '../css/header.css'

const Header: React.FC = () => {
    return (
        <div className='header'>
            <ul className='nav-links'>
                <li>
                    <Link to='/'>Fun with OKLCH</Link>
                </li>
                <li>
                    <Link to='/more'>More</Link>
                </li>
                <li>
                    <Link to='/even-more'>Can I use OKLCH?</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
