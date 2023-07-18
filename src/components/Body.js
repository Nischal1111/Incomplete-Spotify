import React, { useEffect } from 'react';
import '../Css/body.css';
import Header from './Header';
import Song from './Song';
import { useStateContextValue } from './State';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import axios from 'axios';

function Body({ spotify }) {
  const [{ token, sP }, dispatch] = useStateContextValue();

  useEffect(() => {
    const getInitialPlaylist = async () => {
        const response = await axios.get(
  `https://api.spotify.com/v1/playlists/${sP}`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }
);

    };

    getInitialPlaylist();
  }, [token, dispatch]);

  return (
    <div className='body'>
      <Header spotify={spotify} />
      <div className='body--info'>
        <img src={sP?.images[0]?.url} alt='Playlist' />
        <div className='info--text'>
          <strong>Playlist</strong>
          <h2>{sP?.name}</h2>
          <p>{sP?.description}</p>
        </div>
      </div>
      <div className='body--song'>
        <div className='icons--body'>
          <PlayCircleFilledIcon className='player' />
          <FavoriteIcon fontSize='large' />
          <MoreHorizIcon />
        </div>
        {sP?.tracks?.items.map((item) => (
          <Song key={item.track.id} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
