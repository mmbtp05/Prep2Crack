import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import './stylesLayout.css'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';




const Layout = () => {

    return (
        <>



           
                <nav class="stroke">
                    <ul>
                        <li>
                            <Link exact to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link exact to="/aboutUs">
                                aboutUs
                            </Link>
                        </li>
                        <li>
                            <Link exact to="/productandservice">
                                services
                            </Link>
                        </li>
                        <li>
                            <Link exact to="/studydestination">
                                studydestination
                            </Link>
                        </li>
                        <li>
                            <Link exact to="/contact">
                                contactus
                            </Link>
                        </li>
                        <li>
                            <Button variant="contained" className='button' disableElevation>Get a quote</Button>
                        </li>
                    </ul>
                </nav>
           

            <Outlet />

            <Container style={{ backgroundColor: '#E2F0FF' }} maxWidth="xl" sx={{mt: '100px'}}>
                <Grid container className='footerupper'>
                    <Grid item lg={6} xl={6}>

                    </Grid>
                    <Grid item lg={6} xl={6} style={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                        <Stack direction="row" spacing={1}>
                            <FacebookIcon />
                            <InstagramIcon />
                            <LinkedInIcon />
                        </Stack>
                    </Grid>
                </Grid>
                <Divider variant="middle" />
                <Grid container sx={{ mt: '20px', pb: '20px' }}>
                    <Grid item lg={3} xl={3}>
                        <Typography className='footerabtus'>
                            About Us
                        </Typography>
                        <Typography>
                            London. Michaelmas term lately over, and the Lord Chancellor sitting in Lincoln's Inn Hall. Implacable November weather. As much mud in the streets as if the waters had but newly retired from the face of the earth, and it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling like an elephantine lizard up Holborn Hill.
                        </Typography>
                    </Grid>
                    <Grid item lg={3} xl={3}>
                        <Typography className='footerabtus'>
                            Services
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <FiberManualRecordIcon style={{fontSize: '10px'}} sx={{pt: '7px'}} />
                            <Typography>
                                Test Preperation
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <FiberManualRecordIcon style={{fontSize: '10px'}} sx={{pt: '7px'}} />
                            <Typography>
                                Application Counselling
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <FiberManualRecordIcon style={{fontSize: '10px'}} sx={{pt: '7px'}} />
                            <Typography>
                                Career Guidance
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item lg={3} xl={3}>
                        <Typography className='footerabtus'>
                            Quick Links
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <FiberManualRecordIcon style={{fontSize: '10px'}} sx={{pt: '7px'}}/>
                            <Typography>
                                Home
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <FiberManualRecordIcon style={{fontSize: '10px'}} sx={{pt: '7px'}} />
                            <Typography>
                               About Us
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <FiberManualRecordIcon style={{fontSize: '10px'}} sx={{pt: '7px'}} />
                            <Typography>
                                Services
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <FiberManualRecordIcon style={{fontSize: '10px'}} sx={{pt: '7px'}} />
                            <Typography>
                                Study Destination
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <FiberManualRecordIcon style={{fontSize: '10px'}} sx={{pt: '7px'}} />
                            <Typography>
                                Contact Us
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item lg={3} xl={3}>
                        <Typography className='footerabtus'>
                            Contact info
                        </Typography>
                        <Typography>
                           319-B, Scheme No. 1, Arya Nagar, Alwar
                        </Typography>
                        <Typography>
                           Phone     +91-7742842292
                        </Typography>
                        <Typography>
                           E-mail    preptocrack@gmail.com
                        </Typography>
                        <Typography>
                           website   www.preptocrack.com
                        </Typography>
                    </Grid>
                </Grid>
            </Container>





        </>
    )
}

export default React.memo(Layout);