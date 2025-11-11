import type { Metadata } from "next";
import Navbar from "@/shared/components/navbar";

export const metadata: Metadata = {
  title: "Senandika",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}

    </>
  );
}
