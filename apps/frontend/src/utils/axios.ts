import axiosInstance from "axios";
import {
	type User,
	signInWithCredential,
	GoogleAuthProvider,
	getIdToken,
} from "firebase/auth";
import { auth } from "@/config/firebase";
import { getSession } from "next-auth/react";

const axios = axiosInstance.create({
	baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

axios.interceptors.request.use(async (config) => {
	const session = await getSession();

	if (!session?.accessToken) return config;

	if (!auth.currentUser) {
		const credential = GoogleAuthProvider.credential(null, session.accessToken);
		await signInWithCredential(auth, credential);
	}

	const token = await getIdToken(auth.currentUser as User, true);
	config.headers.Authorization = `Bearer ${token}`;

	return config;
});

export default axios;
