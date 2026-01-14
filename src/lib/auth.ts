import GitHubProvider from "next-auth/providers/github";

const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    // ... add more providers as needed
  ],
  // Optional: add a database adapter or callbacks if needed
};

export default authOptions;