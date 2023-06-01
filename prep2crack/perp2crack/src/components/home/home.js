import { Box, Typography, useMediaQuery } from '@mui/material'
import * as React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './homeStyles.css'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef , useMemo} from 'react';
import whyp2c from '../../assets/whyprep2crack.jpg'
import { useTheme } from '@mui/material';
// import Carousel from '../../carousal/carousal';
import { useDispatch, useSelector } from 'react-redux';
import { getAchievementOfCoaching, getTestimonials } from '../../redux/actions/homeActions';
import testprep from '../../assets/Test Prep- Home Page.png'
import admcounsel from '../../assets/Admission Counselling - Home Page.png'
import careerguide from '../../assets/Career Guidance - Home Page.png'
import Carousel from '../../carousal/carousal';
import Loading from '../Loading/Loading';
import anshul from '../../assets/anshulsaini.jpeg'
import Number from '../numberAnimation/number';



const Home = () => {

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down("md"));
    const dispatch = useDispatch();
    const [achievements, setAchievements] = useState();
    const [testimonials, setTestimonials] = useState();
    const data_achievement = useSelector(state => state.homeStuff.achievement);
    const data_testimonials = useSelector(state => state.homeStuff.testimonials);
    const [loadingAchievement, setLoadingAchievement] = useState(true);
    const [loadingTestimonials, setLoadingTestimonials] = useState(true);
    const reference = useRef(null);
    const isVisible = useIntersection(reference,'0px');
    const navigation = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto', left: 0 })
        dispatch(getAchievementOfCoaching());
        dispatch(getTestimonials());
    }, [])


    useEffect(() => {
        if (data_testimonials) {
            setTestimonials(data_testimonials);
            setLoadingTestimonials(false);
        }
    }, [data_testimonials])

    useEffect(() => {
        if (data_achievement) {
            setAchievements(data_achievement);
            setLoadingAchievement(false);
        }
    }, [data_achievement])




    return (

        // achievements && testimonials &&
        <>
            <Container maxWidth="xl" className='maincontainer'>
                <Grid container>
                    <Grid item xl={5} lg={5} md={12} sm={12} xs={12} className="herocontentleft" sx={{ pl: '70px', pt: '150px' }}>
                        <Typography className='upperhead'>
                            One Step Solution For
                        </Typography>
                        <Typography variant='h2' className='mainhead'>
                            Study Abroad Aspirants
                        </Typography>
                        <Typography className="lowerhead">
                            Helping students achieve their study abroad dream.
                        </Typography>
                        <Button variant="contained" className='button' onClick={() => navigation('./contact')} sx={{ mt: '50px' }} disableElevation>Enroll Now</Button>
                    </Grid>
                    <Grid item xl={7} lg={7} md={12} sm={12} xs={12}>

                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="xl">
                <Grid container sx={{ mt: '50px', mb: '50px' }}>

                    {mobile ?
                        <Carousel
                            show={1}
                        >
                            {service.map((s, i) => (
                                <Grid item xl={4} lg={4} md={12} sm={12} xs={12} className="cardcontainer" sx={{ p: '50px' }}>
                                    <Card sx={{ maxWidth: 345 }} className="card">
                                        <CardContent>
                                            <Box
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                }}
                                                sx={{
                                                    p: '20px'
                                                }}
                                            >
                                                <img
                                                    src={s.img}
                                                    alt={s.alt}
                                                    className='imgservices'
                                                />
                                            </Box>
                                            <Typography className="cardhead">
                                                {s.head}
                                            </Typography>
                                            <Typography className="cardsubhead">
                                                {s.subhead}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {s.content}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}

                        </Carousel>
                        :
                        <>
                            {service.map((s, i) => (
                                <Grid item xl={4} lg={4} md={12} sm={12} xs={12} className="cardcontainer" sx={{ p: '50px' }}>
                                    <Card sx={{ maxWidth: 345 }} className="card">
                                        <CardContent>
                                            <Box
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                }}
                                                sx={{
                                                    p: '20px'
                                                }}
                                            >
                                                <img
                                                    src={s.img}
                                                    alt={s.alt}
                                                    className='imgservices'
                                                />
                                            </Box>
                                            <Typography className="cardhead">
                                                {s.head}
                                            </Typography>
                                            <Typography className="cardsubhead">
                                                {s.subhead}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {s.content}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </>
                    }
                </Grid>
            </Container>
            <Container maxWidth="xl">
                <Grid container sx={{ m: '20px' }}>
                    <Grid item lg={6} xl={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {mobile ?
                            <img
                                src={whyp2c}
                                alt="whyprep2crack"
                                style={{ width: '250px', height: '300px' }}
                            />
                            :
                            <img
                                src={whyp2c}
                                alt="whyprep2crack"
                                style={{ width: '450px', height: '500px' }}
                            />
                        }
                    </Grid>
                    <Grid item lg={6} xl={6} sx={{ pl: '20px', pr: '100px' }} md={12} sm={12} xs={12}>
                        <Typography className="whyhead">
                            Why Prep2Crack?
                        </Typography>
                        <Typography className="whysubhead">
                            Personalized attention, Result driven approach, Economic
                        </Typography>
                        <Typography>
                            At Prep2Crack, we understand that applying to colleges around the globe requires proper knowledge, research and time. That’s why we provide personalized guidance to make sure you reach your goals. With our personalized attention, you won’t get lost in the crowd or frustrated with a generic approach—you’ll have the resources and support to get into your dream university. What are you waiting for? Start now and achieve your dream of studying Abroad with Prep2Crack!
                        </Typography>
                        <Card className="whycard">
                            <CardContent>
                                <Stack direction="row" spacing={1}>
                                    <FiberManualRecordIcon style={{ fontSize: '10px' }} sx={{ pt: '7px' }} />
                                    <Typography>
                                        Customized Tutoring
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={1}>
                                    <FiberManualRecordIcon style={{ fontSize: '10px' }} sx={{ pt: '7px' }} />
                                    <Typography>
                                        100% Assistance of Application Process
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={1}>
                                    <FiberManualRecordIcon style={{ fontSize: '10px' }} sx={{ pt: '7px' }} />
                                    <Typography>
                                        Guidance for Education Loan
                                    </Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                        <Button variant="contained" className='whybutton' onClick={() => navigation("/contact")} >
                            Talk to our experts
                        </Button>
                    </Grid>
                </Grid>
            </Container>
            {testimonials &&
                <div>
                    <Container maxWidth="xl" sx={{ pt: '80px', pb: '30px' }}>
                        <Typography className='whyhead' textAlign="center">
                            Wall of Success Story
                        </Typography>
                        <Typography className='testimonial' textAlign="center">
                            Testimonials
                        </Typography>
                        <Carousel
                            show={4}
                        >
                            {loadingTestimonials ? <Loading />
                                :
                                testimonials.map((testimonial, i) => (
                                    <Grid container>
                                        <Grid item lg={12} xl={12} sm={12} md={12} xs={12} key={i} sx={{ p: '30px' }}>
                                            <Box style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                <img
                                                    src={anshul}
                                                    alt="testimonial"
                                                    style={{ width: '200px', height: '300px' }}
                                                />
                                                <Typography className='testimonialname'>
                                                    {testimonial.name}
                                                </Typography>
                                                <Typography>
                                                    {testimonial.score}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                ))}
                        </Carousel>
                    </Container>
                </div>
            }
            {achievements &&
                <div ref={reference}>
                    <Container maxWidth="xl" className='figurecontainer'>
                        {loadingAchievement ? <Loading />
                            :
                            achievements.map((achievement) => (
                                <Grid container>
                                    <Grid item lg={3} xl={3} sx={{ p: '40px' }} sm={6} xs={12} md={6}>
                                        <Stack direction="row" style={{ display: 'flex', justifyContent: 'center' }}>
                                            <Typography className='figures'>
                                                {isVisible ? <Number data={achievement.admin_recieved} /> : achievement.admin_recieved}
                                            </Typography>
                                            <Typography className='figures'>
                                                +
                                            </Typography>
                                        </Stack>
                                        <Typography className='figuresofwhat'>
                                            Admits Recieved by Our Students
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={3} xl={3} sx={{ p: '40px' }} sm={6} xs={12} md={6}>
                                        <Stack direction="row" style={{ display: 'flex', justifyContent: 'center' }}>
                                            <Typography className='figures'>
                                                <Number data={achievement.experience} />
                                            </Typography>
                                            <Typography className='figures'>
                                                +
                                            </Typography>
                                        </Stack>
                                        <Typography className='figuresofwhat'>
                                            Years of Combined Experience
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={3} xl={3} sx={{ p: '40px' }} sm={6} xs={12} md={6}>
                                        <Stack direction="row" style={{ display: 'flex', justifyContent: 'center' }}>
                                            <Typography className='figures'>
                                                <Number data={achievement.test_clear} />
                                            </Typography>
                                            <Typography className='figures'>
                                                +
                                            </Typography>
                                        </Stack>
                                        <Typography className='figuresofwhat'>
                                            Standardized Test Cleared
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={3} xl={3} sx={{ p: '40px' }} sm={6} xs={12} md={6}>
                                        <Stack direction="row" style={{ display: 'flex', justifyContent: 'center' }}>
                                            <Typography className='figures'>
                                                <Number data={achievement.scholarship} />
                                            </Typography>
                                            <Typography className='figures'>
                                                M+
                                            </Typography>
                                        </Stack>
                                        <Typography className='figuresofwhat'>
                                            Worth Scholarships Achieved by Students
                                        </Typography>
                                    </Grid>
                                </Grid>
                            ))}
                    </Container>
                </div>
            }
        </>

    )
}

export default Home

const service = [
    {
        head: 'Test',
        subhead: 'Preperation',
        img: testprep,
        alt: 'test-prep',
        content: 'We will help you ACE any standardized test that is required during your Study Abroad journey, whether it be SAT, GRE, GMAT, IELTS, TOEFL or PTE. Our certified trainers, time tested strategies, real time practice tests and regular performance analysis will get you test ready in no time.',
    },
    {
        head: 'Application',
        subhead: 'Counselling',
        img: admcounsel,
        alt: 'application-counsel',
        content: 'Get assisted throughout your application journey by our team of skilled mentors. Our mentors will help you in each step  of Building your profile, Shortlisting of colleges, Filling your application, Editing your SOPs, LORs & Resume, Preparing for VISA Interview, Counselling before departure.'
    },
    {
        head: 'Career',
        subhead: 'Guidance',
        img: careerguide,
        alt: 'career-guide',
        content: 'Career counselling helps you understand yourself better by identifying your strengths and interests and exploring various career options. Career counsellors work on your profile from as early as 9th grade by preparing a customized roadmap for you. Experts and mentors provide relevant resources and updated information needed to develop your career and lead you on the path of professional success.',
    },
]

const useIntersection = (element, rootMargin) => {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting);
            }, { rootMargin }
        );

        element.current && observer.observe(element.current);

        return () => observer.unobserve(element.current);
    }, []);

    return isVisible;
};


