"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { FC, PropsWithChildren } from "react";

const client = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

const QueryProvider: FC<PropsWithChildren> = ({ children }) => (
	<QueryClientProvider client={client}>{children}</QueryClientProvider>
);

export default QueryProvider;
