"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const showBrand = pathname !== "/verify-email";

  return (
    <div className="flex flex-col bg-muted min-h-svh justify-center items-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-2">
        {showBrand && (
          <Link
            href={"/"}
            className="flex items-center gap-0 self-center font-medium"
          >
            <Image src="/logo2.svg" alt="NodeFlow" width={36} height={36} />
            <span>NodeFlow</span>
          </Link>
        )}
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
