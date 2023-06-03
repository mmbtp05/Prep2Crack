import React from 'react'
import { Box, styled } from '@mui/system'
import { CircularProgress } from '@mui/material'

const StyledLoading = styled('div')(() => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '120px',
    marginBottom: '80px',
    '& img': {
        width: 'auto',
        height: '25px',
    },
    "& .circleProgress": {
        position: 'absolute',
        left: -7,
        right: 0,
        top: 'calc(50% - 25px)',
    }
}))

const Loading = () => {

    return (
        <StyledLoading>
            <Box position="relative">
                <CircularProgress className="circleProgress" />
            </Box>
        </StyledLoading>
    )
}

export default Loading
