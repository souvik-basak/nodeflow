import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Hr,
  Tailwind,
} from "@react-email/components";

interface VerifyEmailProps {
  verificationLink: string;
  username: string;
}

const VerifyEmail = (props: VerifyEmailProps) => {
  const { verificationLink, username } = props;

  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Body className="bg-gray-100 font-sans px-4 py-8">
          <Container className="bg-white rounded-xl shadow-sm w-full max-w-150 mx-auto p-6">
            <Section>
              <Text className="text-[28px] leading-8.5 font-bold text-gray-900 mb-6 text-center">
                Verify Your Email Address
              </Text>

              <Text className="text-[16px] text-gray-700 mb-6 leading-6">
                Hi <strong className="font-semibold">{username}</strong>!
              </Text>

              <Text className="text-[16px] text-gray-700 mb-8 leading-6">
                Thanks for signing up! To complete your registration and secure
                your account, please verify your email address by clicking the
                button below.
              </Text>

              <Section className="text-center mb-8">
                <Button
                  href={verificationLink}
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg text-[16px] font-semibold no-underline box-border"
                >
                  Verify Email Address
                </Button>
              </Section>

              <Text className="text-[14px] text-gray-600 mb-6 leading-5">
                If the button above doesn't work, you can also copy and paste
                the following link into your browser:
              </Text>

              <Text className="text-[14px] text-blue-600 mb-8 break-all text-center">
                {verificationLink}
              </Text>

              <Text className="text-[14px] text-gray-600 mb-6 leading-5">
                This verification link will expire in 24 hours for security
                reasons. If you didn't create an account with us, you can safely
                ignore this email.
              </Text>

              <Text className="text-[16px] text-gray-700 mb-2">
                Best regards,
              </Text>
              <Text className="text-[16px] text-gray-700 mb-8">
                NodeFlow Team
              </Text>
            </Section>

            <Hr className="border-gray-200 mb-8" />

            <Section>
              <Text className="text-[12px] text-gray-500 text-center m-0">
                123 Business Street, Suite 100, City, State 12345
              </Text>
              <Text className="text-[12px] text-gray-500 text-center mb-2">
                <a href="#" className="text-gray-500 no-underline">
                  Unsubscribe
                </a>{" "}
                |
                <a href="/privacy" className="text-gray-500 no-underline ml-1">
                  Privacy Policy
                </a>
              </Text>
              <Text className="text-[12px] text-gray-500 text-center m-0">
                © 2026 NodeFlow. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VerifyEmail;
