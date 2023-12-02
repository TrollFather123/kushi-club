"use client";

import { SnackbarProvider } from "notistack";
import "./globals.scss";
import ThemeCustomization from "@/themes/index";
import React from "react";
import RootStyleRegistry from "core/emotion";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <head></head> */}
      <body>
        <RootStyleRegistry>
          <ThemeCustomization>
            <SnackbarProvider>{children}</SnackbarProvider>
          </ThemeCustomization>
        </RootStyleRegistry>
      </body>
    </html>
  );
}