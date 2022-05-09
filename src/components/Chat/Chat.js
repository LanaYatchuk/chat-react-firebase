import React, { useContext, useState } from 'react'
import s from './Chat.module.css'
import { Context } from '../..'
import { useAuthState } from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import { Avatar, Button, Container, Grid, TextField } from '@mui/material'
import Loader from '../Loader/Loader'
import firebase from 'firebase/compat/app';


export default function Chat() {
  const {auth, firestore} = useContext(Context)
  const [user] = useAuthState(auth)
  const [value, setValue] = useState('')

  const [messages, loading] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
  )

  


  const sendMessage = async() => {
    firestore.collection('messages').add({
      uid: user.uid, 
      displayName: user.displayName, 
      photoURL: user.photoURL, 
      text: value, 
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
     setValue('')
  }

  if (loading) {
    return  <Loader/>
   

  }

    return (
       <Container >
          <Grid container justifyContent={'center'} style={{height: window.innerHeight -50, marginTop: 40, padding: 0}}>
            <div className={s.chat_wrapper}>
              
              {messages ? messages.map(message => 
                <div key={message.key} style={{margin: 5, border: user.uid === message.uid ? '2px solid green' : '2px solid red',
                 marginLeft: user.uid === message.uid ? 'auto' : '10px',
                 width: 'fit-content'
                }}>
                  <Grid container>
                  <Avatar src={message.photoURL}/>
                    <div>{message.displayName}</div>
                  </Grid>
                  <div>{message.text}</div>
                </div>
              )
             : <Loader/>
              }

            </div>

            <Grid container direction={'column'} alignItems={'flex-end'} className={s.message}>

            <TextField 
            fullWidth maxRows={2}  
            variant={'outlined'}
            style={{margin: 2}}
            value={value}
            onChange={e => setValue(e.target.value)}
             
             />
            <Button onClick={sendMessage} variant={'outlined'}>Send</Button>
          </Grid> 
          </Grid>
         
       </Container>
    )
}
