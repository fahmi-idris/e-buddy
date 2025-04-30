import { type AuthOptions, getServerSession } from "next-auth";
import { authOptions } from "@/config/auth";
import { redirect } from "next/navigation";

export default async function Users() {
	const session = await getServerSession(authOptions as AuthOptions);

	if (!session) redirect("/login");

	return (
		<div className="p-4">
			<h1>Welcome, {session?.user?.name}</h1>
		</div>
	);
}
