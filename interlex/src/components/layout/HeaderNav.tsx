"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import type { ChromeStrings } from "@/lib/i18n";

type Props = { t: ChromeStrings["nav"] };

const linkClass = (active: boolean) =>
  active
    ? "text-[#755b00] border-b-2 border-[#755b00] pb-1 font-medium"
    : "text-[#191c1e] font-medium hover:text-[#755b00] transition-colors";

export default function HeaderNav({ t }: Props) {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  const items: { href: string; label: string }[] = [
    { href: "/", label: t.home },
    { href: "/services", label: t.services },
    { href: "/projects", label: t.projects },
    { href: "/kz", label: t.kazakhstan },
    { href: "/ge", label: t.georgia },
    { href: "/services/investor-gr", label: t.investors },
    { href: "/packages", label: t.pricing },
    { href: "/contacts", label: t.contact },
  ];

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Десктоп: горизонтальное меню без выпадающих списков */}
      <nav className="hidden lg:flex items-center gap-4 xl:gap-7 text-sm" aria-label="Main">
        {items
          .filter(({ href }) => href !== "/contacts")
          .map(({ href, label }) => {
            const active =
              href === "/"
                ? pathname === "/"
                : pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link key={href} href={href} className={`${linkClass(active)} transition-colors duration-300`}>
                {label}
              </Link>
            );
          })}
      </nav>

      {/* Мобильная / планшетная версия: кнопка + выпадающая панель */}
      <div className="relative lg:hidden">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-main-menu"
          aria-label="Toggle menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded border border-primary/12 bg-white text-primary shadow-sm"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>

        {open ? (
          <>
            <button
              type="button"
              tabIndex={-1}
              aria-hidden
              className="fixed inset-x-0 bottom-0 top-[4.75rem] z-40 bg-[#0f2044]/20"
              onClick={() => setOpen(false)}
            />
            <div
              id="mobile-main-menu"
              role="navigation"
              aria-label="Mobile main"
              className="absolute right-0 top-[calc(100%+10px)] z-50 w-[min(calc(100vw-2rem),18rem)] rounded-lg border border-primary/10 bg-white py-2 shadow-xl"
            >
              <nav className="flex flex-col">
                {items.map(({ href, label }) => {
                  const active =
                    href === "/"
                      ? pathname === "/"
                      : pathname === href || pathname.startsWith(`${href}/`);
                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`px-4 py-3 text-sm ${active ? "bg-[#f6e8b6]/40 font-medium text-[#755b00]" : "text-[#191c1e] hover:bg-[#f2f4f7]"}`}
                    >
                      {label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
