import React, { useEffect } from "react";
import CareerImg from '../../assets/Career-Guidance.jpg'
import { Typography, Grid, Container } from "@mui/material";
import './careerGuidanceStyles.css'


const CareerGuidance = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, [])

    return (
        <>
            <Container maxWidth="xl" sx={{ mt: { md: '0px', lg: '150px' } , mb: '30px'}}>
                <Grid container>
                    <Grid item lg={6} xl={6} sm={12} xs={12} md={12} sx={{ p: { lg: '50px', xl: '50px' } }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img
                            src={CareerImg}
                            alt="career-guidance"
                            style={{ width: '400px', height: '450px' }}
                        />
                    </Grid>
                    <Grid item lg={6} xl={6} sm={12} xs={12} md={12} sx={{ p: { lg: '50px', xl: '50px' } }}>
                        <Typography className="heading">
                            CAREER GUIDANCE
                        </Typography>
                        <Typography>
                            Career counseling helps you understand yourself better by identifying your strengths and interests and exploring various career options. Career counselors work on your profile from as early as 9th grade by preparing a customized roadmap for you. Experts and mentors provide relevant resources and updated information needed to develop your career and lead you on the path of professional success.
                        </Typography>
                        <Typography className="subheading">
                            Reasons to choose Career Counselling
                        </Typography>
                        <div>
                            <li>
                                Empowering students and parents with knowledge
                            </li>
                            <li>
                                Find the right career path
                            </li>
                            <li>
                                Helps you make informed decisions about your future
                            </li>
                            <li>
                                Gaining expert advice on careers
                            </li>
                            <li>
                                Provides information on different careers
                            </li>
                        </div>
                        <Typography className="subheading">
                            Why Prep2Crack
                        </Typography>
                        <div>
                            <li>
                                Personalized guidance
                            </li>
                            <li>
                                Psychometric test and analysis
                            </li>
                            <li>
                                Right course choice for the career chosen
                            </li>
                            <li>
                                Knowledge on admission requirement for top colleges
                            </li>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default CareerGuidance