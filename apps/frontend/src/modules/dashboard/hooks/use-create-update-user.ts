import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "@/utils/axios";
import type { User } from "@e-buddy/shared";

export const useCreateUpdateUser = (type?: "create" | "update") => {
	const queryClient = useQueryClient();

	return useMutation<Response, Error, Partial<User>>({
		mutationFn: async (data: Partial<User>) => {
			const method = type === "create" ? "post" : "put";
			const response = await axios[method]("/api/users", data);
			return response.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["get-users"] });
		},
	});
};
