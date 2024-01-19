const Navbar = ({ page }: { page?: string }) => {
	return (
		<nav className="border border-eaeaea w-full">
			<h1 className="p-4 text-xl font-inter font-medium ml-5">HeroHire</h1>
			{/* {page === 'login' || page === 'error' ? null : <Button>Logout</Button>} */}
		</nav>
	);
};

export default Navbar;
