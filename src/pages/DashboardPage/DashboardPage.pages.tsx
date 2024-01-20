import { useState, useEffect } from 'react'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Navbar from '@/components/common/Navbar.components';
import { IResponse } from '@/types/response.types';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { PlusIcon, ReloadIcon } from '@radix-ui/react-icons';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

export const DashboardPage = () => {
	const [roleName, setRoleName] = useState();
	const [roles, setRoles] = useState(false);

	const handleRoleChange = (e: any) => {
		setRoleName(e.target.value);
	};

	const handleSubmit = (e: any) => {
		setRoles(true);
	}

	
	return (
		<div>
			<Navbar page="dashboard" />
			<div className='flex flex-col justify-center'>
				{roles ? (
					<div className='ml-5'>
						<div className='flex flex-col w-full justify-center items-start'>
						<Popover>
							<PopoverTrigger asChild>
							<Button className='mb-5 w-56 ml-5 mt-5' variant={'outline'}>
								<PlusIcon className="mr-2 h-4 w-4" />
								<p className="font-normal text-sm">Create new role</p>
							</Button>
							</PopoverTrigger>
							<PopoverContent>
								<div>
									<p>Enter role name</p>
									<Input type='text' onChange={handleRoleChange} />
								</div>
								<div className='mt-8'>
									<p>Enter job description</p>
									<Input type='file' accept='application/pdf' />
								</div>
								<Button className='mt-4 w-full'>Create role</Button>

							</PopoverContent>

						</Popover>
							
						</div>
						<div className='w-80 h-auto my-8 px-4'>

							<div className='flex flex-row gap-8'>
								<Card className="w-[350px]">
									<CardHeader>
										<CardTitle>
											<p className='text-2xl'>{roleName}</p>
										</CardTitle>
										<CardDescription>
											<p className='text-sm'>Internship | 3 Months</p>
										</CardDescription>
									</CardHeader>
									<CardContent>
										<p className="font-c71717a">This is a basic description of this role that we extract from the js. This might include...</p>
									</CardContent>
									<CardFooter className="flex justify-between">
										<Button>Deploy</Button>
									</CardFooter>
								</Card>
								
							</div>


						</div>
					</div>
				) : (
					<div className='flex flex-col justify-center items-center mt-48'>
						{/* <img src={EmptyRolesImage} alt="no-roles" width={150} height={150} /> */}

						<Popover>
							<PopoverTrigger asChild>
								<Button className='mt-20'>
									<p className="font-normal text-sm">Create new Role</p>
									<PlusIcon className="ml-2 h-4 w-4" />
								</Button>
							</PopoverTrigger>
							<PopoverContent>
								<div>
									<p>Enter role name</p>
									<Input type='text' onChange={handleRoleChange} />
								</div>
								<div className='mt-8'>
									<p>Enter job description</p>
									<Input type='file' accept='application/pdf' />
								</div>
								<Button className='mt-4 w-full' onClick={handleSubmit}>Create role</Button>

							</PopoverContent>

						</Popover>



					</div>
				)}



			</div>


		</div>
	);
};
