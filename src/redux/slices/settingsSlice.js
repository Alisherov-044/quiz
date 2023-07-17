import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        name: 'amount',
        items: [
            {
                name: 5,
                id: 5
            },
            {
                name: 10,
                id: 10
            },
            {
                name: 15,
                id: 15
            },
            {
                name: 20,
                id: 20
            }
        ],
        default: 10
    },
    {
        name: 'dificulty',
        items: [
            {
                name: 'Easy',
                id: 'easy'
            },
            {
                name: 'Medium',
                id: 'medium'
            },
            {
                name: 'Hard',
                id: 'hard'
            }
        ],
        default: 'easy'
    },
    {
        name: 'type',
        items: [
            {
                name: 'Multiple Choice',
                id: 'multiple'
            },
            {
                name: 'True / False',
                id: 'boolean'
            }
        ],
        default: 'multiple'
    },
    {
        name: 'categories',
        default: null
    },
]

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setDefault: (state, { payload: { name, id } }) => {
            state = state.map(setting => setting.name === name ? setting.default = id : setting)
        }
    }
})

export const {
    setDefault,
} = settingsSlice.actions

export default settingsSlice.reducer