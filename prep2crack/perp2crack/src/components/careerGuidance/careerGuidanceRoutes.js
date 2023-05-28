import React, { lazy } from 'react'
import Loadable from '../lodable/lodable'

const CareerGuidance = Loadable(lazy(() => import("./careerGuidance")));

const careerGuidanceRoute = [
    {
        path: '/careerguidance',
        element: <CareerGuidance />
    }
]

export default careerGuidanceRoute;