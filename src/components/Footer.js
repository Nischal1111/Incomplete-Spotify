import React from 'react'
import "../Css/footer.css"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import RepeatIcon from '@mui/icons-material/Repeat'
import  SkipNextIcon from '@mui/icons-material/SkipNext'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import { Grid,Slider } from '@mui/material'
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay'
import VolumeDownIcon from '@mui/icons-material/VolumeDown'

function Footer() {
  return (
    <div className='footer'>
      <div className="left">
        <img src='https://mensnepal.com/wp-content/uploads/2023/01/sajjan-raj-vaidya-bio.jpg' className='album--logo' alt='Image'></img>
        <div className="song--info">
        <h4>Hataaridai</h4>
        <p>Sajjan Raj</p>
        </div>
      </div>
      <div className="center">
        <ShuffleIcon className='footer--green'/>
        <SkipPreviousIcon className='footer--skip'/>
        <PlayCircleOutlineIcon className='footer--play' fontSize='large'/>
        <SkipNextIcon className='footer--skip'/>
        <RepeatIcon className='footer--green'/>
        
      </div>
      <div className="right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon/>
          </Grid>
          <Grid item>
            <VolumeDownIcon/>
          </Grid>
          <Grid item xs >
              <Slider className="slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
