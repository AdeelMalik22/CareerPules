import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getItem } from "../../utils/Function";

export const handleSignUp = createAsyncThunk(
    'user/fetchUserProfile',
    async params => {
      try {
        const token = await getItem('token');
        const loginUser = await getItem('loginUser');
        const userData = JSON.parse(loginUser);
        const response = await registerUser(userData?.id, token, params);
        return response.data;
      } catch (error) {
        const errorText = Object.values(error?.response?.data);
      }
    },
  );\


  const userSlice = createSlice({
    name: 'user',
    initialState: {
     userLogin: [],
     userLoginPending: false,
     userLoginError: null,
    },
    extraReducers: (builder :any ) => {
      builder
        .addCase(fetchUserProfile.pending, (state :any) => {
          state.loading = true;
        })
        .addCase(fetchUserProfile.fulfilled, ({state, action} :any) => {
          state.loading = false;
          state.userData = action.payload;
        })
        .addCase(fetchUserProfile.rejected, ({state, action}:any) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export const {} = userSlice.actions;
  
  export default userSlice.reducer;