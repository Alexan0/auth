import styled from "styled-components";

export const Wrapper = styled.div`
	min-height: 100%;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	height: 100vh;
`

export const Page = styled.main`
	flex: 1 1 auto;
`

export const Form = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	padding: 15px;
`

export const FormContent = styled.div`
	flex: 0 1 500px;
	border-radius: 8px;
	padding: 15px;
	background-color: white;
`

export const Title = styled.h3`
	font-size: 22px;
	line-height: 26px;
	color: #333;
	margin-bottom: 10px;
`

export const Text = styled.p`
	font-size: 18px;
	line-height: 22px;
	color: #333;
	margin-bottom: 10px;
`

export const Input = styled.input`
	width: 100%;
	min-height: 40px;
	border-radius: 8px;
	font-size: 16px;
	line-height: 19px;
	color: #333;
	border: 1px solid #40478C;
	padding: 0 10px;
	margin-bottom: 10px;
	transition: all .3s ease;
	&::placeholder{
		font-size: 16px;
		line-height: 19px;
		color: #333;
	}
	&:focus{
		box-shadow: 0 0 8px #FFCA2A;
		border-color: #FFCA2A;
	}
	@media (any-hover: hover) {
		&:hover{
			box-shadow: 0 0 8px #FFCA2A;
			border-color: #FFCA2A;
		}
	}
`

export const InputFile = styled.div`
	width: 100%;
	margin-bottom: 10px;
	input{
		display: none;
		appearance: none;
		opacity: 0;
		visibility: hidden;
	}

	label{
		display: block;
		width: 100%;
		min-height: 40px;
		border-radius: 8px;
		font-size: 16px;
		line-height: 38px;
		color: #333;
		border: 1px solid #40478C;
		padding: 0 10px;
		transition: all .3s ease;
		appearance: none;
		&::placeholder{
			font-size: 16px;
			line-height: 19px;
			color: #333;
		}
		&:focus{
			box-shadow: 0 0 8px #FFCA2A;
			border-color: #FFCA2A;
		}
		@media (any-hover: hover) {
			&:hover{
				box-shadow: 0 0 8px #FFCA2A;
				border-color: #FFCA2A;
			}
		}
	}
`

export const Button = styled.button`
	padding: 6px 10px;
	font-size: 16px;
	line-height: 19px;
	color: #fff;
	background-color: #40478C;
	transition: all .3s ease;
	margin-bottom: 10px;
	border-radius: 6px;
	@media (any-hover: hover) {
		&:hover{
			background-color: #4050D0;
		}
	}
`

export const FormText = styled.p`
	font-size: 16px;
	line-height: 19px;
	color: #333;
	a{
		color: #40478C;
	}
`

export const UserForm = styled.div`
	display: flex;
	//justify-content: space-between;
	gap: 15px;
`

export const UserImage = styled.div`
	flex: 0 1 100px;
	height: 100px;
	img{
		width: 100%;
		height: 100%;
		border-radius: 4px;
	}
`

export const UserInfo = styled.div`
	flex: 1 1 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	button{
		align-self: flex-end;
		margin-bottom: 0;
	}
`