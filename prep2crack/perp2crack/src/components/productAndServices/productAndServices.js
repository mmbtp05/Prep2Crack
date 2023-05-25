import React from 'react'
import { Container, Typography } from '@mui/material'
import './p&dStyles.css'

const ProductAndService = () => {
    return (

        <>
            <Container maxWidth="xl" sx={{ mt: '80px' }} className='panddcontainer'>
                <Typography className='pandd'>
                    Product and Services
                </Typography>
                <Typography className='panddcontent'>
                    We will be here for you every step of the way.
                    <br></br>
                    Our education consultants will work with you and your family to plan the next step on your educational journey.
                </Typography>
            </Container>

        </>
    )
}

export default ProductAndService