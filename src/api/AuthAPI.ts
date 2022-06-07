import {AxiosResponse} from "axios";
import { instance } from "./instance";






export  class AuthAPI {
   
    static async login(email: string, password: string, rememberMe = false): Promise<AxiosResponse>{
        return instance.post(`auth/login`, {email, password, rememberMe});
    }

    static async logout(){
        const response = instance.delete(`auth/login`);
        return response;
    }

    static async getMe(){
        const response = instance.get('auth/me');
        return response;
    }
}


