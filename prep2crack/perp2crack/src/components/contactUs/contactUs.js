import React, { useState } from 'react'
import { Typography, Container, Grid, TextField } from '@mui/material'

const ContactUs = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");



    return (
        <>

            <Container maxWidth="xl" sx={{ mt: '150px' }}>
                <Grid container>
                    <Grid item xl={6} lg={6}>

                    </Grid>
                    <Grid item xl={6} lg={5}>
                        <TextField
                            value={name}
                            label="Enter your name"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            size='small'
                            fullWidth
                            sx={{mt: '20px' , mb: '20px' }}
                        />
                         <TextField
                            value={email}
                            label="Email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            size='small'
                            fullWidth
                            sx={{mt: '20px' , mb: '20px'}}

                        />
                         <TextField
                            value={subject}
                            label="Subject"
                            onChange={(e) => {
                                setSubject(e.target.value);
                            }}
                            size='small'
                            fullWidth
                            // rows={5}
                            sx={{mt: '20px' , mb: '20px'}}

                        />
                         <TextField
                            value={message}
                            label="Your Message"
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                            size='small'
                            fullWidth
                            multiline
                            rows={4}
                            sx={{mt: '20px' , mb: '20px'}}

                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default ContactUs    