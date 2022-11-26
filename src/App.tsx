import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Wrapper, Page } from './assets/styles/components';
import { Home, Login, Registration } from './pages';

const App: React.FC = () => {
	return (
		<Wrapper>
			<Page>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/registration' element={<Registration />} />
				</Routes>
			</Page>
		</Wrapper>
	);
}

export default App;
