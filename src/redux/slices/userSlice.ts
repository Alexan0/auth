import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface User {
	displayName: string
	email: string;
	id: number;
	image: string;
}

const initialState: User = {
	displayName: '',
	email: '',
	id: 0,
	image: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action) {
			state.displayName = action.payload.displayName;
			state.email = action.payload.email;
			state.id = action.payload.id;
			state.image = action.payload.image;
		},
		removeUser(state) {
			state.displayName = '';
			state.email = '';
			state.id = 0;
			state.image = '';
		}
	}
});

export const selectUser = (state: RootState) => state.user;

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;