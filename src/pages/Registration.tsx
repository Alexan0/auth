import React from 'react'
import { useNavigate } from 'react-router-dom';

import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../firebase';

import { useAppDispatch } from '../redux/store';
import { setUser } from '../redux/slices/userSlice';

import FormBlock from '../components/FormBlock';


const Registration: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [displayName, setDisplayName] = React.useState<string>('')
	const [email, setEmail] = React.useState<string>('');
	const [pass, setPass] = React.useState<string>('');
	const [file, setFile] = React.useState<any>();

	const titleText: string = 'Регистрация';
	const buttonText: string = 'Зарегистрироваться';
	const formText: string = 'У вас уже есть аккаунт? ';
	const linkText: string = 'Войти';

	const capitalize = (str: string) => {
		return str[0].toUpperCase() + str.slice(1);
	}

	const getImageInput = (e: React.ChangeEvent<any>) => {
		if (e.target.files[0]) {
			setFile(e.target.files[0]);
		}
	}

	const registrationUser = async () => {
		const auth = getAuth();
		const res = await createUserWithEmailAndPassword(auth, email, pass);
		const storageRef = ref(storage, displayName);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on('state_changed',
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
					await updateProfile(res.user, {
						displayName,
						photoURL: downloadURL,
					});
					dispatch(setUser({
						displayName: capitalize(displayName),
						email,
						pass,
						image: res.user.photoURL,
					}));
					alert('Аккаунт успешно создан');
					navigate('/');
				});
			},
			(error) => {
				if (error.message.includes('auth/email-already-in-use')) {
					alert('Такая почта уже занята')
				} else if (error.message.includes('auth/weak-password')) {
					alert('Пароль должен содержать не менее 6 символов')
				}
			}
		)
	}

	return (
		<FormBlock email={email} setEmail={setEmail}
			displayName={displayName}
			setDisplayName={setDisplayName}
			pass={pass} setPass={setPass}
			registrationUser={registrationUser}
			getImageInput={getImageInput}
			file={file}
			titleText={titleText}
			buttonText={buttonText}
			formText={formText}
			linkText={linkText} />
	)
}

export default Registration;