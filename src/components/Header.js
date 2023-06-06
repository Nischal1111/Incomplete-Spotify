import React from 'react'
import "../Css/header.css"
import SearchIcon from '@mui/icons-material/Search'
import { Avatar } from '@mui/material'
import { useStateContextValue } from './State'

const Header = () => {
    const [{user},dispatch] = useStateContextValue();
    return (<>
    <div className='header'>
        <div className='header--left'>
            <SearchIcon/>
            <input type='text' placeholder='Search for Artists, Songs or Podcasts...'></input>
        </div>
        <div className='header--right'>
            <Avatar src={user?.images[0]?.url} alt={user?.display_name}></Avatar>
            <h4>{user?.display_name}</h4>
        </div>
    </div>
    </>)
}

export default Header
