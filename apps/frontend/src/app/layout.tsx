import type * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/config/theme";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import QueryProvider from "@/providers/query-provider";

export default function RootLayout(props: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<QueryProvider>
					<InitColorSchemeScript attribute="class" />
					<AppRouterCacheProvider options={{ enableCssLayer: true }}>
						<ThemeProvider theme={theme}>
							<CssBaseline />
							{props.children}
						</ThemeProvider>
					</AppRouterCacheProvider>
				</QueryProvider>
			</body>
		</html>
	);
}
