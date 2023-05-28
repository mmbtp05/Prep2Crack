import React, { lazy } from 'react'
import Loadable from '../lodable/lodable'

const AdmimssionCounselling = Loadable(lazy(() => import("./admissionCounselling")));

const admissionCounsellingRoute = [
    {
        path: '/admissioncounselling',
        element: <AdmimssionCounselling />
    }
]

export default admissionCounsellingRoute;