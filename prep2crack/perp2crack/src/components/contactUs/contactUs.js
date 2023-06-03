import React, { useEffect, useState } from 'react'
import { Container, Grid, TextField, Button, useMediaQuery, useTheme } from '@mui/material'
import ContactUss from '../../assets/Contact-us.png'
import MenuItem from '@mui/material/MenuItem';
import axios from '../../axios'
import CircularProgress from '@mui/material/CircularProgress';

const ContactUs = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [number, setNumber] = useState("");


    const [errorName, setErrorName] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorSubject, setErrorSubject] = useState(false);
    const [errorNumber, setErrorNumber] = useState(false);

    const [submitted, setSubmitted] = useState(true);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }, [])

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down("md"));


    const subjects = [
        {
            value: 'SAT',
            label: '1',
        },
        {
            value: 'GMAT',
            label: '2',
        },
        {
            value: 'GRE',
            label: '3',
        },
        {
            value: 'TOEFL',
            label: '4',
        },
        {
            value: 'ILETS',
            label: '5',
        },
        {
            value: 'PTE',
            label: '6',
        },
        {
            value: 'Admission Counselling',
            label: '7',
        },
        {
            value: 'Career Guidance',
            label: '8',
        },


    ];


    const handleSubmit = (name, email, subject, message, number) => {
        setSubmitted(false)
        axios.post(`form/`, {
            name: name,
            email: email,
            subject: subject,
            message: message.length === 0 ? "NO MESSAGE" : message,
            phone_no: number
        }).then((res) => {
            setSubmitted(true)
            setErrorEmail(false)
            setErrorName(false)
            setErrorNumber(false)
            setErrorSubject(false)
            setName("")
            setEmail("")
            setSubject("")
            setMessage("")
            setNumber("")
            alert("Your information has been submitted.")
        }).catch((error) => {
            if (error.response.data.name) {
                setErrorName(true)
            } else {
                setErrorName(false)
            }
            if (error.response.data.email) {
                setErrorEmail(true)
            } else {
                setErrorEmail(false)
            }
            if (error.response.data.subject) {
                setErrorSubject(true)
            } else {
                setErrorSubject(false)
            }
            if (error.response.data.phone_no.phone_no) {
                setErrorNumber(true)
            } else {
                setErrorNumber(false)
            }
            if (error.response.data.phone_no) {
                setErrorNumber(true)
            } else {
                setErrorNumber(false)
            }
            setSubmitted(true)
        })
    }




    return (
        <>

            <Container maxWidth="xl" sx={{ mt: { lg: '150px', xl: '150px' }, mb: '80px' }}>
                <Grid container>
                    <Grid item xl={6} lg={6.5} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {mobile ?
                            <img
                                src={ContactUss}
                                alt="contact-us"
                                style={{ width: '340px', height: '320px' }}
                            />
                            :
                            <img
                                src={ContactUss}
                                alt="contact-us"
                                style={{ width: '500px', height: '400px' }}
                            />
                        }
                    </Grid>
                    <Grid item xl={6} lg={5.5}>
                        <TextField
                            value={name}
                            label="Enter your name"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            size='small'
                            fullWidth
                            sx={{ mt: '20px', mb: '20px' }}
                            error={errorName ? true : false}
                            helperText={errorName ? "Please enter your name" : null}
                        />
                        <TextField
                            value={email}
                            label="Email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            size='small'
                            fullWidth
                            sx={{ mt: '20px', mb: '20px' }}
                            error={errorEmail ? true : false}
                            helperText={errorEmail ? "Please enter a valid email address" : null}
                        />
                        <TextField
                            value={subject}
                            label="Subject"
                            onChange={(e) => {
                                setSubject(e.target.value);
                            }}
                            size='small'
                            fullWidth
                            select
                            sx={{ mt: '20px', mb: '20px' }}
                            error={errorSubject ? true : false}
                            helperText={errorSubject ? "Please select a subject" : null}
                        >
                            {subjects.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.value}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            value={number}
                            label="Mobile Number"
                            onChange={(e) => {
                                setNumber(e.target.value);
                            }}
                            size='small'
                            fullWidth
                            sx={{ mt: '20px', mb: '20px' }}
                            error={number.length > 10 || errorNumber ? true : false}
                            helperText={number.length > 10 || errorNumber ? "Please enter a valid number" : null}
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
                            sx={{ mt: '20px', mb: '20px' }}
                        />
                        {submitted ?
                            <Button
                                variant="container"
                                style={{
                                    backgroundColor: 'darkblue',
                                    color: 'white',
                                    borderRadius: '20px',
                                    fontFamily: 'system-ui',
                                    fontWeight: 'bold'
                                }}
                                onClick={() => handleSubmit(name, email, subject, message, number)}
                            >
                                Submit
                            </Button>
                            :
                            <Button
                                variant="container"
                                style={{
                                    backgroundColor: 'darkblue',
                                    color: 'white',
                                    borderRadius: '20px',
                                    fontFamily: 'system-ui',
                                    fontWeight: 'bold'
                                }}
                                onClick={() => handleSubmit(name, email, subject, message, number)}
                            >
                                <CircularProgress size="30px"/>
                            </Button>
                        }
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default ContactUs    