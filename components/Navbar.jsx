"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Research", href: "/research" },
    { name: "Insights", href: "/insights" },
    { name: "Simulator", href: "/simulator" },
    { name: "Awareness", href: "/awareness" },
  ];

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#E7DED3] bg-[#FFFDF9]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-2.5"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#8F1D2C] text-sm font-bold text-white shadow-sm transition duration-300 group-hover:scale-105 group-hover:bg-[#641824]">
            F
          </div>

          <div>
            <span className="text-lg font-bold tracking-tight text-[#292524]">
              Feed<span className="text-[#8F1D2C]">Lens</span>
            </span>

            <p className="hidden text-[9px] font-medium uppercase tracking-[0.18em] text-[#78716C] sm:block">
              Research & Insights
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`group relative rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                  active
                    ? "text-[#8F1D2C]"
                    : "text-[#57534E] hover:bg-[#F7F1E8] hover:text-[#8F1D2C]"
                }`}
              >
                {link.name}

                {/* Active underline */}
                <span
                  className={`absolute bottom-0.5 left-1/2 h-[2px] -translate-x-1/2 bg-[#8F1D2C] transition-all duration-300 ${
                    active
                      ? "w-4"
                      : "w-0 group-hover:w-4"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* DESKTOP CTA */}
        <Link
          href="/insights"
          className="group hidden items-center gap-2 rounded-xl bg-[#8F1D2C] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#641824] hover:shadow-md lg:flex"
        >
          Explore Data

          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="rounded-lg p-2 text-[#292524] transition hover:bg-[#F1F1EF] lg:hidden"
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      <div
        className={`overflow-hidden border-t border-[#E7DED3] bg-[#FFFDF9] transition-all duration-300 lg:hidden ${
          isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-5 pt-3">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-[#F7F1E8] text-[#8F1D2C]"
                      : "text-[#57534E] hover:bg-[#F7F1E8] hover:text-[#8F1D2C]"
                  }`}
                >
                  {link.name}

                  <ArrowRight
                    size={14}
                    className={`transition-transform ${
                      active ? "translate-x-1" : ""
                    }`}
                  />
                </Link>
              );
            })}

            {/* MOBILE CTA */}
            <Link
              href="/insights"
              onClick={() => setIsOpen(false)}
              className="group mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#8F1D2C] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#641824]"
            >
              Explore Data

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}