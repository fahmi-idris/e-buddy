import express from "express";
import { userRoutes } from "./routes";
import cors from "cors";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3001;

app.use(
	cors({
		origin: process.env.CORS_ORIGIN || "http://localhost:3000",
		credentials: true,
	}),
);
app.use(express.json());
app.use("/api/users", userRoutes);

app.listen(port, () => {
	console.log(`Backend server running at http://localhost:${port}`);
});
