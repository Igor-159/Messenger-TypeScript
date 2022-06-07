import { AppDispatch } from "../..";
import { UsersAPI } from "../../../api/UsersAPI";
import { AuthActionEnum } from "../auth/types";
import { SetCurrentPageAction, SetFollowAction, SetToggleIsFetchingAction, SetToggleIsFollowingProgressAction, SetTotalUsersCountAction, SetUnFollowAction, SetUsersAction, UsersAction, UsersActionEnum } from "./types";


export const UsersActionCreators = {
followSuccess: (userId: number): SetFollowAction  => ({type: UsersActionEnum.FOLLOW, payload: userId}),
unfollowSuccess : (userId: number): SetUnFollowAction =>({type: UsersActionEnum.UNFOLLOW, payload: userId}),
setUsers: (users: []): SetUsersAction =>({type: UsersActionEnum.SET_USERS, payload: users}),
setCurrentPage: (currentPage: number): SetCurrentPageAction =>({type: UsersActionEnum.SET_CURRENT_PAGE, payload: currentPage}),
setTotalUsersCount: (totalUsersCount: number): SetTotalUsersCountAction =>({type: UsersActionEnum.SET_TOTAL_USERS_COUNT, payload: totalUsersCount}),
toggleIsFetching: (isFetching: boolean): SetToggleIsFetchingAction =>({type:UsersActionEnum.TOGGLE_IS_FETCHING, payload: isFetching}),
toggleFollowingProgress: (isFetching: boolean, userId: number): SetToggleIsFollowingProgressAction =>({type: UsersActionEnum.TOGGLE_IS_FOLLOWING_PROGRESS, payload:{isFetching, userId} }),
requestUsers: (page: number, pageSize: number) =>{
    return async(dispatch: AppDispatch) =>{
            dispatch(UsersActionCreators.toggleIsFetching(true));
            dispatch(UsersActionCreators.setCurrentPage(page));
            let data = await UsersAPI.getUsers(page, pageSize);
            dispatch(UsersActionCreators.toggleIsFetching(false));
            dispatch(UsersActionCreators.setUsers(data.items));
            dispatch(UsersActionCreators.setTotalUsersCount(data.totalCount));
    
}
},
followUnfollowFlow: async (dispatch: AppDispatch, userId: number, apiMethod: any, actionCreator: any) =>{
    dispatch (UsersActionCreators.toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    if(response.resultCode === 0){
    dispatch(actionCreator(userId))
    };
    dispatch (UsersActionCreators.toggleFollowingProgress(false, userId));    
},
follow: (userId: number) =>{
    return async(dispatch: AppDispatch) =>{
        UsersActionCreators.followUnfollowFlow(dispatch, userId, UsersAPI.follow.bind(userId), UsersActionCreators.followSuccess)   
}
},
unfollow: (userId: number) =>{
    return async(dispatch: AppDispatch) =>{
        UsersActionCreators.followUnfollowFlow(dispatch, userId, UsersAPI.follow.bind(userId), UsersActionCreators.unfollowSuccess)
}
}
}