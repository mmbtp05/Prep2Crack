import { Card, Container, Grid, Typography } from '@mui/material'
import * as React from 'react'
import './aboutStyles.css'

const AboutUs = () => {
    return (

        <>
            <Container maxWidth="xl" sx={{ mt: '200px' }}>
                <Grid container>
                    <Grid item xl={6} lg={6}>

                    </Grid>
                    <Grid item xl={6} lg={6}>
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
            <Container>
                <Card>
                    
                </Card>
            </Container>
        </>

    )
}

export default AboutUs;