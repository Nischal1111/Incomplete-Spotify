import Login from "./components/Login";
import Player from "./components/Player";
import "./App.css"
import { useEffect, useState } from "react";
import { getToken } from "./components/spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi()
function App() {
  const [token,setToken]=useState(null)
  useEffect(()=>{
    const hash=getToken();
    window.location.hash=""

    const _token=hash.access_token;

    if(_token){
      setToken(_token);
      spotify.setAccessToken(_token)
      spotify.getMe().then((user)=>{

      })
    }


  },[])
  return (
    <div>
      {token?<Player/>:<Login/>}
    </div>
  );
}

export default App;
