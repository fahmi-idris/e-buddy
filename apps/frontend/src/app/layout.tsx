import type * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/config/theme";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { AuthProviders } from "@/providers/auth-provider";
import { SessionProvider } from "@/providers/session-provider";

export default function RootLayout(props: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<SessionProvider>
					<AuthProviders>
						<InitColorSchemeScript attribute="class" />
						<AppRouterCacheProvider options={{ enableCssLayer: true }}>
							<ThemeProvider theme={theme}>
								<CssBaseline />
								{props.children}
							</ThemeProvider>
						</AppRouterCacheProvider>
					</AuthProviders>
				</SessionProvider>
			</body>
		</html>
	);
}
