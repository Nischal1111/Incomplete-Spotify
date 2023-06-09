import React, { useEffect } from 'react';
import { useStateContextValue } from './State';
import axios from 'axios';

const Playlist = () => {
    const [{ token, dispatch }] = useStateContextValue();

    useEffect(() => {
        const getPlaylist = async () => {

        const response = await axios.get(
            'https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n',
            {
                headers: {
                Authorization: 'Bearer ' + token, // Added a space after "Bearer"
                'Content-Type': 'application/json',
            },
        }
        );
        const {items}=response.data;
        const playlists=items?.map(({name,id})=>{
            return {name,id}
        })
        console.log(playlists)
    }
        getPlaylist();
    }, [token, dispatch]);

return <div></div>;
};

export default Playlist;

