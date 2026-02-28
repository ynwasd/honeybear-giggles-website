import { Link } from "react-router-dom";
import { Instagram, Youtube, Twitter, Mail } from "lucide-react";
import { BRAND } from "@/data/content";

const FOOTER_LINKS = [
  { label: "Tour Dates", path: "/tour" },
  { label: "Media", path: "/media" },
  { label: "Merch", path: "/merch" },
  { label: "Booking", path: "/booking" },
];

const SOCIAL_LINKS = [
  { icon: Instagram, url: BRAND.social.instagram, label: "Instagram" },
  { icon: Youtube, url: BRAND.social.youtube, label: "YouTube" },
  { icon: Twitter, url: BRAND.social.twitter, label: "X / Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container-tight section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl text-primary tracking-wider mb-3">HONEYBEAR GIGGLES</h3>
            <p className="text-accent-foreground/60 text-sm leading-relaxed">
              {BRAND.bioShort}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg tracking-wider text-accent-foreground/80 mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-accent-foreground/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div>
            <h4 className="font-display text-lg tracking-wider text-accent-foreground/80 mb-4">STAY IN THE LOOP</h4>
            <form className="flex gap-2 mb-6" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-accent-foreground/5 border border-accent-foreground/10 rounded-md px-3 py-2 text-sm text-accent-foreground placeholder:text-accent-foreground/30 focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-display tracking-wider text-sm hover:bg-primary/90 transition-colors"
              >
                JOIN
              </button>
            </form>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-foreground/50 hover:text-primary transition-colors"
                  aria-label={s.label}
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-accent-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-accent-foreground/40">
            © {new Date().getFullYear()} Honeybear Giggles. All rights reserved.
          </p>
          <Link
            to="/booking"
            className="text-xs text-primary hover:text-primary/80 font-display tracking-wider transition-colors"
          >
            <Mail className="w-3.5 h-3.5 inline mr-1" />
            BOOKING INQUIRIES
          </Link>
        </div>
      </div>
    </footer>
  );
}
