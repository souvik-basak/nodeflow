import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface ForgotPasswordEmailProps {
  username: string;
  userEmail: string;
  resetUrl: string;
}

const ForgotPasswordEmail = (props: ForgotPasswordEmailProps) => {
  const { username, userEmail, resetUrl } = props;

  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Preview>Reset your password - Action required</Preview>
        <Body className="bg-gray-100 font-sans py-[40px] md:px-[20px]">
          <Container className="bg-white rounded-[8px] shadow-sm max-w-[600px] mx-auto">
            {/* Header */}
            <Section className="bg-blue-600 rounded-t-[8px] px-[40px] py-[32px]">
              <Heading className="text-white text-[28px] font-bold m-0 text-center">
                Password Reset Request
              </Heading>
            </Section>

            {/* Main Content */}
            <Section className="px-[40px] py-[32px]">
              <Text className="text-gray-800 text-[16px] leading-[24px] mb-[24px]">
                Hi <strong className="font-semibold">{username}</strong>!
              </Text>

              <Text className="text-gray-700 text-[16px] leading-[24px] mb-[24px]">
                We received a request to reset the password for your account
                associated with <strong>{userEmail}</strong>.
              </Text>

              <Text className="text-gray-700 text-[16px] leading-[24px] mb-[32px]">
                If you made this request, click the button below to reset your
                password. This link will expire in 24 hours for security
                reasons.
              </Text>

              {/* Reset Button */}
              <Section className="text-center mb-[24px]">
                <Button
                  href={resetUrl}
                  className="bg-orange-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border inline-block"
                >
                  Reset Password
                </Button>
              </Section>

              {/* Alternative link instruction */}
              <Text className="text-gray-600 text-[14px] leading-[20px] mb-[16px] text-center">
                If this button does not work, copy and paste the following link
                into your browser:
              </Text>

              <Text className="text-blue-600 text-[14px] leading-[20px] mb-[32px] text-center break-all bg-gray-50 px-[16px] py-[12px] rounded-[4px] border border-solid border-gray-200">
                {resetUrl}
              </Text>

              <Text className="text-gray-600 text-[14px] leading-[20px] mb-[24px]">
                If you didn't request a password reset, you can safely ignore
                this email. Your password will remain unchanged.
              </Text>

              <Text className="text-gray-600 text-[14px] leading-[20px] mb-[16px]">
                For security reasons, this link will expire in 24 hours. If you
                need to reset your password after that, please request a new
                reset link.
              </Text>

              <Text className="text-gray-700 text-[16px] leading-[24px]">
                Best regards,
                <br />
                NodeFlow Security Team
              </Text>
            </Section>

            {/* Footer */}
            <Section className="bg-gray-50 px-[40px] py-[24px] rounded-b-[8px] border-t border-solid border-gray-200">
              <Text className="text-gray-500 text-[12px] leading-[16px] text-center m-0 mb-[8px]">
                This is an automated security email. Please do not reply to this
                message.
              </Text>
              <Text className="text-gray-500 text-[12px] leading-[16px] text-center m-0 mb-[8px]">
                123 Security Street, Tech City, TC 12345
              </Text>
              <Text className="text-gray-500 text-[12px] leading-[16px] text-center m-0">
                © 2026 Your Company. All rights reserved. |
                <Button
                  href="#"
                  className="text-gray-500 text-[12px] underline ml-[4px]"
                >
                  Unsubscribe
                </Button>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ForgotPasswordEmail;
