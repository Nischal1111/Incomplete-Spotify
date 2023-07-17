import Login from "./components/Login";
import Player from "./components/Player";
import "./App.css"
import { useEffect, useState } from "react";
import { getToken } from "./components/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateContextValue } from "./components/State";

const spotify = new SpotifyWebApi()
function App() {
  const [{user,token},dispatch] = useStateContextValue();

  useEffect(()=>{
    const hash=getToken();
    window.location.hash=""

    const _token=hash.access_token;

    if(_token){
      dispatch({
        type:"SET_TOKEN",
        token:_token
      })
      spotify.setAccessToken(_token)


      spotify.getMe().then((user)=>{
        dispatch({
          type:"SET_USER",
          user:user

        })
      })
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists
        })
      })
      spotify.getPlaylist("4Buf9yxcLraE7bfXO8co7q").then(response=>{
        dispatch({
          type:"Set_Just_My_Playlist",
          Just_my_Playlist:response,
        })
      })
    }
  },[])

  return (
    <div>
      {token?<Player spotify={spotify}/>:<Login/>}
    </div>
  );
}

export default App;


