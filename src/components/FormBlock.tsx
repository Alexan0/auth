import React from 'react';
import { Link } from 'react-router-dom';

import { Form, FormContent, Title, Input, Button, FormText, InputFile } from '../assets/styles/components';

type PropsFormBlock = {
	displayName?: string;
	file?: any;
	email: string;
	pass: string;
	titleText: string;
	buttonText: string;
	formText: string;
	linkText: string;
	setEmail: (e: string) => void;
	setPass: (e: string) => void;
	setDisplayName?: (e: string) => void;
	loginUser?: () => void;
	registrationUser?: () => void;
	getImageInput?: (e: any) => void;
}

const FormBlock: React.FC<PropsFormBlock> = ({ email, pass, setEmail, setPass, loginUser, titleText, buttonText, formText, linkText, getImageInput, file, registrationUser, displayName, setDisplayName }) => {
	return (
		<div>
			<Form>
				<FormContent>
					<Title>{titleText}</Title>
					{
						titleText === 'Регистрация' && setDisplayName && getImageInput &&
						<>
							<Input onChange={(e) => setDisplayName(e.target.value)} value={displayName} type='text' placeholder='Имя' />
							<InputFile>
								<input onChange={(e) => getImageInput(e)} type="file" name="file" id="input__file"></input>
								<label htmlFor="input__file">{file ? 'Фото загружено' : 'Выбрать фото'}</label>
							</InputFile>
						</>
					}
					<Input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='Email' />
					<Input onChange={(e) => setPass(e.target.value)} value={pass} type='password' placeholder='Password' />
					<Button onClick={titleText === 'Регистрация' ? registrationUser : loginUser} type='button'>{buttonText}</Button>
					<FormText>{formText}<Link to={linkText === 'Зарегестрироваться' ? '/registration' : '/login'}>{linkText}</Link></FormText>
				</FormContent>
			</Form>
		</div>
	)
}

export default FormBlock;