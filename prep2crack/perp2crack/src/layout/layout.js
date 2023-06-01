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
import { Typography, useMediaQuery, useTheme } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';








const Layout = () => {

    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down('md'));

    const navigation = useNavigate();

    const [mobileOpen, setMobileOpen] = React.useState(false);
    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen)
    }

    const mobileBook = () => {
        handleDrawerToggle();
        navigation("/contact");
    }

    const drawer = (
        <div>
            <List>

                <ListItem>
                    <Link exact="true" to="/" onClick={handleDrawerToggle}>
                        <ListItemText primary="Home"></ListItemText>
                    </Link>
                </ListItem>

                <ListItem>
                    <Link exact to="/aboutUs" onClick={handleDrawerToggle}>
                        <ListItemText primary="About Us"></ListItemText>
                    </Link>
                </ListItem>

                <ListItem>
                    <Link exact to="/productandservice" onClick={handleDrawerToggle}>
                        <ListItemText primary="Services"></ListItemText>
                    </Link>
                </ListItem>

                <ListItem>
                    <Link exact to="/studydestination" onClick={handleDrawerToggle}>
                        <ListItemText primary="Study Destinations"></ListItemText>
                    </Link>
                </ListItem>

                <ListItem>
                    <Link exact to="/contact" onClick={handleDrawerToggle}>
                        <ListItemText primary="Contact Us"></ListItemText>
                    </Link>
                </ListItem>

                <ListItem>
                    <Button variant="contained" className='button' onClick={() => mobileBook()}>Book a Demo</Button>
                </ListItem>



            </List>
        </div>
    );

    return (
        <>


            {mobile ?

                <>
                    <IconButton onClick={() => handleDrawerToggle()}>
                        <MenuIcon />
                    </IconButton>
                    <SwipeableDrawer
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                    >
                        <IconButton onClick={() => handleDrawerToggle()}>
                            <CloseIcon />
                        </IconButton>

                        {drawer}
                    </SwipeableDrawer>

                </>


                :
                <nav class="stroke">
                    <ul>
                        <li>
                            <Link exact to="/">
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link exact to="/aboutUs">
                                ABOUT US
                            </Link>
                        </li>
                        <li>
                            <Link exact to="/productandservice">
                                SERVICES
                            </Link>
                        </li>
                        <li>
                            <Link exact to="/studydestination">
                                STUDY DESTINATION
                            </Link>
                        </li>
                        <li>
                            <Link exact to="/contact">
                                CONTACT US
                            </Link>
                        </li>
                        <li>
                            <Button variant="contained" className='button' disableElevation onClick={() => navigation("/contact")}>Book a Demo</Button>
                        </li>
                    </ul>
                </nav>
            }




            <Outlet />

            <Container style={{ backgroundColor: '#E2F0FF' }} maxWidth="xl" >
                <Grid container className='footerupper'>
                    <Grid item lg={6} xl={6}>

                    </Grid>
                    <Grid item lg={6} xl={6} style={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                        <Stack direction="row" spacing={1}>
                            <IconButton href="https://www.facebook.com/profile.php?id=100089485518027" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon style={{color: 'black'}} />
                            </IconButton>
                            <IconButton href="https://www.instagram.com/prep2crack_" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon style={{color: 'black'}} />
                            </IconButton>
                            <IconButton href="https://www.linkedin.com/company/90628409/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon style={{color: 'black'}} />
                            </IconButton>
                        </Stack>
                    </Grid>
                </Grid>
                <Divider variant="middle" />
                <Grid container sx={{ mt: '20px', pb: '20px' }}>
                    <Grid item lg={3} xl={3} md={12} sm={12} xs={12} sx={{ p: '20px' }}>
                        <Typography className='footerabtus'>
                            About Us
                        </Typography>
                        <Typography>
                            Prep2Crack is founded by Mr. Shubham Khandelwal who have counselled around 7000+ students and have shaped their future towards better career. Always Challenging the Ordinary and the limited structure of the Indian education, he embarked the journey of building the most economical and result driven application service and career guidance team.
                        </Typography>
                    </Grid>
                    <Grid item lg={3} xl={3} md={6} sm={6} xs={6} sx={{ p: '20px' }}>
                        <Typography className='footerabtus'>
                            Services
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <FiberManualRecordIcon style={{ fontSize: '10px' }} sx={{ pt: '7px' }} />
                            <Typography>
                                Test Preperation
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <FiberManualRecordIcon style={{ fontSize: '10px' }} sx={{ pt: '7px' }} />
                            <Typography>
                                Application Counselling
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <FiberManualRecordIcon style={{ fontSize: '10px' }} sx={{ pt: '7px' }} />
                            <Typography>
                                Career Guidance
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item lg={3} xl={3} md={6} sm={6} xs={6} sx={{ p: '20px' }}>
                        <Typography className='footerabtus'>
                            Quick Links
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <FiberManualRecordIcon style={{ fontSize: '10px' }} sx={{ pt: '7px' }} />
                            <Typography onClick={() => navigation("/")} style={{ cursor: 'pointer' }}>
                                Home
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <FiberManualRecordIcon style={{ fontSize: '10px' }} sx={{ pt: '7px' }} />
                            <Typography onClick={() => navigation("/aboutUS")} style={{ cursor: 'pointer' }}>
                                About Us
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <FiberManualRecordIcon style={{ fontSize: '10px' }} sx={{ pt: '7px' }} />
                            <Typography onClick={() => navigation("/productandservice")} style={{ cursor: 'pointer' }}>
                                Services
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <FiberManualRecordIcon style={{ fontSize: '10px' }} sx={{ pt: '7px' }} />
                            <Typography onClick={() => navigation("/studydestination")} style={{ cursor: 'pointer' }}>
                                Study Destination
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <FiberManualRecordIcon style={{ fontSize: '10px' }} sx={{ pt: '7px' }} />
                            <Typography onClick={() => navigation("/contact")} style={{ cursor: 'pointer' }}>
                                Contact Us
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item lg={3} xl={3} md={12} sm={12} xs={12} sx={{ p: '20px' }}>
                        <Typography className='footerabtus'>
                            Contact info
                        </Typography>
                        <Typography>
                            319-B, Scheme No. 1, Arya Nagar, Alwar
                        </Typography>
                        <Typography>
                            Phone:-    +91-7742842292
                        </Typography>
                        <Typography>
                            E-mail :-   preptocrack@gmail.com
                        </Typography>
                        <Typography>
                            website :-  www.preptocrack.com
                        </Typography>
                    </Grid>
                </Grid>
            </Container>





        </>
    )
}

export default React.memo(Layout);