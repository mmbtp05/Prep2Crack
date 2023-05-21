import React, { lazy } from 'react'
import Loadable from '../lodable/lodable'

const ContactUs = Loadable(lazy(() => import("./contactUs")));

const contactUsRoutes = [
    {
        path: '/contact',
        element: <ContactUs />
    }
]

export default contactUsRoutes;