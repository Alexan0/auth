import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface User {
	displayName: string | null;
	email: string | null;
	id: string | null;
	image: string | null;
}

const initialState: User = {
	displayName: '',
	email: '',
	id: '',
	image: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<User>) {
			state.displayName = action.payload.displayName;
			state.email = action.payload.email;
			state.id = action.payload.id;
			state.image = action.payload.image;
		},
		removeUser(state) {
			state.displayName = '';
			state.email = '';
			state.id = '';
			state.image = '';
		}
	}
});

export const selectUser = (state: RootState) => state.user;

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;