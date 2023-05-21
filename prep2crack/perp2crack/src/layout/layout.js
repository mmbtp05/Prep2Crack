import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import './stylesLayout.css'

const Layout = () => {

    return (
        <>



            <Container maxWidth="xl" style={{backgroundColor: 'blue'}}>
                <nav class="stroke">
                    <ul>
                        <li>
                            <Link exact to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link exact to="/aboutUs">
                                aboutUs
                            </Link>
                        </li>
                        <li>
                            <Link exact to="/productandservice">
                                productandservices
                            </Link>
                        </li>
                        <li>
                            <Link exact to="/studydestination">
                                studydestination
                            </Link>
                        </li>
                        <li>
                            <Link exact to="/contact">
                                contactus
                            </Link>
                        </li>
                    </ul>
                </nav>
            </Container>

            <Outlet />



        </>
    )
}

export default React.memo(Layout);