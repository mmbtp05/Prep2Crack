import React, { useEffect } from "react";
import { Box, Container, Grid, Typography, useTheme } from '@mui/material'
import { useMediaQuery } from "@mui/material";
import Study from '../../assets/study_des_head.jpg'
import './studyDestinationStyles.css'
import Usa from '../../assets/USA.jpg'
import Uk from '../../assets/UK.jpg'
import Canada from '../../assets/Canada.jpg'
import Australia from '../../assets/Australia.jpeg'

const StudyDestination = () => {

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }, [])

    return (

        <>
            <Container maxWidth="xl" className="headcontainer">
                <img
                    src={Study}
                    className="studyhead"
                    alt="destinations"
                />
            </Container>
            <Container maxWidth="xl" sx={{ mt: '60px' , mb: '80px'}}>
                {destinations.map((destination, i) => (
                    <Grid container sx={{ mt: '4px', mb: '4px' }}>
                        {mobile ?
                            <>
                                <Grid item xl={6} lg={6} sm={12} md={12} xs={12}>
                                    <Box
                                        sx={{mt: '10px' , mb: '10px'}}
                                    >
                                        <img
                                            src={destination.image}
                                            className="imggg"
                                            alt={destination.alt}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xl={6} lg={6} sm={12} md={12} xs={12}>
                                    <Typography className="headings">
                                        {destination.head}
                                    </Typography>
                                    <Typography>
                                        {destination.content}
                                    </Typography>
                                    <Typography className="subheadings">
                                        {destination.subhead1}
                                    </Typography>
                                    {/* <div className="verticle"></div> */}
                                    {destination.content_subhead_one.map((des) => (
                                        <Typography>
                                            <li>{des}</li>
                                        </Typography>
                                    ))}
                                    <Typography className="subheadings">
                                        {destination.subhead2}
                                    </Typography>
                                    {/* <div className="verticle"></div> */}
                                    {destination.content_subhead_two.map((des) => (
                                        <Typography>
                                            <li>{des}</li>
                                        </Typography>
                                    ))}
                                </Grid>
                            </>
                            :
                            i % 2 === 0 ?
                                <>
                                    <Grid item xl={6} lg={6} sx={{ p: '30px' }}>
                                        <Typography className="headings">
                                            {destination.head}
                                        </Typography>
                                        <Typography>
                                            {destination.content}
                                        </Typography>
                                        <Typography className="subheadings">
                                            {destination.subhead1}
                                        </Typography>
                                        {/* <div className="verticle"></div> */}
                                        {destination.content_subhead_one.map((des) => (
                                            <Typography>
                                                <li> {des}</li>
                                            </Typography>
                                        ))}
                                        <Typography className="subheadings">
                                            {destination.subhead2}
                                        </Typography>
                                        {/* <div className="verticle"></div> */}
                                        {destination.content_subhead_two.map((des) => (
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
                                                src={destination.image}
                                                className="imgg"
                                                alt={destination.alt}
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
                                                src={destination.image}
                                                className="imgg"
                                                alt={destination.alt}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xl={6} lg={6} sx={{ p: '30px' }}>
                                        <Typography className="headings">
                                            {destination.head}
                                        </Typography>
                                        <Typography>
                                            {destination.content}
                                        </Typography>
                                        <Typography className="subheadings">
                                            {destination.subhead1}
                                        </Typography>
                                        {/* <div className="verticle"></div> */}
                                        {destination.content_subhead_one.map((des) => (
                                            <Typography>
                                                <li>{des}</li>
                                            </Typography>
                                        ))}
                                        <Typography className="subheadings">
                                            {destination.subhead2}
                                        </Typography>
                                        {/* <div className="verticle"></div> */}
                                        {destination.content_subhead_two.map((des) => (
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

export default StudyDestination


const destinations = [
    {
        head: 'USA',
        content: 'Pursuing an undergraduate degree in the USA can be one of the most exciting and rewarding experiences for any student. Not only will you receive a world-class education, but you will also have access to a variety of unique courses, a multicultural environment, and countless opportunities. From large research universities to small liberal arts colleges, the US has more than 4,500 universities to choose from, ensuring that every student can find a school that meets their needs.',
        subhead1: 'Reasons to study in USA',
        content_subhead_one: ['Academic Excellence', 'Diverse Programs', 'Lots of scholarships', 'Lively and vibrant campus life', 'Internationally reputed course'],
        subhead2: 'Top 5 universities in USA',
        content_subhead_two: ['Princeton University', 'Massachusetts Institute of Technology', 'Harvard University', 'Stanford University', 'Yale University'],
        image: Usa,
        alt: 'Usa'
    },
    {
        head: 'UK',
        content: 'The UK has a long-standing history of providing quality education and is highly sought after by students from all over the world. It is home to world’s oldest universities having roots in 12th & 13th centuries. It is renowned for its exceptional education system and universities. It has developed a globally recognized approach to teaching that emphasizes critical thinking, collaboration, creativity, and problem-solving skills. The UK universities are consistently ranked among the best in the world, with many of them leading the way in research and innovation. The country also has a strong tradition of student satisfaction.',
        subhead1: 'Reasons to study in UK',
        content_subhead_one: ['Shorter duration of course', 'Unique culture', 'Explore Europe while studying', 'Health benefits for students', 'Academic excellence'],
        subhead2: 'Top 5 universities in UK',
        content_subhead_two: ['University of Oxford', 'University of Cambridge', 'University College of London', 'Imperial College London', 'King’s College London'],
        image: Uk,
        alt: 'Uk'
    },
    {
        head: 'CANADA',
        content: 'Studying in Canada can be an incredibly enriching experience. With universities offering top-tier education, opportunities for research and development, and a unique cultural experience that you won’t find anywhere else, Canada is quickly becoming one of the most popular destinations for international students. Not only do Canadian universities provide an excellent academic foundation, but they also foster an environment that is conducive to the growth and development of its students. With a wide range of academic disciplines and courses available, international students can easily find something that suits their needs. Additionally, many universities have special programs and opportunities for international students that help them make the most of their education.',
        subhead1: 'Reasons to study in Canada',
        content_subhead_one: ['Earn while you learn', 'Affordable cost of education and living', '3 years stay back options', 'Quality of life', 'Safe and peaceful'],
        subhead2: 'Top 5 universities in Canada',
        content_subhead_two: ['University of Toronto', 'University of British Columbia', 'McGill University', 'University of Alberta', 'McMaster University'],
        image: Canada,
        alt: 'Canada'
    },
    {
        head: 'AUSTRALIA',
        content: 'Standing proud with 8 of the top 100 universities in the world, Australia is much more than just kangaroos. An increasing number of Indian students are opting to study in Australia for its world-class education, post-study work opportunities and excellent quality of living. Whatever course you choose to undertake, you’ll be assured of unbeatable academic excellence and support system for international students.',
        subhead1: 'Reasons to study in Australia',
        content_subhead_one: ['Popular destination among Indian students', 'Lingual diversity', 'A land of Noble Laureates', 'Incomparable quality of life', 'Global recognition'],
        subhead2: 'Top 5 universities in Australia',
        content_subhead_two: ['University of Melbourne', 'University of Sydney', 'University of Queensland', 'Monash University', 'Australian National University'],
        image: Australia,
        alt: 'Australia'
    },
]