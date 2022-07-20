import {AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction} from "./types";
import {IAuthUser} from "../../../models/IAuthUser";
import {AppDispatch} from "../../index";
import {AuthAPI} from "../../../api/AuthAPI";



export const AuthActionCreators = {
    setUser: (user: IAuthUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload}),
    setError: (payload: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload}),
    getAuthUserData: (): any =>async (dispatch: AppDispatch) =>{
        const response = await AuthAPI.getMe();
        
                
        if(response.data.resultCode === 0){
        const user = response.data.data; 
        dispatch(AuthActionCreators.setUser(user));
        dispatch(AuthActionCreators.setIsAuth(true))
        }     
    },
    login : (email: string, password: string, rememberMe?: boolean) =>async (dispatch: AppDispatch) =>{
        try{
            dispatch(AuthActionCreators.setIsLoading(true));
            dispatch(AuthActionCreators.setError(''))
            const response = await AuthAPI.login(email, password, rememberMe);
            
            if(response.data.resultCode === 0){
                dispatch(AuthActionCreators.getAuthUserData()) 
            } else {
                dispatch(AuthActionCreators.setError('Некорректный логин или пароль'));
            }
            dispatch(AuthActionCreators.setIsLoading(false));
        } catch (e) {
            dispatch(AuthActionCreators.setError('Произошла ошибка при логине'))
        } 
    },

    logout : () => async (dispatch: AppDispatch) =>{
        let response = await AuthAPI.logout();
        debugger
            if(response.data.resultCode === 0){
                dispatch(AuthActionCreators.setUser({} as IAuthUser));
                dispatch(AuthActionCreators.setIsAuth(false))
            }    
    }
}
