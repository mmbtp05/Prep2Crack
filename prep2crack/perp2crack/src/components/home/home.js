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
    return (

        <>
            <Container maxWidth="xl" style={{ height: '600px', backgroundColor: 'blue' }}>
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
                <Grid container sx={{m: '20px'}}> 
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
                            The align-content property specifies how flex lines are distributed along the cross axis in a flexbox container.

                            In flexbox layout, the main axis is in the flex-direction (default is 'row', horizontal), and the cross axis is perpendicular to the main axis (default is 'column', vertical).

                            Tip: Use the justify-content property to align the items on the main axis (horizontally).

                            Note: The align-content property can also be used on a grid container to align grid items in the block direction. For pages in English, block direction is downward and inline direction is left to right.
                        </Typography>
                        <Card className="whycard">
                            <CardContent>
                                <Stack direction="row" spacing={1}>
                                    <FiberManualRecordIcon />
                                    <Typography>
                                        Customized Tutoring
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={1}>
                                    <FiberManualRecordIcon />
                                    <Typography>
                                        100% Assistance of Application Process
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={1}>
                                    <FiberManualRecordIcon />
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
        content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    },
    {
        head: 'Application',
        subhead: 'Counselling',
        content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    },
    {
        head: 'Career',
        subhead: 'Guidance',
        content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    },
]

