import React from "react";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="h-screen grid place-items-center bg-accent-100">
      {children}
    </main>
  );
};

export default AuthLayout;
