import React from "react";
import { Container, Typography } from '@mui/material'
import Study from '../../assets/study_des_head.jpg'
import './studyDestinationStyles.css'

const StudyDestination = () => {

    return (
        
        <>
        <Container maxWidth="xl" className="headcontainer">
            <img 
                src={Study}
                className="studyhead"
            />

        </Container>
        </>


    )
}

export default StudyDestination