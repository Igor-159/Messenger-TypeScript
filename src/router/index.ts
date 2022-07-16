import React from "react";
import Dialogs from "../pages/Dialogs";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Users from "../pages/Users";


export interface IRoute {
    path: string;
    element: React.ComponentType;
    
}

export enum RouteNames {
    LOGIN = '/login',
    PROFILE = '/profile/:id',
    USERS = '/users',
    DIALOGS = '/dialogs',
    NOPARAMS = '*'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN,  element: Login},
    {path: RouteNames.NOPARAMS, element: Login},
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.PROFILE, element: Profile},
    {path: RouteNames.DIALOGS, element: Dialogs},
    {path: RouteNames.USERS, element: Users},
]
