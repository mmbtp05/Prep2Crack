import React, { lazy } from 'react'
import Loadable from '../lodable/lodable'

const Home = Loadable(lazy(() => import("./home")));

const homeRoute = [
    {
        path: '/',
        element: <Home />
    }
]

export default homeRoute;