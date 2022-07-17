import { IProfile, photosProfile } from "../../../models/IProfile";

interface Post {
    id: number , 
    message: string, 
    likesCount: number,
}

export interface ProfileState {
    posts: Post[],
    newPostText: string,
    profile: IProfile ,
    status: string,
    error: string
}


export enum ProfileActionEnum {
    ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW_POST-TEXT',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    SET_STATUS  = 'SET_STATUS',
    DELETE_POST = 'DELETE_POST',
    SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS',
    SET_ERROR = 'SET_ERROR'
}

export interface SetAddPostAction {
    type: ProfileActionEnum.ADD_POST,
    payload: string
}

export interface SetUpdateNewPostTextAction {
    type: ProfileActionEnum.UPDATE_NEW_POST_TEXT,
    payload: string
}

export interface SetUserProfileAction {
    type: ProfileActionEnum.SET_USER_PROFILE,
    payload: IProfile
}

export interface SetStatusAction {
    type: ProfileActionEnum.SET_STATUS,
    payload: string
}

export interface DeletePostAction {
    type: ProfileActionEnum.DELETE_POST,
    payload: number
}

export interface SavePhotoSuccessAction {
    type: ProfileActionEnum.SAVE_PHOTO_SUCCESS,
    payload: photosProfile
}

export interface SetErrorAction {
   type: ProfileActionEnum.SET_ERROR,
   payload: string 
}

export type ProfileAction = 
    SetAddPostAction |
    SetUpdateNewPostTextAction |
    SetUserProfileAction |
    SetStatusAction |
    DeletePostAction |
    SavePhotoSuccessAction |
    SetErrorAction

