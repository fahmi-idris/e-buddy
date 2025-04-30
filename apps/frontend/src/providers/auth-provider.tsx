"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";

import {
	auth,
	signInWithCredential,
	GoogleAuthProvider,
} from "@/config/firebase";

import { SessionProvider } from "./session-provider";

export function AuthProviders({ children }: { children: React.ReactNode }) {
	const { data: session } = useSession();

	useEffect(() => {
		if (!session?.accessToken) return;

		const credential = GoogleAuthProvider.credential(null, session.accessToken);
		signInWithCredential(auth, credential);
	}, [session?.accessToken]);

	return children;
}
