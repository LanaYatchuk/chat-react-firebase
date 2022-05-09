import React, { useContext } from 'react'
import { Routes ,Route } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth'
import { privateRoutes, publicRoutes } from './router'
import { Context } from '../..';

export default function AppRouter() {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return user ?(
        <Routes>
              {privateRoutes.map(({path, Component}) => <Route
               key={path} path={path} element={<Component/>} exact/>)}       
        </Routes>
    )
    : (
         <Routes>
              {publicRoutes.map(({path, Component}) => <Route 
              key={path} path={path} element={<Component/>} exact/>)} 
     </Routes>
    )
}
