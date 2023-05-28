import React, { useEffect } from "react";
import { Box, Container, Grid, Typography, useTheme } from '@mui/material'
import { useMediaQuery } from "@mui/material";
import gre from '../../assets/gre.jpg'
import toefl from '../../assets/toefl.jpg'
import gmat from '../../assets/gmat.jpg'
import ielts from '../../assets/ielts.jpg'
import sat from '../../assets/sat.jpg'
import './testPreparationStyles.css'


const TestPreparation = () => {

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, [])


    return (
        <>
            <Container maxWidth="xl" sx={{ mt: {lg: '150px' , xl: '150px'} , mb: '80px'}}>
                {testpreps.map((test, i) => (
                    <Grid container sx={{ mt: '4px', mb: '4px' }}>
                        {mobile ?
                            <>
                                <Grid item xl={6} lg={6} sm={12} md={12} xs={12}>
                                    <Box
                                        sx={{ mt: '10px', mb: '10px' }}
                                    >
                                        <img
                                            src={test.image}
                                            className="imggg"
                                            alt={test.alt}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xl={6} lg={6} sm={12} md={12} xs={12}>
                                    <Typography className="headings">
                                        {test.head}
                                    </Typography>
                                    <Typography>
                                        {test.content}
                                    </Typography>
                                    <Typography className="subheadings">
                                        {test.subhead1}
                                    </Typography>
                                    {/* <div className="verticle"></div> */}
                                    {test.content_subhead_one.map((des) => (
                                        <Typography>
                                            <li>{des}</li>
                                        </Typography>
                                    ))}
                                    <Typography className="subheadings">
                                        {test.subhead2}
                                    </Typography>
                                    {/* <div className="verticle"></div> */}
                                    {test.content_subhead_two.map((des) => (
                                        <Typography>
                                            <li>{des}</li>
                                        </Typography>
                                    ))}
                                </Grid>
                            </>
                            :
                            i % 2 === 1 ?
                                <>
                                    <Grid item xl={6} lg={6} sx={{ p: '20px' }}>
                                        <Typography className="headings">
                                            {test.head}
                                        </Typography>
                                        <Typography>
                                            {test.content}
                                        </Typography>
                                        <Typography className="subheadings">
                                            {test.subhead1}
                                        </Typography>
                                        {/* <div className="verticle"></div> */}
                                        {test.content_subhead_one.map((des) => (
                                            <Typography>
                                                <li> {des}</li>
                                            </Typography>
                                        ))}
                                        <Typography className="subheadings">
                                            {test.subhead2}
                                        </Typography>
                                        {/* <div className="verticle"></div> */}
                                        {test.content_subhead_two.map((des) => (
                                            <Typography>
                                                <li> {des}</li>
                                            </Typography>
                                        ))}
                                    </Grid>
                                    <Grid item xl={6} lg={6}>
                                        <Box
                                            className="imgdiv"
                                        >
                                            <img
                                                src={test.image}
                                                className="imgg"
                                                alt={test.alt}
                                            />
                                        </Box>
                                    </Grid>
                                </>
                                :
                                <>
                                    <Grid item xl={6} lg={6}>
                                        <Box
                                            className="imgdiv"
                                        >
                                            <img
                                                src={test.image}
                                                className="imgg"
                                                alt={test.alt}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xl={6} lg={6} sx={{ p: '30px' }}>
                                        <Typography className="headings">
                                            {test.head}
                                        </Typography>
                                        <Typography>
                                            {test.content}
                                        </Typography>
                                        <Typography className="subheadings">
                                            {test.subhead1}
                                        </Typography>
                                        {/* <div className="verticle"></div> */}
                                        {test.content_subhead_one.map((des) => (
                                            <Typography>
                                                <li>{des}</li>
                                            </Typography>
                                        ))}
                                        <Typography className="subheadings">
                                            {test.subhead2}
                                        </Typography>
                                        {/* <div className="verticle"></div> */}
                                        {test.content_subhead_two.map((des) => (
                                            <Typography>
                                                <li>{des}</li>
                                            </Typography>
                                        ))}
                                    </Grid>
                                </>
                        }
                    </Grid>
                ))}
            </Container>
        </>
    )
}

