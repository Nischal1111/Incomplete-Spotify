import React from 'react'
import "../Css/sidebar.css"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import Menu from './Menu'
import { useStateContextValue } from './State';
import Playlist from './Playlist';

function Sidebar() {
    const [{playlists},dispatch]= useStateContextValue();
  return (
    <div className='sidebar'>
    <img className='logo' src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='Spotify'></img>
    <Menu Icon={HomeIcon} title="Home"/>
    <Menu Icon={SearchIcon} title="Search"/>
    <Menu Icon={LibraryMusicIcon} title="Your Library"/>
    <br></br>
    <strong className='sidebar--play'>PLAYLISTS</strong>
    <hr/>
    {playlists?.items?.map((playlist)=>{
            return <Menu title={playlist.name}/>
        })}
    </div>
  )
}

export default Sidebar