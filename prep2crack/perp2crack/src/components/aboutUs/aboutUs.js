import { Box, Card, Container, Grid, Typography } from '@mui/material'
import * as React from 'react'
import AboutUS from '../../assets/About-Us.png'
import './aboutStyles.css'
import { useEffect } from 'react'
import shubham from '../../assets/shubham.jpg'
import manish from '../../assets/manishjain.jpg'
import anshul from '../../assets/anshulsaini.jpeg'
import about from '../../assets/About us (1).png'
import { useTheme } from '@mui/material';
import { useMediaQuery } from '@mui/material'

const AboutUs = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, [])

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down("md"));


    return (

        <>
            <Container maxWidth="xl" className='aboutcontainer'>
                {!mobile ?
                    <>
                        <Grid container>
                            <Grid item lg={6} xl={6} sx={{ p: { lg: '55px', xl: '55px', md: '55px' } }}>
                                <Typography className='about' sx={{ pt: '150px' }}>
                                    About Us
                                </Typography>
                            </Grid>
                            <Grid item lg={6} xl={6} sx={{ p: { lg: '80px', xl: '55px', md: '55px' } }}>
                                <img
                                    src={about}
                                    alt="about-us"
                                    style={{ width: '400px', height: '300px' }}
                                />
                            </Grid>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid container>
                            <Grid item lg={6} xl={6} sx={12} xs={12} md={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src={about}
                                    alt="about-us"
                                    style={{ width: '300px', height: '250px' }}
                                />
                            </Grid>
                            <Grid item lg={6} xl={6} sx={12} xs={12} md={12}>
                                <Typography className='about'>
                                    About Us
                                </Typography>
                            </Grid>
                        </Grid>
                    </>
                }
            </Container>
            <Container maxWidth="xl" sx={{ mt: { lg: '150px', xl: '150px', sm: '150px' } }}>
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
            <Container maxWidth="lg" sx={{ mt: '50px', mb: '80px' }}>
                <Card className='card' sx={{ p: '50px' }}>
                    {!mobile ?
                        <Typography className='teamheading'>
                            Meet our amazing team.
                        </Typography>
                        :
                        <Typography className='teamheadingmob'>
                            Meet our amazing team.
                        </Typography>
                    }
                    <Grid container sx={{ pt: '50px' }}>
                        <Grid item lg={4} xl={4} sm={12} xs={12} md={12} sx={{ pb: '30px' }}>
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
                        <Grid item lg={4} xl={4} sm={12} xs={12} md={12} sx={{ pb: '30px' }}>
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
                                Verbal Trainer, Eloquent
                            </Typography>
                        </Grid>
                        <Grid item lg={4} xl={4} sm={12} xs={12} md={12} sx={{ pb: '30px' }}>
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
                                CMO, Cogent, Hodophile
                            </Typography>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </>

    )
}

export default AboutUs;