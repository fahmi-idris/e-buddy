"use client";

import { Google } from "@mui/icons-material";
import { Button } from "@mui/material";
import { signIn } from "next-auth/react";

const ButtonLogin = () => (
	<Button
		variant="contained"
		onClick={() => signIn("google", { callbackUrl: "/" })}
		startIcon={<Google />}
	>
		Sign in with Google
	</Button>
);

export default ButtonLogin;
