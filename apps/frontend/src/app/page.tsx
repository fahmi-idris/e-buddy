import { authOptions } from "@/config/auth";
import { DashboardLayout } from "@/layouts";
import { Dashboard } from "@/modules/dashboard";
import { type AuthOptions, getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
	const session = await getServerSession(authOptions as AuthOptions);

	if (!session) redirect("/login");

	return (
		<DashboardLayout>
			<Dashboard />
		</DashboardLayout>
	);
}
