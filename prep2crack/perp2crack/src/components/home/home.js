import { Typography } from '@mui/material'
import * as React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './homeStyles.css'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Stack from '@mui/material/Stack';


const Home = () => {

    React.useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth' })
    },[])


    return (

        <>
            <Container maxWidth="xl" className='maincontainer'>
                <Grid container>
                    <Grid item xl={5} lg={5} className="herocontentleft" sx={{ pl: '70px', pt: '150px' }}>
                        <Typography className='upperhead'>
                            One Step Solution For
                        </Typography>
                        <Typography variant='h2' className='mainhead'>
                            Study Abroad Aspirants
                        </Typography>
                        <Typography className="lowerhead">
                            Helping students achieve their study abroad dream.
                        </Typography>
                        <Button variant="contained" className='button' sx={{ mt: '50px' }} disableElevation>Enroll Now</Button>
                    </Grid>
                    <Grid item xl={7} lg={7}>

                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="xl">
                <Grid container sx={{ mt: '50px', mb: '50px' }}>
                    {service.map((s, i) => (
                        <Grid item xl={4} lg={4} className="cardcontainer">
                            <Card sx={{ maxWidth: 345 }} className="card">
                                <CardContent>
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
                </Grid>
            </Container>
            <Container maxWidth="xl">
                <Grid container sx={{ m: '20px' }}>
                    <Grid item lg={6} xl={6}>

                    </Grid>
                    <Grid item lg={6} xl={6} sx={{ pl: '20px', pr: '100px' }}>
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
                                    <FiberManualRecordIcon style={{fontSize: '10px'}} sx={{pt: '7px'}}/>
                                    <Typography>
                                        Customized Tutoring
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={1}>
                                    <FiberManualRecordIcon style={{fontSize: '10px'}} sx={{pt: '7px'}}/>
                                    <Typography>
                                        100% Assistance of Application Process
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={1}>
                                    <FiberManualRecordIcon style={{fontSize: '10px'}} sx={{pt: '7px'}}/>
                                    <Typography>
                                        Guidance for Education Loan
                                    </Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                        <Button variant="contained" className='whybutton'   >
                            Talk to our experts
                        </Button>
                    </Grid>
                </Grid>
            </Container>
            <Container>

            </Container>
        </>

    )
}

export default Home

const service = [
    {
        head: 'Test',
        subhead: 'Preperation',
        content: 'We will help you ACE any standardized test that is required during your Study Abroad journey, whether it be SAT, GRE, GMAT, IELTS, TOEFL or PTE. Our certified trainers, time tested strategies, real time practice tests and regular performance analysis will get you test ready in no time.',
    },
    {
        head: 'Application',
        subhead: 'Counselling',
        content: 'Get assisted throughout your application journey by our team of skilled mentors. Our mentors will help you in each step  of Building your profile, Shortlisting of colleges, Filling your application, Editing your SOPs, LORs & Resume, Preparing for VISA Interview, Counselling before departure.'
    },
    {
        head: 'Career',
        subhead: 'Guidance',
        content: 'Career counselling helps you understand yourself better by identifying your strengths and interests and exploring various career options. Career counsellors work on your profile from as early as 9th grade by preparing a customized roadmap for you. Experts and mentors provide relevant resources and updated information needed to develop your career and lead you on the path of professional success.',
    },
]

