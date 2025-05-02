import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import useGetUsers from "../hooks/use-get-users";

const UsersList = () => {
	const { users, columns, pagination } = useGetUsers();

	return (
		<Paper sx={{ height: 400, width: "100%" }}>
			<DataGrid
				rows={users}
				columns={columns}
				initialState={{ pagination: { paginationModel: pagination } }}
				pageSizeOptions={[5, 10]}
				sx={{ border: 0 }}
			/>
		</Paper>
	);
};

export default UsersList;
