import type { User } from "@e-buddy/shared";

import { db } from "../config/firebase";

const collection = db.collection("USERS");

export const UserRepository = {
	async getUsers(limit: number): Promise<User[]> {
		const query = collection.orderBy("email").limit(limit);
		const snapshot = await query.get();
		return snapshot.docs.map((doc) => doc.data() as User);
	},

	async createUser(user: Omit<User, "id">): Promise<User> {
		const docRef = await collection.add(user);
		const request: User = {
			id: docRef.id,
			...user,
		};
		await docRef.set(request);
		return request;
	},

	async updateUser(user: User): Promise<void> {
		const { id, ...req } = user;
		await collection.doc(id).update(req);
	},
};
