import React, { useEffect } from 'react';
import { useStateContextValue } from './State';
import {cases} from "./constants"
import axios from 'axios';

const Playlist = () => {
    const [{ token, dispatch }] = useStateContextValue();

    useEffect(() => {
        const getPlaylist = async () => {

        const response = await axios.get(
            'https://api.spotify.com/v1/playlists',
            {
                headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
        }
        );
        const {items}=response.data;
        const playlists=items?.map(({name,id})=>{
            return {name,id}
        })
        dispatch({type:cases.SET_PLAYLISTS,playlists})
    }
        getPlaylist();
    }, [token, dispatch]);

return <div>
    
</div>;
};

export default Playlist;

