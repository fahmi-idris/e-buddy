import { useQuery } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import type { User } from "@e-buddy/shared";

import axios from "@/utils/axios";
import type { GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
	{ field: "firstName", headerName: "First name", width: 200 },
	{ field: "lastName", headerName: "Last name", width: 200 },
	{ field: "email", headerName: "Email", width: 200 },
];

const pagination = { page: 0, pageSize: 5 };

export const useGetUsers = () => {
	const { data: users, ...res } = useQuery({
		queryKey: ["get-users"],
		queryFn: async () => {
			const res: AxiosResponse<Array<User>> = await axios.get("/api/users");
			return res.data;
		},
	});

	return {
		users,
		columns,
		pagination,
		...res,
	};
};

export default useGetUsers;
