import axios from '../../axios'

export const ACHIEVEMENT = 'ACHIEVEMENT'
export const TESTIMONIALS = 'TESTIMONIALS'

export const getAchievementOfCoaching = () => {
    return ((dispatch) => {
        axios.get(`miscellaneous/`).then((res) => {
            dispatch({
                type: ACHIEVEMENT,
                payload: res.data
            })
        }).catch((error) => {
            console.log(error)
            console.log(error.response.data)
        })
    })
}

export const getTestimonials = () => {
    return ((dispatch) => {
        axios.get(`student/`).then((res) => {
            dispatch({
                type: TESTIMONIALS,
                payload: res.data
            })
        }).catch((error) => {
            console.log(error)
            console.log(error.response.data)
        })
    })
}