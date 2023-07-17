import { configureStore } from '@reduxjs/toolkit'
import layoutSlice from './slices/layoutSlice'
import categoriesSlice from './slices/categoriesSlice'
import settingsSlice from './slices/settingsSlice'

const store = configureStore({
    reducer: {
        layout: layoutSlice,
        categories: categoriesSlice,
        settings: settingsSlice
    }
})

export default store;