"use client";

import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";

type VerifyEmailClientProps = {
  verifyUrl?: string;
};

const VerifyEmailClient = ({ verifyUrl }: VerifyEmailClientProps) => {
  const router = useRouter();

  const decodedVerifyUrl = useMemo(() => {
    return verifyUrl ? decodeURIComponent(verifyUrl) : null;
  }, [verifyUrl]);

  useEffect(() => {
    if (!decodedVerifyUrl) {
      router.replace("/login?verifyInvalid=1");
      return;
    }

    let isMounted = true;

    const verifyEmail = async () => {
      try {
        const response = await fetch(decodedVerifyUrl, {
          method: "GET",
          credentials: "include",
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok && isMounted) {
          router.replace("/login?verifyInvalid=1");
          return;
        }

        if (isMounted) {
          router.replace("/login?verified=1");
        }
      } catch {
        if (isMounted) {
          router.replace("/login?verifyInvalid=1");
        }
      }
    };

    verifyEmail();

    return () => {
      isMounted = false;
    };
  }, [decodedVerifyUrl, router]);

  return null;
};

export default VerifyEmailClient;
