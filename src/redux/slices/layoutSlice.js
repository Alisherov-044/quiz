import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isSettingsOpen: false
}

const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        openSettings: (state) => {
            state.isSettingsOpen = true
        },
        closeSettings: (state) => {
            state.isSettingsOpen = false
        }
    }
})

export const {
    openSettings,
    closeSettings
} = layoutSlice.actions

export default layoutSlice.reducer