import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {privateRoutes, publicRoutes, RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.auth);

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
