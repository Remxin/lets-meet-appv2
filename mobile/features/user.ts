import { createSlice } from "@reduxjs/toolkit"

const initialState: userType = { id: "", name: "", email: "testemail@gmail.com" }
export type userType = {
    id: string,
    name: string,
    email: string,
}

export type userLoginType = {
    email: string,
    password: string,
    name: string
}

export const userSlice = createSlice({
    name: "user",
    initialState: { value: initialState },
    reducers: {
        login: (state, action) => {

        },

        logout: (state, action) => {
            state.value = initialState
        }
    }
})

export const { login, logout } = userSlice.actions


export default userSlice.reducer