import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';

const Navbar = ({ page }: { page?: string }) => {
	const navigate = useNavigate();

	return (
		<nav className="border border-eaeaea w-full flex flex-row justify-between items-center">
			<h1 className="p-4 text-xl font-inter font-medium ml-5">HeroHire</h1>
			{page === 'login' || page === 'error' ? null : (
				<Button className="mr-5" onClick={() => navigate('/login')}>
					Logout
				</Button>
			)}
		</nav>
	);
};

export default Navbar;
