import React from 'react';

import { useAppDispatch } from '../redux/store';
import { removeUser } from '../redux/slices/userSlice';
import { useAuth } from '../utils/useAuth';

import { Button, Form, FormContent, Title, UserForm, UserImage, UserInfo, Text } from '../assets/styles/components';


const UserPage: React.FC = () => {
	const dispatch = useAppDispatch();
	const { displayName, email, image } = useAuth();

	return (
		<Form>
			<FormContent>
				<UserForm>
					<UserImage><img src={image} alt={"image"} /></UserImage>
					<UserInfo>
						<Title>{displayName}</Title>
						<Text>{email}</Text>
						<Button onClick={() => dispatch(removeUser())} type='button'>Выйти</Button>
					</UserInfo>
				</UserForm>
			</FormContent>
		</Form>
	)
}

export default UserPage;