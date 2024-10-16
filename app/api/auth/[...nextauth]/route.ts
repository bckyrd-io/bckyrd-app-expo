import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";


const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
	],
	callbacks: {
		async redirect({ }) {
			// Always redirect to /user after successful login
			return '/user';
		},
	},
})

// Exporting the handler for both GET and POST
export { handler as GET, handler as POST };
