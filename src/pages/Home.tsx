import React from 'react'
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../utils/useAuth'
import UserPage from '../components/UserPage';

const Home: React.FC = () => {
	const { isAuth } = useAuth();
	const navigate = useNavigate();
	
	React.useEffect(() => {
		if (isAuth === false) {
			navigate('/login')
		}
	}, [isAuth])

	return (
		<div>
			{isAuth ? <UserPage/> : ''}
		</div>
	)
}

export default Home;