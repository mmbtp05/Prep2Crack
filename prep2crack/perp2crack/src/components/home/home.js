import { Typography } from '@mui/material'
import * as React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './homeStyles.css'


const Home = () => {
    return (

        <>
            <Container maxWidth="xl" style={{ height: '600px', backgroundColor: 'blue' }}>
                <Grid container>
                    <Grid item xl={6} lg={6} className="herocontentleft" sx={{ pl: '70px', pt: '100px' }}>
                        <Typography className='upperhead'>
                            One Step Solution For
                        </Typography>
                        <Typography variant='h1' className='mainhead'>
                            Study Abroad Aspirants
                        </Typography>
                        <Typography className="lowerhead">
                            Helping students achieve their study abroad dream.
                        </Typography>
                    </Grid>
                    <Grid item xl={6} lg={6}>

                    </Grid>
                </Grid>
            </Container>
        </>

    )
}

export default Home