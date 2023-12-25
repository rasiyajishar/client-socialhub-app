import { createSlice } from '@reduxjs/toolkit';const initialState = {
    user :null,
    token :null
}
export const autoSlice = createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{
        login:(state,action)=>{
            state.user = action.payload.userInfo
            state.token = action.action.payload.token
        }
    },register:(state,action) =>{
        state.user = action.payload.userInfo
            state.token = action.action.payload.token 
    },logout:(state)=>{
        state.user = null
        state.token = null
        localStorage.clear()
    }
})
export const { login,register,logout} = autoSlice.actions;
export default autoSlice.reducer;