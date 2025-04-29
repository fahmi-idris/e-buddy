import type { Request, Response } from "express";
import type { User } from "../entities/user.entity";
import { UserRepository } from "../repositories/user.repository";
import { getRandomFloat, getRandomInt } from "../utils/formatter";
import { createUserSchema } from "../validations";

export const UserController = {
	async getUsers(req: Request, res: Response): Promise<void> {
		const limit = Number.parseInt(req.query.limit as string) || 10;

		try {
			const users = await UserRepository.getUsers(limit);
			res.status(200).json(users);
		} catch (err) {
			console.error("Fetch error:", err);
			res.status(500).json({ message: "Failed to fetch users" });
		}
	},

	async createUser(req: Request, res: Response): Promise<void> {
		const validation = createUserSchema.safeParse(req.body);

		if (!validation.success) {
			res.status(400).json({ errors: validation.error.format() });
			return;
		}

		const { firstName, lastName, email } = req.body;

		try {
			const user = await UserRepository.createUser({
				firstName,
				lastName,
				email,
				totalAverageWeightRatings: getRandomFloat(1, 5),
				numberOfRents: getRandomInt(1, 100),
				recentlyActive: Date.now(),
			});
			res.status(201).json(user);
		} catch (err) {
			console.error("Create error:", err);
			res.status(500).json({ message: "Failed to create user" });
		}
	},

	async updateUser(req: Request, res: Response): Promise<void> {
		const user: User = req.body;
		const validation = createUserSchema.safeParse(user);

		if (!user.id) {
			res.status(400).json({ message: "User ID is required" });
			return;
		}

		if (!validation.success) {
			res.status(400).json({ errors: validation.error.format() });
			return;
		}

		try {
			await UserRepository.updateUser(user);
			res.status(200).json({ message: "User data updated successfully" });
		} catch (err) {
			console.error("Update error:", err);
			res.status(500).json({ message: "Failed to update user" });
		}
	},
};
