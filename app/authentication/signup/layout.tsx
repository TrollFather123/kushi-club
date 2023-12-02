import Wrapper from "@/layout/wrapper/Wrapper";
import React from "react";

export const metadata = {
  title: "signup",
  description: "Generated by create next app"
};

export default function SignUpLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Wrapper>{children}</Wrapper>
    </html>
  );
}
