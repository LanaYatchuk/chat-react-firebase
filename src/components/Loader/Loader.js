import React from 'react'
import { Container, Grid } from '@mui/material'
import s from './Loader.module.css'

export default function Loader() {
    return (
        <Container>
          <Grid container className={s.grid} style={{height: window.innerHeight - 30}}>
            <Grid container alignItems={'center'} direction={'column'}>
              <div className={s.ldsDualRing}/>
            </Grid>
          </Grid>
        </Container>
    )
}



