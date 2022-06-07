import {AuthActionCreators} from "./auth/action-creators";
import { ProfileActionCreators } from "./profile/action-creators";
import  {UsersActionCreators} from './users/action-creators' ;

export const allActionCreators = {
    ...AuthActionCreators,
    ...UsersActionCreators,
    ...ProfileActionCreators
}

