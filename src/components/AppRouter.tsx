import React, { useEffect } from 'react';
import {Route, Routes, useNavigate } from 'react-router-dom';
import {privateRoutes, publicRoutes, RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";


const AppRouter = () => {
    const {isAuth, user} = useTypedSelector(state => state.auth);
    let navigate = useNavigate();

    useEffect(() => {
        navigate(`/profile/${user.id}`)   
    },[isAuth])

    return (
        
        isAuth 
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path}
                           element={<route.element/>}
                           key={route.path}
                    />
                )} 
            </Routes>
            
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path}
                           element={<route.element/>}
                           key={route.path}
                    />
                )}
            </Routes>
            
    );
};

export default AppRouter;
