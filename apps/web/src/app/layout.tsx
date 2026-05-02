import React from "react";

export const metadata = {
  title: "Dignity Institutional",
  description: "Dignity institutional platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
