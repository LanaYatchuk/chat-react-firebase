import { Navigate } from 'react-router-dom'
import Chat from '../Chat/Chat'
import Login from '../Login/Login'

import {LOGIN_ROUTE, CHAT_ROUTE}from './../utils/consts'


export const publicRoutes = [
    {path: LOGIN_ROUTE, 
    Element: Login },
    {path: '*', Element: Navigate, toPath: LOGIN_ROUTE}
]


export const privateRoutes = [
    {path: CHAT_ROUTE, 
    Element: Chat },
    {path: '*', Element: Navigate, toPath: CHAT_ROUTE}
]