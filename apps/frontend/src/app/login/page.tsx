import { Box } from "@mui/material";
import { type AuthOptions, getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@/config/auth";
import { ButtonLogin } from "@/components/button";

export default async function LoginPage() {
	const session = await getServerSession(authOptions as AuthOptions);

	if (session) redirect("/");

	return (
		<Box
			display="flex"
			alignItems="center"
			justifyContent="center"
			height="100vh"
		>
			<ButtonLogin />
		</Box>
	);
}
