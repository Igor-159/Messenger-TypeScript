import { IUser } from "../../../models/IUser";



export interface UsersState {
users: IUser[];
pageSize: number;
totalUsersCount: number;
currentPage: number;
isFetching: boolean;
followingInProgress: any[];
}

export enum UsersActionEnum {
    FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_USERS = "SET_USERS",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT",
    TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING",
    TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"
}

export interface SetFollowAction {
    type: UsersActionEnum.FOLLOW;
    payload: number;
}

export interface SetUnFollowAction {
    type: UsersActionEnum.UNFOLLOW;
    payload: number;
}

export interface SetUsersAction {
    type: UsersActionEnum.SET_USERS;
    payload: [];
}

export interface SetCurrentPageAction {
    type: UsersActionEnum.SET_CURRENT_PAGE;
    payload: number;
}

export interface SetTotalUsersCountAction {
    type: UsersActionEnum.SET_TOTAL_USERS_COUNT;
    payload: number;
}

export interface SetToggleIsFetchingAction {
    type: UsersActionEnum.TOGGLE_IS_FETCHING;
    payload: boolean;
}

export interface SetToggleIsFollowingProgressAction {
    type: UsersActionEnum.TOGGLE_IS_FOLLOWING_PROGRESS;
    payload: {isFetching: boolean, userId: number};
}

export type UsersAction =
    SetFollowAction |
    SetUnFollowAction |
    SetUsersAction |
    SetCurrentPageAction |
    SetTotalUsersCountAction |
    SetToggleIsFetchingAction |
    SetToggleIsFollowingProgressAction
