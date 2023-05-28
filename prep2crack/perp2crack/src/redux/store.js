import { configureStore } from '@reduxjs/toolkit'
import { achievementReducer } from './reducers./homeReducers';


export default configureStore({
    reducer: {
        achievement: achievementReducer,
    },
});