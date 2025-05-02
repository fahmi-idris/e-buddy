"use client";

import { Box, Typography } from "@mui/material";

import { useGetUsers } from "./hooks/use-get-users";
import UsersListLoading from "./components/users-list.loading";
import { FallbackError } from "@/components/fallback";

import UsersList from "./components/users-list";
import CreateUpdateUser from "./components/create-update-user";

const Dashboard = () => {
	const { isLoading, error } = useGetUsers();

	if (isLoading) {
		return <UsersListLoading />;
	}

	return (
		<FallbackError error={error}>
			<Box
				display="flex"
				mb="10px"
				alignItems="center"
				justifyContent="space-between"
			>
				<Typography variant="h6">Users</Typography>
				<CreateUpdateUser />
			</Box>
			<UsersList />
		</FallbackError>
	);
};

export default Dashboard;
