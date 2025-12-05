"use client";

import { useState } from "react";
import Link from "next/link";
import { RiMenu5Fill } from "react-icons/ri";
import { X } from "lucide-react";
import Image from "next/image";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="lg:hidden z-50 relative"
        onClick={() => setOpen((p) => !p)}
        aria-label="Open menu"
      >
        {!open && <RiMenu5Fill className="w-6 h-6 text-[#0668E1]" />}
      </button>

      {/* Mobile menu */}
      <div
        className={`fixed z-[99999] top-0 left-0 w-full overflow-y-auto scrollbar-hidden h-screen bg-[#0668E1] text-white p-6 
          transition-transform duration-300 ease-out
          ${open ? "translate-y-0" : "-translate-y-full"} 
          lg:hidden z-40`}
      >
        <div className="flex justify-between items-center">
          <Image
            src="/Connect_EC_Logo-white.svg"
            alt="Logo"
            width={140}
            height={100}
            className="object-contain w-[250px] h-auto mt-8 mb-5"
          />

          <X
            onClick={() => setOpen((p) => !p)}
            className="w-6 h-6 text-white cursor-pointer"
          />
        </div>
        <nav className="flex flex-col gap-6 mt-12 text-lg">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/employer" onClick={() => setOpen(false)}>
            Employer
          </Link>
          <Link href="/candidates" onClick={() => setOpen(false)}>
            Candidates
          </Link>
          <Link href="/recruiters" onClick={() => setOpen(false)}>
            Recruiters
          </Link>
          <Link href="/features" onClick={() => setOpen(false)}>
            Features
          </Link>
          <Link href="/resources" onClick={() => setOpen(false)}>
            Resources
          </Link>
          <Link href="/pricing" onClick={() => setOpen(false)}>
            Pricing
          </Link>
          <Link href="/contact-us" onClick={() => setOpen(false)}>
            Contact us
          </Link>
        </nav>
      </div>
    </>
  );
}