export default TestPreparation;


const testpreps = [
    {
        head: 'SAT',
        content: 'SAT is a standardized test widely used for Undergraduate admissions worldwide, administered by the College Board. The purpose of the SAT exam is to measure the college readiness of the students. In India, nearly 40+ universities accept the SAT score for admissions. Now, students can take one test, SAT, in place of many entrance tests and can apply to many great universities in India.',
        subhead1: 'Reasons to give SAT',
        content_subhead_one: ['Open doors to universities worldwide', 'Take 1 test instead of multiple exams', 'Improve chances of getting scholarship', 'Accepted by 40+ Indian universities'],
        subhead2: 'Why Prep2Crack',
        content_subhead_two: ['Customized tutoring', 'Personalized attention', 'Certified trainers', 'Time-tested strategies'],
        image: sat,
        alt: 'sat'
    },
    {
        head: 'GMAT',
        content: 'The Graduate Management Admissions Test (GMAT) is a standardized test that most business school applicants need to take in order to join credited MBA and a few other courses. While the admission- committees do consider many other factors (including your college grades, transcripts, essays, resume, work experience, and interview), it is important to do well on the GMAT exam if you aspire to get into a competitive business school.',
        subhead1: 'Reasons to give GMAT',
        content_subhead_one: ['Demonstrates your commitment, motivation, and ability to succeed in business school.', 'Increases your earning potential and open a world of opportunities.', 'Connects you with the best-fit program through personalized program recommendations.', 'Opens your gateway to various top-notch B-schools in the USA, Canada, Singapore, and many other countries including India.'],
        subhead2: 'Why Prep2Crack',
        content_subhead_two: ['Customized tutoring', 'Personalized attention', 'Certified trainers', 'Time-tested strategies'],
        image: gmat,
        alt: 'gmat'
    },
    {
        head: 'GRE',
        content: 'Graduate Record Examination (GRE) is a standardized test taken by prospective graduate and business school applicants from all around the world who are interested in pursuing a master’s, MBA, specialized master’s in business or doctoral degree in the US, Canada and many other countries. The GRE exam is owned and administered by Educational Testing Services (ETS).',
        subhead1: 'Reasons to give GRE',
        content_subhead_one: ['One test to apply for masters worldwide', 'Improves your chances of getting scholarships', 'Brings your application out of generic application', 'Help you beat the odds and get admitted into your dream university'],
        subhead2: 'Why Prep2Crack',
        content_subhead_two: ['Customized tutoring', 'Personalized attention', 'Certified trainers', 'Time-tested strategies'],
        image: gre,
        alt: 'gre'
    },
    {
        head: 'ILETS',
        content: 'The International English Language Testing System or IELTS as it is more popularly known is the world’s most favored English Language Proficiency test for further education and migration to a foreign country where English is the dominant language.',
        subhead1: 'Reasons to give ILETS',
        content_subhead_one: ['Trusted by many educational institutions, employers, governments and professional bodies as the preferred English proficiency examination for aspiring students, professionals and migration applicants.'],
        subhead2: 'Why Prep2Crack',
        content_subhead_two: ['Customized tutoring', 'Personalized attention', 'Certified trainers', 'Time-tested strategies'],
        image: ielts,
        alt: 'ilets'
    },
    {
        head: 'TOEFL',
        content: 'The Test of English as a Foreign Language or TOEFL as it is better known, is a standardized English proficiency test to measure the English capabilities of a non-native speaker of English.',
        subhead1: 'Reasons to give TOEFL',
        content_subhead_one: ['The TOEFL scores are accepted by a suite of universities around the world and is also a medium for screening job seekers and immigrations applicants to English speaking destinations the world over.'],
        subhead2: 'Why Prep2Crack',
        content_subhead_two: ['Customized tutoring', 'Personalized attention', 'Certified trainers', 'Time-tested strategies'],
        image: toefl,
        alt: 'toefl'
    },
]