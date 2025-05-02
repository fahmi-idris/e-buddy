"use client";

import { Logout } from "@mui/icons-material";
import { BottomNavigationAction } from "@mui/material";
import { signOut } from "next-auth/react";

const ButtonLogout = () => (
	<BottomNavigationAction
		label="Logout"
		icon={<Logout />}
		onClick={() => signOut({ callbackUrl: "/login" })}
	/>
);

export default ButtonLogout;
