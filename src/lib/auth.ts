import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const username = String(credentials?.username ?? "");
        const password = String(credentials?.password ?? "");
        const expectedUser = process.env.AUTH_USERNAME ?? "";
        const expectedPass = process.env.AUTH_PASSWORD ?? "";

        if (username === expectedUser && password === expectedPass) {
          return { id: "1", name: "Luke" };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
