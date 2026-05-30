import Link from "next/link";
import { Globe, ExternalLink, MessageCircle, Terminal, Heart, ArrowUpRight } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/constants";

const socialLinks = [
  { name: "GitHub", href: siteConfig.links.github, icon: ExternalLink },
  { name: "LinkedIn", href: siteConfig.links.linkedin, icon: Globe },
  { name: "Twitter", href: siteConfig.links.twitter, icon: MessageCircle },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      {/* Gradient top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                <Terminal className="h-4 w-4 text-primary" />
              </div>
              <span className="font-mono text-sm font-semibold">
                <span className="text-primary">TF</span>
                <span className="text-muted-foreground">.</span>
                <span className="text-foreground">dev</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building at the intersection of product, engineering, cybersecurity, and fintech.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Connect
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted/50 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Built with <Heart className="h-3 w-3 text-destructive" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
}
