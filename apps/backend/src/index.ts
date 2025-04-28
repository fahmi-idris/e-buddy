import express from "express";

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (_req, res) => {
	res.send("Hello from Backend!");
});

app.listen(port, () => {
	console.log(`Backend server running at http://localhost:${port}`);
});
