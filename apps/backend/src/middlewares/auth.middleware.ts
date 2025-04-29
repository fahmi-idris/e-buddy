import type { NextFunction, Request, Response } from "express";
import { auth } from "../config/firebase";

export function authMiddleware(
	req: Request,
	res: Response,
	next: NextFunction,
): void {
	const authHeader = req.headers.authorization;

	if (!authHeader?.startsWith("Bearer ")) {
		res.status(401).json({ message: "Unauthorized: No token provided" });
		return;
	}

	const token = authHeader.split(" ")[1];

	auth
		.verifyIdToken(token)
		.then((decoded) => {
			req.user = decoded;
			next();
		})
		.catch(() => {
			res.status(401).json({ message: "Unauthorized: Invalid token" });
		});
}
