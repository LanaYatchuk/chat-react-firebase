import Chat from '../Chat/Chat'
import Login from '../Login/Login'

import {LOGIN_ROUTE, CHAT_ROUTE, NO_MATCH }from './../utils/consts'


export const publicRoutes = [
    {path: LOGIN_ROUTE, 
    Component: Login },
    // {path: NO_MATCH, 
    // Component: NoMatch
    // }
]


export const privateRoutes = [
    {path: CHAT_ROUTE, 
    Component: Chat },
    // {path: NO_MATCH,
    // Component: NoMatch
    // }
]