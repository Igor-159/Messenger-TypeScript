export interface contactsProfile {
    [index: string]: any; 
    'github' : string , 
    'vk': string,
    'facebook': string,
    'instagram': string,
    'twitter': string,
    'website': string,
    'youtube': string,
    'mainLink': string,
} 

export interface photosProfile {
    [index: string]: any;
    small: string,
    large: string 
}


export interface IProfile {
    'userId': number ,
    'lookingForAJob': boolean,
    'lookingForAJobDescription': string,
    'fullName': string,
    'contacts': contactsProfile ,
    'photos': photosProfile
}