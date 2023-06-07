import React from 'react'
import "../Css/body.css"
import Header from './Header'
import { useStateContextValue } from './State'
import { Favorite} from '@mui/icons-material'
import { MoreHoriz } from '@mui/icons-material'
import { PlayCircleFilled } from '@mui/icons-material'

function Body({spotify}) {
  const [{Just_my_Playlist},dispatch] = useStateContextValue();
  return (
    <div className='body'>
      <Header spotify={spotify}/>
      <div className="body--info">
        <img src={Just_my_Playlist?.images[0].url}></img>
        <div className='info--text'>
        <strong>Playlist</strong>
        <h2>{Just_my_Playlist?.name}</h2>
        <p>{Just_my_Playlist?.description}</p>
      </div>
      </div>
        <div className='body--song'>
          <div className='icons--body'>
            <PlayCircleFilled className='player'/>
            <Favorite fontSize='large'/>
            <MoreHoriz/>
          </div>
        </div>
    </div>
  )
}

export default Body