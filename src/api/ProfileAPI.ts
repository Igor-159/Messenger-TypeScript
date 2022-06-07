import {AxiosResponse} from "axios";
import { instance } from "./instance";






export  class ProfileAPI {
    
    static async getProfile(id: string | number): Promise<AxiosResponse<{}>>{
        return instance.get(`profile/${id}`)
    }
    static async getStatus(id: string): Promise<AxiosResponse<any>>{
        
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
    static async saveProfile(profile: {}): 
    Promise<AxiosResponse<{resultCode: number, messages: string [], data: {}}>>{
        return instance.put(`profile`, profile);
    }
}