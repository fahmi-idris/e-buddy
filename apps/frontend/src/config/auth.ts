import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";
import type { JWT } from "next-auth/jwt";
import type { Session, User, Account, Profile } from "next-auth";

export const authOptions: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? "",
			clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET ?? "",
		}),
	],
	session: {
		strategy: "jwt",
	},
	callbacks: {
		async jwt(params: {
			token: JWT;
			user?: User;
			account?: Account | null;
			profile?: Profile;
			isNewUser?: boolean;
		}): Promise<JWT> {
			const { token, account } = params;
			if (account) {
				token.accessToken = account.access_token;
			}
			return token;
		},
		async session(params: {
			session: Session;
			token: JWT;
		}): Promise<Session> {
			const { session, token } = params;
			session.accessToken = token.accessToken;
			return session;
		},
	},
};
