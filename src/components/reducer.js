import {cases} from "./constants"
export const initialState={
    user:null,
    playlists:[],
    item:null,
    playing:false,
    token:null,

}
const reducer =(state,action)=>{
    switch(action.type){
        case "SET_USER":
            return{
                ...state, 
                user:action.user
            }
        case "SET_TOKEN":
            return {
                ...state,
                token:action.token
            }
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists:action.playlists
            }
        case "Set_Just_My_Playlist":
            return{
                ...state,
                Just_my_Playlist:action.Just_my_Playlist
            }
        default :
            return state
    }
}

export default reducer