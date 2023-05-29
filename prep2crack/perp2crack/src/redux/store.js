import { configureStore } from '@reduxjs/toolkit'
import { homeStuff } from './reducers/homeReducers';

export default configureStore({
    reducer: {
        homeStuff: homeStuff,
    },
});