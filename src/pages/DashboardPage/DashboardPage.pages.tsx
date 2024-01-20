import { useState } from 'react';
import Navbar from '@/components/common/Navbar.components';
import { PlusIcon, PersonIcon } from '@radix-ui/react-icons';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

export const DashboardPage = () => {
	const navigate = useNavigate();

	const [popOverCurrentRoleName, setPopOverCurrentRoleName] = useState('');
	const [popOverCurrentRoleType, setPopOverCurrentRoleType] = useState('');

	const [roles, setRoles] = useState([
		{
			name: 'Software Engineer - 1',
			description:
				'This is a basic description of this role that we extract from the jd. This might include ...',
			numberOfCandidates: 324,
			type: 'Internship',
		},
	]);

	const handleCreateNewRole = () => {
		setRoles([
			...roles,
			{
				name: popOverCurrentRoleName,
				description:
					'This is a basic description of this role that we extract from the jd. This might include ...',
				numberOfCandidates: 0,
				type: popOverCurrentRoleType,
			},
		]);

		setPopOverCurrentRoleName('');
		setPopOverCurrentRoleType('');
	};

	return (
		<div>
			<Navbar page="dashboard" />
			<div className="ml-5">
				<div className="mt-6">
					<Popover>
						<PopoverTrigger asChild>
							<Button className="mb-5 w-56 ml-5 mt-5" variant={'outline'}>
								<PlusIcon className="mr-2 h-4 w-4" />
								<p className="font-normal text-sm">Create new role</p>
							</Button>
						</PopoverTrigger>
						<PopoverContent className="flex flex-col justify-center gap-4">
							<div>
								<p className="mb-2">Enter role name</p>
								<Input
									type="text"
									onChange={(e) => setPopOverCurrentRoleName(e.target.value)}
									value={popOverCurrentRoleName}
								/>
							</div>
							<div>
								<p className="mb-2">Role Type</p>
								<Input
									type="text"
									onChange={(e) => setPopOverCurrentRoleType(e.target.value)}
									value={popOverCurrentRoleType}
								/>
							</div>
							<div>
								<p className="mb-2">Upload job description</p>
								<Input type="file" accept="application/pdf" />
							</div>
							<Button className="mt-4 w-full" onClick={handleCreateNewRole}>
								Create role
							</Button>
						</PopoverContent>
					</Popover>
				</div>
				<div className="h-auto my-8 mx-4">
					<div className="flex flex-row gap-8">
						{roles.map((role, idx) => {
							return (
								<Card
									className="w-[350px] cursor-pointer"
									key={idx}
									onClick={() => navigate('/role/' + idx)}
								>
									<CardHeader>
										<CardTitle>
											<p className="text-xl">{role.name}</p>
										</CardTitle>
										<CardDescription>
											<p className="text-sm">{role.type}</p>
										</CardDescription>
									</CardHeader>
									<CardContent>
										<p className="text-c71717a">{role.description}</p>
									</CardContent>
									<CardFooter>
										<PersonIcon className="h-4 w-4 text-c71717a" />
										<p className="text-sm ml-2">{role.numberOfCandidates}</p>
									</CardFooter>
								</Card>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
