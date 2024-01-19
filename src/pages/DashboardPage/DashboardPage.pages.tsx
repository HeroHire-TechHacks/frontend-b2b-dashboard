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
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const DashboardPage = () => {
	const { toast } = useToast()
	const navigate = useNavigate()

	const [roles, setRoles] = useState([])
	const [isLoading, setLoading] = useState(false)

	async function getRoles() {
		setLoading(true)

		const userToken = window.localStorage.getItem('token')?.trim() || null;

		if (!userToken) {
			window.localStorage.removeItem('token');
			navigate('/login');

			return;
		}

		const res = await fetch(import.meta.env.VITE_APP_BACKEND_URL + '/company/roles', {
			method: "GET",
			headers: {
				'content-type': "application/json",
				'authorization': "Bearer " + userToken
			}
		})

		const responseData: IResponse = await res.json();

		if (responseData.isError) {
			if (responseData.responseStringCode === 'UNAUTHORIZED') {
				window.localStorage.removeItem('token');
				navigate('/login');

				return;
			}

			toast({
				title: "Some error occured while getting roles",
				description: "We encountered some errors while getting roles you created. Please contact the team.",
				variant: "destructive"
			})

			return;
		}

		const data = responseData.data as any;

		setRoles(data);
	}

	useEffect(() => {
		try {
			getRoles();
		} catch (err) {
			console.log(err)
			// toast({
			// 	title: "Some error occured while getting roles",
			// 	description: "We encountered some errors while getting roles you created. Please contact the team.",
			// 	variant: "destructive"
			// })
		} finally {
			setLoading(false)
		}
	}, [])

	return (
		<div>
			<Navbar page="dashboard" />
			{
				isLoading ? <div className='w-full flex-col flex justify-center items-center'>
					<ReloadIcon className="mt-48 h-12 w-12 animate-spin text-gray-800" />
				</div> : <div className='flex flex-col justify-center'>
					{
						roles.length ? (
							<div>

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
										<Input type='text' />	
										</div>
										<div className='mt-8'>
										<p>Enter role name</p>
										<Input type='file' accept='application/pdf' />	
										</div>
										<Button className='mt-4 w-full'>Create role</Button>
										
									</PopoverContent>

								</Popover>



							</div>
						)
					}
				</div>
			}

		</div>
	);
};
