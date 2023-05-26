export const authEndpoint = "https://accounts.spotify.com/authorize"
const redirect="http://localhost:3000/"
const clientid="42f5a3c23a52424384551c81b8177712"

const scopes=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-top-read"
]
export const getToken=()=>{
    return window.location.hash
    .substring(1).split("&").reduce((initial,item)=>{
        let parts=item.split("=");
        initial[parts[0]]=decodeURIComponent(parts[1])

        return initial
    },{})

}
export const loginUrl=`${authEndpoint}?client_id=${clientid}&redirect_uri=${redirect}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`