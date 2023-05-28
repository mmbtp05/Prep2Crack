import React, { lazy } from 'react'
import Loadable from '../lodable/lodable'

const TestPreparation = Loadable(lazy(() => import("./testPreparation")));

const testPreparationRoute = [
    {
        path: '/testprep',
        element: <TestPreparation />
    }
]

export default testPreparationRoute;