import React from 'react';
import { useNavigate } from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useAppDispatch } from '../redux/store';
import { setUser } from '../redux/slices/userSlice';

import FormBlock from '../components/FormBlock';


const Login: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [email, setEmail] = React.useState<string>('');
	const [pass, setPass] = React.useState<string>('');

	const titleText: string = 'Вход';
	const buttonText: string = 'Войти';
	const formText: string = 'У вас еще нет аккаунта? ';
	const linkText: string = 'Зарегестрироваться';

	const loginUser = () => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, pass)
			.then(({ user }) => {
				dispatch(setUser({
					displayName: user.displayName,
					email: user.email,
					id: user.uid,
					image: user.photoURL,
				}))
				navigate('/');
			})
			.catch((error) => {
				if (error.message.includes("auth/user-not-found")) {
					alert('Такого пользователя нет')
				} else if (error.message.includes('auth/wrong-password')) {
					alert('Неверный пароль')
				}
			});
	}

	return (
		<FormBlock email={email} setEmail={setEmail}
			pass={pass} setPass={setPass}
			loginUser={loginUser}
			titleText={titleText}
			buttonText={buttonText}
			formText={formText}
			linkText={linkText}
		/>
	)
}

export default Login;