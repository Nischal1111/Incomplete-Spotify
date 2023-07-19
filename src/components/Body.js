import React, { useEffect } from 'react';
import '../Css/body.css';
import Header from './Header';
import Song from './Song';
import { useStateContextValue } from './State';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

function Body({ spotify }) {
  const [{ token, playlist_id }, dispatch] = useStateContextValue();
  console.log('Playlist ID:', playlist_id);
  console.log('Token:', token);

  useEffect(() => {
    const getInitialPlaylist = () => {
      fetch(`https://api.spotify.com/v1/playlists/${playlist_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response data here, if needed
          console.log(data);
        })
        .catch((error) => {
          console.error('Error fetching playlist:', error);
        });
    };

    getInitialPlaylist();
  }, [token, playlist_id, dispatch]);

  return (
    <div className='body'>
      <Header spotify={spotify} />
      <div className='body--info'>
        <img src={playlist_id?.images[0]?.url} alt='Playlist' />
        <div className='info--text'>
          <strong>Playlist</strong>
          <h2>{playlist_id?.name}</h2>
          <p>{playlist_id?.description}</p>
        </div>
      </div>
      <div className='body--song'>
        <div className='icons--body'>
          <PlayCircleFilledIcon className='player' />
          <FavoriteIcon fontSize='large' />
          <MoreHorizIcon />
        </div>
        {playlist_id?.tracks?.items.map((item) => (
          <Song key={item.track.id} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;

