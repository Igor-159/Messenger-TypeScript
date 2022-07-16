import {AxiosResponse} from "axios";
import { IProfile } from "../models/IProfile";
import { instance } from "./instance";






export  class ProfileAPI {
    
    static async getProfile(id:  number): Promise<AxiosResponse<IProfile>>{
        return instance.get(`profile/${id}`)
    }
    static async getStatus(id: number): Promise<AxiosResponse<any>>{
        
        return instance.get(`profile/status/${id}`)  
    }
    static async updateStatus(status: string): 
    Promise<AxiosResponse<{resultCode: number, messages: string[], data: object}>>{
        return instance.put(`profile/status`, {status: status});
    }
    static async savePhoto(photoFile: File){
        let formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
    static async saveProfile(profile: IProfile): 
    Promise<AxiosResponse>{
        return instance.put(`profile`, profile);
    }
}