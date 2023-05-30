export const initialState={
    user:null,
    playlist:[],
    item:null,
    playing:false,
    token:"BQA0pO7p4sypW91wGVOV5fRUkt3ti7WMnmfO4bvHVnnQmYMZ6NhxhtaKoIyO9tf3jCGeW1FtC-NU7RqFZmPPgyn5ze4pklNwe0-GzdYRkpPdwAknTqVvLMYmWOOm8tGWswoCiXTkst4V7Wy8sO6enj8BCj7Gsi3YcixKDEjDz0k0JJsSn7QeOMyluBWqIVgcsAMdnFydYho1yGAOkKJh"

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
        
        default :
            return state
    }
}

export default reducer