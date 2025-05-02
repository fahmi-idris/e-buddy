import { Box, Container } from "@mui/material";
import type { FC, PropsWithChildren } from "react";
import { Navigation } from "./components";

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => (
	<Container maxWidth="sm">
		<Box my="10px">{children}</Box>
		<Navigation />
	</Container>
);

export default DashboardLayout;
