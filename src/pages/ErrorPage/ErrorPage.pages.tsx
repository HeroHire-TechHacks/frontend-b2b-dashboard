import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
	return (
		<div className="h-full flex flex-col justify-center items-center">
			<h1 className="text-3xl">The page your are requesting doesn't exist</h1>
			<Link to="/">
				<Button className="m-10">Go back home</Button>
			</Link>
		</div>
	);
};
