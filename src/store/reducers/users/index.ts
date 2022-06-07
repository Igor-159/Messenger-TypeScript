import { updateObjectInArray } from "../../../utils/object-helpers"
import { UsersAction, UsersActionEnum, UsersState } from "./types"



const initialState: UsersState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export default function usersReducer(state = initialState, action: UsersAction): UsersState{
    
    switch(action.type)  {
        case UsersActionEnum.FOLLOW:
            return{
                ...state,
                users: updateObjectInArray(state.users, action.payload, "id", {followed: true})
            }
        case UsersActionEnum.UNFOLLOW:
            return{
                ...state,
                users: updateObjectInArray(state.users, action.payload, "id", {followed: false})
                
            }
        case UsersActionEnum.SET_USERS:
            return{
                ...state,
                users: action.payload
            }
        case UsersActionEnum.SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.payload
            }
        case UsersActionEnum.SET_TOTAL_USERS_COUNT:
            return{
                ...state,
                totalUsersCount: action.payload
            }
        case UsersActionEnum.TOGGLE_IS_FETCHING:
            return{
                ...state,
                isFetching: action.payload
                }
        case UsersActionEnum.TOGGLE_IS_FOLLOWING_PROGRESS:
            return{
                ...state,
                followingInProgress: action.payload.isFetching 
                 ? [...state.followingInProgress, action.payload.userId]
                 : state.followingInProgress.filter(id => id !== action.payload.userId)
            }
        default:
             return state;
    }
}