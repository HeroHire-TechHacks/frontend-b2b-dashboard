import { Route, Routes } from 'react-router-dom';

import './App.css';
import { ErrorPage } from './pages/ErrorPage/ErrorPage.pages';
import { LoginPage } from './pages/LoginPage/LoginPage.pages';
import { RoleInfoPage } from './pages/RoleInfoPage/RoleInfoPage.pages';
import { DashboardPage } from './pages/DashboardPage/DashboardPage.pages';

function App() {
	return (
		<>
			<div className="App font-inter w-full h-screen">
				<Routes>
					<Route path="/" element={<DashboardPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/role/:roleId" element={<RoleInfoPage />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</div>
			<div className="App-Mobile font-inter w-full h-screen">
				<p className="h-full flex flex-col justify-center items-center text-center">
					Dashboard can't be viewed on a mobile device. Please use PC/Mac.
				</p>
			</div>
			<style>
				{`
            @media only screen and (max-width: 800px) {
                .App {
                    display: none;
                }
               .App-Mobile {
									 display: block;
							 }
            }

						@media only screen and (min-width: 801px) {
							.App {
									display: block;
							}
						 .App-Mobile {
								 display: none;
						 }
					}
        `}
			</style>
		</>
	);
}

export default App;
