import { instance } from "./instance";
import { ProfileAPI } from "./ProfileAPI";



export const UsersAPI = {
    getUsers (currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response=> response.data);
                    
    },
    follow(userId: number){
        return instance.post(`follow/${userId}`)
        .then(response=> response.data);
    },
    unfollow(userId: number){
        return instance.delete(`follow/${userId}`)
        .then(response=> response.data)                                       
    },
    getProfile(id: string | number){
        
        return ProfileAPI.getProfile(id)
        
    },
}