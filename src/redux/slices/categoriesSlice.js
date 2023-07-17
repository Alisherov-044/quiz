import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories: (state, { payload }) => {
            state.items = payload
        }
    }
})

export const {
    setCategories
} = categoriesSlice.actions

export default categoriesSlice.reducer