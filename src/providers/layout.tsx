import React, { ReactNode } from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
