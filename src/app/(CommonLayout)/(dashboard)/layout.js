"use client";
import { useState } from "react";
import Link from "next/link";

const navigationSections = [
  {
    title: "Manage My Account",
    links: [
      { label: "My Profile", href: "/admin/my-profile", color: "text-red-500" },
      {
        label: "Address Book",
        href: "/admin/address-book",
        color: "text-gray-400",
      },
      {
        label: "My Payment Options",
        href: "/admin/payment-options",
        color: "text-gray-400",
      },
    ],
  },
  {
    title: "My Orders",
    links: [
      {
        label: "My Returns",
        href: "/admin/my-returns",
        color: "text-gray-400",
      },
      {
        label: "My Cancellations",
        href: "/admin/my-cancellations",
        color: "text-gray-400",
      },
    ],
  },
  {
    title: "My WishList",
    links: [
      // ...
    ],
  },
];

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col ">
      <div className="md:hidden p-4 flex justify-between items-center bg-white shadow">
        <div className="font-bold">Dashboard</div>
        <button
          className="p-2 border rounded text-gray-600"
          onClick={() => setSidebarOpen(!sidebarOpen)}>
          {/* Hamburger Icon */}
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`
            bg-white w-64 p-6 border-r transform top-0 left-0 h-full
            md:relative md:translate-x-0 md:shadow-none shadow-md
            transition-transform duration-200 ease-in-out
            ${
              sidebarOpen
                ? "translate-x-0 absolute z-10"
                : "-translate-x-full absolute"
            }
          `}>
          <div className="space-y-6">
            {navigationSections.map((section, idx) => (
              <div key={idx}>
                <h2 className="font-bold mb-2">{section.title}</h2>
                <ul className="space-y-1">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link href={link.href} className={link.color}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}

        <main className="flex-1 p-6" onClick={() => setSidebarOpen(false)}>
          {children}
        </main>
      </div>
    </div>
  );
}
