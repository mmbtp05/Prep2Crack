import React, { lazy } from 'react'
import Loadable from '../lodable/lodable'

const StudyDestination = Loadable(lazy(() => import("./studyDestination")));

const studyDestinationRoute = [
    {
        path: '/studydestination',
        element: <StudyDestination />
    }
]

export default studyDestinationRoute;