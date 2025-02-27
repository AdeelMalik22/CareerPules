import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getItem } from "../../utils/Function";
import { registerUser } from "../../api/auth";

// export const handleSignUp = createAsyncThunk('user/registerUser', async ({payload}:any) => {
//     try {
//         console.log("payload------>", payload)
//         const token = await getItem('token');
//         const response = await registerUser({payload, token});
//         console.log("response--------",response)
//         // return response.data;
//     } catch (error) {
//         // Handle error correctly here, return error message for rejected case
//         throw new Error(error?.response?.data?.message || 'Something went wrong');
//     }
// });

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userLoginData: [] as any,
        userLoginPending: false as boolean,
        userLoginError: null as any,
    },
    extraReducers: (builder) => {
        builder
            // .addCase(handleSignUp.pending, (state) => {
            //     state.userLoginPending = true;
            // })
            // .addCase(handleSignUp.fulfilled, (state, action) => {
            //     state.userLoginPending = false;
            //     state.userLoginData = action.payload;
            // })
            // .addCase(handleSignUp.rejected, (state, action) => {
            //     state.userLoginPending = false;
            //     state.userLoginError = action.error.message;
            // });
    },
    reducers: {}
});

export default userSlice.reducer;
