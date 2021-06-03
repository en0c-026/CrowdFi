import { createSlice } from '@reduxjs/toolkit'

export const mainSlice = createSlice({
    name: 'main',
    initialState: {
        address: null,
    },
    reducers: {
        setAddress: (state, action) => {
            state.address = action.payload
        },    
    },
})

export const { setAddress } = mainSlice.actions

export default mainSlice.reducer

