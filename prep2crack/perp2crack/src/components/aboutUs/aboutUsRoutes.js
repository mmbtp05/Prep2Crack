import React, { lazy } from 'react'
import Loadable from '../lodable/lodable'

const AboutUs = Loadable(lazy(() => import("./aboutUs")));

const aboutUsRoute = [
    {
        path: '/aboutUs',
        element: <AboutUs />
    }
]

export default aboutUsRoute