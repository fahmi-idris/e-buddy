import type { User } from "@e-buddy/shared";
import {
	Box,
	Button,
	Typography,
	Modal,
	TextField,
	Stack,
} from "@mui/material";

import { type FC, useCallback, useMemo, useState } from "react";
import { useCreateUpdateUser } from "../hooks/use-create-update-user";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	boxShadow: 24,
	p: 4,
};

type CreateUpdateUserProps = {
	type?: "create" | "update";
} & Partial<User>;

const CreateUpdateUser: FC<CreateUpdateUserProps> = ({
	type = "create",
	...props
}) => {
	const { mutate, isPending } = useCreateUpdateUser(type);
	const [open, setOpen] = useState(false);
	const [firstName, setFirstName] = useState(props.firstName);
	const [lastName, setLastName] = useState(props.lastName);
	const [email, setEmail] = useState(props.email);

	const isDirty = useMemo(
		() => !firstName || !lastName || !email,
		[firstName, lastName, email],
	);

	const onHandleOpen = useCallback(() => setOpen(true), []);
	const onHandleClose = useCallback(() => setOpen(false), []);
	const onHandleSubmit = useCallback(() => {
		mutate(
			{
				id: props.id,
				firstName,
				lastName,
				email,
			},
			{
				onSuccess: () => {
					onHandleClose();
				},
			},
		);
	}, [mutate, onHandleClose, firstName, lastName, email, props.id]);

	return (
		<>
			<Button onClick={onHandleOpen}>
				<Typography fontSize="14px" textTransform="capitalize">
					{type} User
				</Typography>
			</Button>
			<Modal open={open} onClose={onHandleClose}>
				<Box sx={style}>
					<Typography variant="h6" flex="1" textTransform="capitalize" mb={2}>
						{type} User
					</Typography>
					<Stack spacing={2}>
						<TextField
							label="First Name"
							value={firstName}
							defaultValue={firstName}
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
								setFirstName(event.target.value);
							}}
						/>
						<TextField
							label="Last Name"
							value={lastName}
							defaultValue={lastName}
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
								setLastName(event.target.value);
							}}
						/>
						<TextField
							label="Email"
							value={email}
							defaultValue={email}
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
								setEmail(event.target.value);
							}}
						/>
					</Stack>
					<Box display="flex" mt={1} justifyContent="space-between">
						<Button onClick={onHandleClose}>Close</Button>
						<Button
							variant="contained"
							onClick={onHandleSubmit}
							disabled={isDirty || isPending}
						>
							{type} User
						</Button>
					</Box>
				</Box>
			</Modal>
		</>
	);
};

export default CreateUpdateUser;
