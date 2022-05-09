import { Box, Button, Container, Grid } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '../..'
import s from './Login.module.css'
import firebase from 'firebase/compat/app';
import { NavLink } from 'react-router-dom';
import { CHAT_ROUTE } from '../utils/consts';

export default function Login() {
    const {auth} = useContext(Context)
 
     
    const login = async() => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} =  await auth.signInWithPopup(provider)
    }


    return (
        <Container>
          <Grid container className={s.grid} style={{height: window.innerHeight - 30}}>
            <Grid className={s.form} container alignItems={'center'} direction={'column'}>
              <Box p={5}>
                <Button onClick={login} variant={'outlined'}>
                  <NavLink to={CHAT_ROUTE}>Login with Google </NavLink>
                  </Button> 

              </Box>
            </Grid>
          </Grid>
        </Container>
    )
}
