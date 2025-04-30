import NextAuth from "next-auth";
import type { DefaultSession, DefaultUser } from "next-auth";
import type { JWT as DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
	interface Session {
		accessToken?: string;
		user: DefaultSession["user"];
	}

	interface User extends DefaultUser {}
}

declare module "next-auth/jwt" {
	interface JWT extends DefaultJWT {
		accessToken?: string;
	}
}
