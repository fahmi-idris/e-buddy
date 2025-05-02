import { Box } from "@mui/material";
import type { FC, PropsWithChildren } from "react";

type FallbackErrorProps = {
	error: Error | null;
};

const FallbackError: FC<PropsWithChildren<FallbackErrorProps>> = ({
	children,
	error = null,
}) => {
	if (error) {
		return <Box>Something went wrong</Box>;
	}

	return children;
};

export default FallbackError;
