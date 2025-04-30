"use client";
import { Button } from "@mui/material";
import { signIn } from "next-auth/react";

export default function LoginPage() {
	return (
		<div>
			<Button onClick={() => signIn("google", { callbackUrl: "/users" })}>
				Sign in with Google
			</Button>
		</div>
	);
}
