import React, { useContext } from 'react'
import { Routes ,Route } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth'
import { privateRoutes, publicRoutes } from './router'
import { Context } from '../..';


export default function AppRouter() {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

 return <Routes>
        {user ? 
              (privateRoutes.map(({path, Element, toPath}) => <Route
               key={path} path={path} element={<Element to={toPath ? toPath : ''}/>}/>))  
            :   (publicRoutes.map(({path, Element, toPath}) => <Route 
            key={path} path={path} element={<Element to={toPath ? toPath : ''}/>}/>))}
        </Routes>

}