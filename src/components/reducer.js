export const initialState={
    user:null,
    playlists:[],
    item:null,
    playing:false,
    token:null,

}
    // Action = type,[payload]

const reducer =(state,action)=>{
    console.log(action)
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
        
        default :
            return state
    }
}

export default reducer