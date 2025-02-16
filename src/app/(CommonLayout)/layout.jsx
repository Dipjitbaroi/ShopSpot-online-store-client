// src/app/(CommonLayout)/layout.jsx
import Navbar from "@/components/UI/navbar";

export default function CommonLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
