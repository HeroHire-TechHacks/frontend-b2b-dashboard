import { useState } from 'react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { ReloadIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/common/Navbar.components';
import { useNavigate } from 'react-router-dom';

const formSchema = z.object({
	email: z.string().email(),
	password: z
		.string()
		.min(1, { message: 'Password must contain at least 1 character(s)' })
		.max(20, { message: 'Password must be less than 20 characters' }),
});

export const LoginPage = () => {
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	async function onSubmit() {
		navigate('/');
	}

	return (
		<>
			<Navbar page="login" />
			<div className="flex flex-col justify-center items-center">
				<div className="flex flex-col justify-center items-center w-1/3 h-auto rounded-sm mt-36 max-xl:mt-16">
					<h1 className="text-2xl font-semibold mt-0">Log into dashboard</h1>
					<p className="text-c71717a font-normal text-md text-center mt-4">
						Log in with your credentials to continue to your account
					</p>
					<div className="m-8 flex flex-col justify-center items-center">
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-8 w-full flex flex-col justify-center items-center"
							>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem className="w-full">
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input
													type="email"
													placeholder="name@example.com"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="password"
									render={({ field }) => (
										<FormItem className="w-full">
											<FormLabel>Password</FormLabel>
											<FormControl>
												<Input
													type="password"
													placeholder="*********"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								{isLoading ? (
									<Button disabled className="w-full">
										<p className="font-normal text-sm">Please wait</p>
										<ReloadIcon className="ml-2 h-4 w-4 animate-spin" />
									</Button>
								) : (
									<Button className="w-full">
										<p className="font-normal text-sm">Continue to Dashboard</p>
										<ArrowRightIcon className="ml-2 h-4 w-4" />
									</Button>
								)}
							</form>
						</Form>
						<p className="text-c71717a font-normal text-sm text-center mt-6">
							By clicking continue, you agree to our{' '}
							<span className="underline underline-offset-2 cursor-pointer">
								Terms of Service
							</span>{' '}
							and{' '}
							<span className="underline underline-offset-2 cursor-pointer">
								Privacy Policy
							</span>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
