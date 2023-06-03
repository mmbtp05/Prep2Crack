import React from 'react'
import { Container, Typography, Grid, Button, useMediaQuery } from '@mui/material'
import './p&dStyles.css'
import { useEffect } from 'react'
import testprep from '../../assets/testprep.jpg'
import careerguidance from '../../assets/careerguidance.jpg'
import admissioncounselling from '../../assets/admissioncounselling.jpg'
import { useTheme } from '@mui/material'
import Services from '../../assets/Services (1).png'
import { useNavigate } from 'react-router-dom'

const ProductAndService = () => {

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('md'));
    const navigation = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }, [])

    return (

        <>
            <Container maxWidth="xl" className='panddcontainer'>
                <Grid container>
                    {!mobile ?
                        <>
                            <Grid item lg={6} xl={6} sm={12} xs={12} md={12} sx={{ p: { lg: '55px', xl: '5px', md: '55px' } }}>
                                <Typography className='pandd' sx={{pt: '100px'}}>
                                    Product and Services
                                </Typography>
                                <Typography className='panddcontent'>
                                    We will be here for you every step of the way.
                                    <br></br>
                                    Our education consultants will work with you and your family to plan the next step on your educational journey.
                                </Typography>
                            </Grid>
                            <Grid item lg={6} xl={6} sm={12} xs={12} md={12} sx={{ p: { lg: '80px', xl: '80px', md: '80px' } }}>
                                <img
                                    src={Services}
                                    alt="services"
                                    style={{ width: '300px', height: '250px' }}
                                />
                            </Grid>
                        </>
                        :
                        <>
                            <Grid item lg={6} xl={6} sm={12} xs={12} md={12}>
                                <img
                                    src={Services}
                                    alt="services"
                                    style={{ width: '300px', height: '250px' }}
                                />
                            </Grid>
                            <Grid item lg={6} xl={6} sm={12} xs={12} md={12}>
                                <Typography className='pandd'>
                                    Product and Services
                                </Typography>
                                <Typography className='panddcontent'>
                                    We will be here for you every step of the way.
                                    <br></br>
                                    Our education consultants will work with you and your family to plan the next step on your educational journey.
                                </Typography>
                            </Grid>
                        </>
                    }
                </Grid>
            </Container>
            {services.map((service, i) => (
                <Container maxWidth="xl" sx={{ mt: { lg: '50px', xl: '50px' }, mb: { lg: '80px', xl: '80px' } }}>
                    <Grid container sx={{ p: '30px' }}>
                        {mobile ?
                            <>
                                <Grid item lg={6} xl={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img
                                        src={service.img}
                                        alt={service.alt}
                                        className='serviceimgmobile'
                                    />
                                </Grid>
                                <Grid item lg={6} xl={6} sx={{ p: '30px' }}>
                                    <Typography className='heading'>
                                        {service.head}
                                    </Typography>
                                    <Typography>
                                        {service.content}
                                    </Typography>
                                    <Button variant='contained' className='buttonstyle' onClick={() => navigation(service.path)}>
                                        {service.button}
                                    </Button>
                                </Grid>
                            </>
                            :
                            i % 2 === 0 ?
                                <>
                                    <Grid item lg={6} xl={6} sx={{ p: '30px' }}>
                                        <Typography className='heading'>
                                            {service.head}
                                        </Typography>
                                        <Typography>
                                            {service.content}
                                        </Typography>
                                        <Button variant="contained" className='buttonstyle' onClick={() => navigation(service.path)}>
                                            {service.button}
                                        </Button>
                                    </Grid>
                                    <Grid item lg={6} xl={6} style={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                                        <img
                                            src={service.img}
                                            alt={service.alt}
                                            className='serviceimg'
                                        />
                                    </Grid>
                                </>
                                :
                                <>
                                    <Grid item lg={6} xl={6} style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                                        <img
                                            src={service.img}
                                            alt={service.alt}
                                            className='serviceimg'
                                        />
                                    </Grid>
                                    <Grid item lg={6} xl={6} sx={{ p: '30px' }}>
                                        <Typography className='heading'>
                                            {service.head}
                                        </Typography>
                                        <Typography>
                                            {service.content}
                                        </Typography>
                                        <Button variant='contained' className='buttonstyle' onClick={() => navigation(service.path)}>
                                            {service.button}
                                        </Button>
                                    </Grid>
                                </>
                        }
                    </Grid>
                </Container>
            ))}
        </>
    )
}

export default ProductAndService

const services = [
    {
        img: testprep,
        head: 'Test Preperation',
        content: 'We will help you ACE any standardized test that is required during your Study Abroad journey, whether it be SAT, GRE, GMAT, IELTS, TOEFL or PTE. Our certified trainers, time tested strategies, real time practice tests and regular performance analysis will get you test ready in no time.',
        alt: 'test-prepration',
        button: 'Prepare Now',
        path: '/testprep'
    },
    {
        img: admissioncounselling,
        head: 'Admission Counselling',
        content: 'Deciding on which course to take, where to apply and prepare a college application requires thorough research, knowledge and time. Looking for answers to questions on the right educational program, school or college, admission procedures, skills and profile can be very stressful. Our counsellors can help you with their expertise, knowledge base and research in selecting the right fit program and college for you to make your Study Abroad dream come true.',
        alt: 'admission-counselling',
        button: 'Start Now',
        path: '/admissioncounselling'
    },
    {
        img: careerguidance,
        head: 'Career Guidance',
        content: 'Career counseling helps you understand yourself better by identifying your strengths and interests and exploring various career options. Career counselors work on your profile from as early as 9th grade by preparing a customized roadmap for you. Experts and mentors provide relevant resources and updated information needed to develop your career and lead you on the path of professional success.',
        alt: 'career-guidance',
        button: 'Get Started',
        path: '/careerguidance'
    },
]