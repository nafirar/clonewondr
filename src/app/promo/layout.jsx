import Navbar from "@/components/Navbar";
import { Children } from "react";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
