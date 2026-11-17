"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { asset } from "@/data/site";
import styles from "./Header.module.css";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo} aria-label={`${profile.nameAscii} – back to top`}>
          <span aria-hidden="true">TV</span>
        </a>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
          <span className={styles.bars} aria-hidden="true" data-open={open} />
        </button>

        <nav id="primary-nav" aria-label="Primary" className={styles.nav} data-open={open}>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a className={styles.cv} href={asset(profile.cvPath)} download>
                Download CV
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
