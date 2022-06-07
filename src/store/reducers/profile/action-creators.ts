import { AppDispatch } from "../..";
import { ProfileAPI } from "../../../api/ProfileAPI";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { DeletePostAction, ProfileActionEnum, SavePhotoSuccessAction, SetAddPostAction, SetStatusAction, SetUpdateNewPostTextAction, SetUserProfileAction } from "./types";


export const ProfileActionCreators = {
    addPostActionCreator: (newPost: string): SetAddPostAction => ({type: ProfileActionEnum.ADD_POST, payload: newPost}),
    setUserProfile: (profile: {}): SetUserProfileAction => ({type: ProfileActionEnum.SET_USER_PROFILE, payload: profile}),
    setStatus: (status: string): SetStatusAction => ({type: ProfileActionEnum.SET_STATUS, payload: status}),
    deletePost: (postId: number): DeletePostAction => ({type: ProfileActionEnum.DELETE_POST, payload: postId}),
    savePhotoSuccess: (photos: File): SavePhotoSuccessAction => ({type: ProfileActionEnum.SAVE_PHOTO_SUCCESS, payload: photos}),
    updateNewPostTextActionCreator: (text: string): SetUpdateNewPostTextAction =>
          ({type: ProfileActionEnum.UPDATE_NEW_POST_TEXT, payload: text}),


    getStatus: (id: string | undefined) => async(dispatch: AppDispatch) =>{
        if(id){
        try {
            let response = await ProfileAPI.getStatus(id);
            dispatch(ProfileActionCreators.setStatus(response.data))
        } catch (e) {
            console.log(e);
        }
        }
        
    },
    updateStatus: (status: string) => async(dispatch: AppDispatch) =>{
        try{
            let response = await ProfileAPI.updateStatus(status);
            if(response.data.resultCode === 0)
            dispatch(ProfileActionCreators.setStatus(status));
        }catch(e){
            console.log(e)
        }
        
    },
    getUserProfile: (userId: string | undefined) =>async (dispatch: AppDispatch) =>{
        if(userId){
        let response = await ProfileAPI.getProfile(userId);
        dispatch(ProfileActionCreators.setUserProfile(response.data));
        }
    },
    savePhoto: (file: File) => async(dispatch: AppDispatch) =>{
        let response = await ProfileAPI.savePhoto(file);
        if(response.data.resultCode === 0)
        dispatch(ProfileActionCreators.savePhotoSuccess(response.data.data.photos));
    },
    saveProfile: (profile: {}) => async(dispatch: AppDispatch) =>{
    const {user} = useTypedSelector(state => state.auth);
    const response = await ProfileAPI.saveProfile(profile);
    
        if(response.data.resultCode === 0){
            let response = await ProfileAPI.getProfile(user.id);
            dispatch(ProfileActionCreators.setUserProfile(response.data));
        }
        
    }
}