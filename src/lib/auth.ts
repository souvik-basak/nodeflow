import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/db";
import { Resend } from "resend";
import VerifyEmail from "@/components/emails/verify-email";
import ForgotPasswordEmail from "@/components/emails/forgot-password-email";

const resend = new Resend(process.env.RESEND_API_KEY as string);

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      await resend.emails.send({
        from: "NodeFlow <hello@nodeflow.souvikbasak.in>",
        to: user.email,
        subject: "Verify your email address",
        react: VerifyEmail({
          verificationLink: url,
          username: user.name,
        }),
      });
    },
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
  },
  emailAndPassword: {
    enabled: true,
    // autoSignIn: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url }) => {
      await resend.emails.send({
        from: "NodeFlow <security@nodeflow.souvikbasak.in>",
        to: user.email,
        subject: "Reset your password",
        react: ForgotPasswordEmail({
          username: user.name,
          userEmail: user.email,
          resetUrl: url,
        })
      });
    },
  },
  // socialProviders: {
  //   google: {
  //     enabled: true,
  //     clientId: process.env.GOOGLE_CLIENT_ID!,
  //     clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  //   },
  //   github: {
  //     enabled: true,
  //     clientId: process.env.GITHUB_CLIENT_ID!,
  //     clientSecret: process.env.GITHUB_CLIENT_SECRET!,
  //   },
  // }
});
