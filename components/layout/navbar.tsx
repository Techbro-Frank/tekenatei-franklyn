"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { useNavStore } from "@/store/nav-store";

const navItems = [
  { label: "ABOUT", href: "/about" },
  { label: "MY JOURNEY", href: "/journey" },
  { label: "PORTFOLIOS", href: "/portfolios" },
  { label: "BLOG", href: "/blog" },
  { label: "LOGIN", href: "/login" },
];

export function Navbar() {
  const pathname = usePathname();
  const { isAtTop } = useScrollDirection();
  const { isMobileMenuOpen, setMobileMenuOpen } = useNavStore();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname, setMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isAtTop ? "bg-transparent" : "glass-strong"
        )}
      >
        <nav className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center">
                <span className="font-bold text-xl italic" style={{ fontFamily: "serif" }}>
                  <span className="text-primary">F</span>
                  <span className="text-cyan-400">T</span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-wider text-foreground">
                  TEKENATEI FRANKLYN
                </span>
                <span className="text-[10px] font-semibold tracking-[0.2em] text-cyan-400">
                  DIGITAL LEADER
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative text-xs font-semibold tracking-[0.15em] transition-colors",
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {pathname === item.href && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right Side */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/contact"
                className="px-5 py-2 text-[11px] font-semibold tracking-[0.15em] rounded border border-primary/40 text-primary hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,180,255,0.15)]"
              >
                LET&apos;S CONNECT
              </Link>
              <button className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Settings">
                <Settings className="h-4 w-4" />
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-md border border-border bg-muted/50 hover:bg-muted transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 top-16 z-40 glass-strong md:hidden"
        >
          <nav className="flex flex-col gap-1 p-4">
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-lg text-sm font-medium tracking-wider transition-colors",
                    pathname === item.href
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 mx-4 px-5 py-3 text-center text-sm font-semibold tracking-wider rounded border border-primary/40 text-primary hover:bg-primary/10 transition-all"
            >
              LET&apos;S CONNECT
            </Link>
          </nav>
        </motion.div>
      )}
    </>
  );
}
