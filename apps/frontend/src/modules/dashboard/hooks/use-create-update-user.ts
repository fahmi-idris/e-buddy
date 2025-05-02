import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "@/utils/axios";
import type { User } from "@e-buddy/shared";

export const useCreateUpdateUser = () => {
	const queryClient = useQueryClient();

	return useMutation<Response, Error, Partial<User>>({
		mutationFn: async (data: Partial<User>) => {
			const response = await axios.post("/api/users", data);
			return response.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["get-users"] });
		},
	});
};
