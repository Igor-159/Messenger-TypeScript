import { ProfileAction, ProfileActionEnum, ProfileState } from "./types";

const initialState: ProfileState = {
    posts:[
            {id: 1, message: "Hi, how are you", likesCount: 12 },
            {id: 2, message: "hhjsadffshju", likesCount: 11},
            {id: 3, message: "gdfxcdfr", likesCount: 11},
            {id: 4, message: "retijerfdjff", likesCount: 11},
        ],
    newPostText: "",
    profile: {},
    status: ''
};


export default function profileReducer (state = initialState, action: ProfileAction) {
    
    switch(action.type)  {
        case ProfileActionEnum.ADD_POST:{
        let newPost ={
            id: 7,
            message: action.payload,
            likesCount: 0
        }
        
        return{
            ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        }
        case ProfileActionEnum.UPDATE_NEW_POST_TEXT:{
        return{
            ...state,
                newPostText: action.payload
        }
        }
        case ProfileActionEnum.SET_USER_PROFILE:{
            return{
                ...state,
                    profile: action.payload 
            }
        }
        case ProfileActionEnum.SET_STATUS:{
            return{
                ...state,
                    status: action.payload
                }
            }
        case ProfileActionEnum.DELETE_POST:{
            return{
                ...state,
                    posts: state.posts.filter(p => p.id !== action.payload)
                }
            }
        case ProfileActionEnum.SAVE_PHOTO_SUCCESS:{
            return{
                ...state,
                    profile: {...state.profile, photos: action.payload}
            }
        }
        default:
             return state;
    }
}