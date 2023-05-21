import React, { lazy } from 'react'
import Loadable from '../lodable/lodable'

const ProductAndServices = Loadable(lazy(() => import("./productAndServices")));

const productAndServiceRoute = [
    {
        path: '/productandservice',
        element: <ProductAndServices />
    }
]

export default productAndServiceRoute;