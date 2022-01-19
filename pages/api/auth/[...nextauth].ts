import { prisma } from '@/server/context'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      const userRes = await prisma.user.findUnique({
        where: { id: user.id },
        select: {
          id: true,
          email: true,
          image: true,
          name: true,
        },
      })

      if (!userRes) return session

      return {
        ...session,
        user: userRes,
      }
    },
  },
})
