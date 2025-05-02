import { ButtonLogout } from "@/components/button";
import { Person } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import type { FC, PropsWithChildren } from "react";

const Navigation: FC<PropsWithChildren> = ({ children }) => (
	<>
		{children}
		<Box mt="20px">
			<BottomNavigation showLabels>
				<BottomNavigationAction label="Users" icon={<Person />} />
				<ButtonLogout />
			</BottomNavigation>
		</Box>
	</>
);

export default Navigation;
