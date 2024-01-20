import { useState } from 'react';
import Navbar from '@/components/common/Navbar.components';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';

export const RoleInfoPage = () => {
	const [candidates, setCandidates] = useState([
		{
			name: 'Aditya Krishna Gupta',
			email: 'adityakrishna@gmail.com',
			status: 'Scheduled',
		},
		{
			name: 'Mannas Narang',
			email: 'mannas@gmail.com',
			status: 'Complete',
		},
		{
			name: 'Adish Mehta',
			email: 'adish@gmail.com',
			status: 'Skipped',
		},
		{
			name: 'Aishwarya Singh',
			email: 'aishwarya@gmail.com',
			status: 'Complete',
		},
		{
			name: 'Kiran Patel',
			email: 'kiran@gmail.com',
			status: 'Scheduled',
		},
		{
			name: 'Rajesh Sharma',
			email: 'rajesh@gmail.com',
			status: 'Scheduled',
		},
		{
			name: 'Priya Gupta',
			email: 'priya@gmail.com',
			status: 'Scheduled',
		},
		{
			name: 'Vikas Verma',
			email: 'vikas@gmail.com',
			status: 'Complete',
		},
		{
			name: 'Neha Kapoor',
			email: 'neha@gmail.com',
			status: 'Complete',
		},
	]);

	const [newCandidateName, setNewCandidateName] = useState('');
	const [newCandidateEmail, setNewCandidateEmail] = useState('');

	const [openModal, setOpenModal] = useState(false);

	const addCandidateToTable = () => {
		const candidate = {
			name: newCandidateName,
			email: newCandidateEmail,
			status: 'Scheduled',
		};

		setCandidates([...candidates, candidate]);

		setOpenModal(false);
	};

	return (
		<>
			<Navbar page="roleInfo" />
			<div className="flex flex-row justify-between align-middle my-12 mx-72">
				<h1 className="text-3xl font-bold">
					{decodeURI(window.location.search.replace('?roleName=', ''))}
				</h1>
				<Dialog open={openModal} onOpenChange={setOpenModal}>
					<DialogTrigger asChild>
						<Button className="ml-4">Add Candidate</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>Add candidate details</DialogTitle>
							<DialogDescription>
								Add the details of the candidate that you want to schedule an
								interview with
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-4 py-4">
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="name" className="text-right">
									Name
								</Label>
								<Input
									id="name"
									value={newCandidateName}
									onChange={(e) => setNewCandidateName(e.target.value)}
									className="col-span-3"
									placeholder="John Doe"
								/>
							</div>
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="email" className="text-right">
									Email
								</Label>
								<Input
									id="email"
									value={newCandidateEmail}
									className="col-span-3"
									onChange={(e) => setNewCandidateEmail(e.target.value)}
									placeholder="john@gmail.com"
								/>
							</div>
						</div>
						<DialogFooter>
							<AlertDialog>
								<AlertDialogTrigger>
									<Button className="ml-4">Add Candidate</Button>
								</AlertDialogTrigger>
								<AlertDialogContent>
									<AlertDialogHeader>
										<AlertDialogTitle>
											To add a candidate, copy the following link and share it
											with the candidate
										</AlertDialogTitle>
										<AlertDialogDescription>
											https://herohire.xyz/?code=
											{Math.floor(Math.random() * 1000000)}
										</AlertDialogDescription>
									</AlertDialogHeader>
									<AlertDialogFooter>
										<AlertDialogCancel onClick={() => setOpenModal(false)}>
											Cancel
										</AlertDialogCancel>
										<AlertDialogAction onClick={addCandidateToTable}>
											Done
										</AlertDialogAction>
									</AlertDialogFooter>
								</AlertDialogContent>
							</AlertDialog>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>
			<Tabs defaultValue="candidates" className="mx-72">
				<TabsContent value="candidates">
					<Table>
						<TableCaption>End of list.</TableCaption>
						<TableHeader>
							<TableRow>
								<TableHead className="text-left">Id</TableHead>
								<TableHead className="text-center">Name</TableHead>
								<TableHead className="text-center">Email</TableHead>
								<TableHead className="text-right">Status</TableHead>
							</TableRow>
						</TableHeader>

						{candidates.map((candidate, idx) => {
							return (
								<TableBody key={idx}>
									<TableRow>
										<TableCell className="text-left">
											{Math.floor(Math.random() * 1000000)}
										</TableCell>
										<TableCell className="text-center">
											{candidate.name}
										</TableCell>
										<TableCell className="text-center">
											{candidate.email}
										</TableCell>
										<TableCell className="text-right">
											{candidate.status}
										</TableCell>
									</TableRow>
								</TableBody>
							);
						})}
					</Table>
				</TabsContent>
			</Tabs>
		</>
	);
};

// candidate email
// candidate name
// interview scheduled time
//
