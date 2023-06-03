import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import AdmImg from '../../assets/Admission -Counselling.jpg'
import './admissionCounsellingStyles.css'


const AdmissionCounselling = () => {


    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'auto'})
    })


    return (

        <>
            <Container maxWidth="xl" sx={{ mt: { md: '0px', lg: '150px' } , mb:'50px' }}>
                <Grid container>
                    <Grid item lg={6} xl={6} sm={12} xs={12} md={12} sx={{ p: { lg: '50px', xl: '50px' } }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img
                            src={AdmImg}
                            alt="admission-counselling"
                            style={{ width: '500px', height: '600px' }}
                        />
                    </Grid>
                    <Grid item lg={6} xl={6} sm={12} xs={12} md={12} sx={{ p: { lg: '50px', xl: '50px' } }}>
                        <Typography className="heading" sx={{pt: '30px'}}>
                            ADMISSION COUNSELLING
                        </Typography>
                        <Typography>
                            Deciding on which course to take, where to apply and prepare a college application requires thorough research, knowledge and time. Looking for answers to questions on the right educational program, school or college, admission procedures, skills and profile can be very stressful. Our counsellors can help you with their expertise, knowledge base and research in selecting the right fit program and college for you to make your Study Abroad dream come true.
                        </Typography>
                        <Typography className="subheading">
                            Reasons to get Admission Counselling Services
                        </Typography>
                        <Typography sx={{ pb: '8px' }}>
                            While applying to colleges Abroad one should have take care of the following:
                            <br></br>
                        </Typography>
                        <div>
                            <li>
                                What colleges to apply to ?
                            </li>
                            <li>
                                What are the deadlines ?
                            </li>
                            <li>
                                What are the documents required ?
                            </li>
                            <li>
                                What can be asked in the interview ?
                            </li>
                            <li>
                                What can be asked in VISA interview ?
                            </li>
                            <li>
                                What are the documents required for VISA application ?
                            </li>
                            <li>
                                What steps to take before flying to another country ?
                            </li>
                        </div>
                        <Typography sx={{ pt: '10px' }}>
                            The Admission Counselling services helps you through all these question or any other that comes while applying Abroad.
                        </Typography>
                        <Typography className="subheading">
                            Why Prep2Crack
                        </Typography>
                        <Typography sx={{ pt: '5px', pb: '10px' }}>
                            Our team of experts will handhold you throughout the process of application from the initial step of profile building to the final step of getting you ready to fly. We will help you through:
                        </Typography>
                        <div>
                            <li>
                                Profile building
                            </li>
                            <li>
                                Shortlisting of colleges
                            </li>
                            <li>
                                Applying to the colleges before deadlines
                            </li>
                            <li>
                                Documentation
                            </li>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default AdmissionCounselling;