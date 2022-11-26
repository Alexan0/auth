import { useSelector } from 'react-redux';
import { selectUser } from '../redux/slices/userSlice';

export const useAuth = () => {
	const { email, id, displayName, image } = useSelector(selectUser);
	
	return {
		isAuth: !!email,
		email,
		id,
		displayName,
		image,
	}
}