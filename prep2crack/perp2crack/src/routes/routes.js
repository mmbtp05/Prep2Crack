import React from 'react'
import aboutUsRoute from '../components/aboutUs/aboutUsRoutes'
import contactUsRoutes from '../components/contactUs/contactUsRoutes'
import homeRoute from '../components/home/homeRoutes'
import productAndServiceRoute from '../components/productAndServices/productAndServicesRoutes'
import studyDestinationRoute from '../components/studyDestinations/studyDestinationRoutes'
import Layout from '../layout/layout'
import careerGuidanceRoute from '../components/careerGuidance/careerGuidanceRoutes'
import admissionCounsellingRoute from '../components/admissionCounselling/admissionCounsellingRoutes'
import testPreparationRoute from '../components/testPreperation/testPreparationRoutes'

export const Pages = () => {
    const all_pages = [
        {
            path: "/",
            element: (
                <Layout>
                </Layout>
            ),
            children: [
                ...homeRoute,
                ...aboutUsRoute,
                ...contactUsRoutes,
                ...studyDestinationRoute,
                ...productAndServiceRoute,
                ...careerGuidanceRoute,
                ...admissionCounsellingRoute,
                ...testPreparationRoute,
            ]
        },
        {
            path: "*",
            element: (
                <div>
                    not fount
                </div>
            )
        }
    ];

    return all_pages;
}