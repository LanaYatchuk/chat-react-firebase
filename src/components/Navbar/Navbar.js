
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';
import { useContext } from 'react';
import { Context } from '../..';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Navbar() {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    return (
        <AppBar position="static" color={'primary'}>
            <Toolbar >
            <Grid container justifyContent={'flex-end'}>
                {user
                    ? <Button onClick={() => auth.signOut()} 
                    color={'secondary'} size={'large'} variant={"outlined"}>Logout</Button>
                    : <NavLink to={LOGIN_ROUTE}><Button color={'secondary'} size={'large'} variant={"outlined"}>
                        Login </Button> </NavLink>  
                }
                </Grid>
            </Toolbar>
        </AppBar>

    );
}


