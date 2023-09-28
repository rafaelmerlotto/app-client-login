import React from 'react'
import { useAuth } from '../authentication/auth'
import { Link } from 'react-router-dom'

export default function Logout() {
    const { logout } = useAuth()
    return (
        <div className='logout'>
            <Link type='logout' className='link' to='/' onClick={logout} >Logout</Link>
        </div>
    )
}
