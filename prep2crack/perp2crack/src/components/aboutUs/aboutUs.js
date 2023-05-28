import { Box, Card, Container, Grid, Typography } from '@mui/material'
import * as React from 'react'
import AboutUS from '../../assets/About-Us.png'
import './aboutStyles.css'
import { useEffect } from 'react'
import shubham from '../../assets/shubham.jpg'
import manish from '../../assets/manishjain.jpg'
import anshul from '../../assets/anshulsaini.jpeg'

const AboutUs = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, [])


    return (

        <>
            <Container maxWidth="xl" sx={{ mt: '200px' }}>
                <Grid container>
                    <Grid item xl={6.5} lg={6.5} md={12} sm={12} xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img
                            src={AboutUS}
                            alt="about-us"
                            className='imghead'
                        />
                    </Grid>
                    <Grid item xl={5.5} lg={5.5} md={12} sm={12} xs={12}>
                        <Typography className="aboutus">
                            About Us
                        </Typography>
                        <Typography className='aboutcontent'>
                            Prep2Crack is founded by Mr. Shubham Khandelwal who have counselled around 7000+ students and have shaped their future towards better career.
                            Always Challenging the Ordinary and the limited structure of the Indian education, he embarked the journey of building the most economical and result driven application service and career guidance team. Their aim is to provide the most quality and affordable Education services in the World.
                            <br></br>
                            For them, Prep2Crack stands for “Preparing you for better tomorrow”.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="lg" sx={{ mt: '50px', mb:'80px' }}>
                <Card className='card' sx={{ p: '50px' }}>
                    <Typography className='teamheading'>
                        Meet our amazing team.
                    </Typography>

                    <Grid container sx={{ pt: '50px' }}>
                        <Grid item lg={4} xl={4} sm={12} xs={12} md={12}>
                            <Box
                                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            >
                                <img
                                    src={shubham}
                                    alt="about-us"
                                    style={{ width: '200px', height: '300px' }}

                                />
                            </Box>
                            <Typography className='teamname'>
                                Shubham Khandelwal
                            </Typography>
                            <Typography className='teamcontent'>
                                Founder, Mathemtician, Athelete
                            </Typography>
                        </Grid>
                        <Grid item lg={4} xl={4} sm={12} xs={12} md={12}>
                            <Box
                                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            >
                                <img
                                    src={anshul}
                                    alt="about-us"
                                    style={{ width: '200px', height: '300px' }}

                                />
                            </Box>
                            <Typography className='teamname'>
                                Anshul Saini
                            </Typography>
                            <Typography className='teamcontent'>
                                Verbal Trainer. Eloquent.
                            </Typography>
                        </Grid>
                        <Grid item lg={4} xl={4} sm={12} xs={12} md={12}>
                            <Box
                                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            >
                                <img
                                    src={manish}
                                    alt="about-us"
                                    style={{ width: '200px', height: '300px' }}

                                />
                            </Box>
                            <Typography className='teamname'>
                                Manish Jain
                            </Typography>
                            <Typography className='teamcontent'>
                                CMO. Cogent. Hodophile
                            </Typography>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </>

    )
}

export default AboutUs;