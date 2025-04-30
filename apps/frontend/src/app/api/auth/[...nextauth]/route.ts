import NextAuth, { type AuthOptions } from "next-auth";
import { authOptions } from "@/config/auth";

const handler = NextAuth(authOptions as AuthOptions);

export { handler as GET, handler as POST };
