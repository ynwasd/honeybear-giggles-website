import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Youtube, Twitter, Mail } from "lucide-react";
import { BRAND } from "@/data/content";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

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
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setError("Newsletter signup is not configured.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "Honeybear New Email List Member",
          replyto: email,
          email,
          message: `New email list signup: ${email}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setEmail("");
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to sign up. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

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
            <h4 className="font-display text-lg tracking-wider text-accent-foreground/80 mb-4">DONT MISS THE NEXT SHOW</h4>
            {submitted ? (
              <p className="text-sm text-primary mb-6">Thanks! You're on the list.</p>
            ) : (
              <form className="flex flex-col gap-2 mb-6" onSubmit={handleNewsletterSubmit}>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-accent-foreground/5 border border-accent-foreground/10 rounded-md px-3 py-2 text-sm text-accent-foreground placeholder:text-accent-foreground/30 focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-display tracking-wider text-sm hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? "..." : "Notify Me"}
                  </button>
                </div>
                {error && <p className="text-xs text-destructive">{error}</p>}
              </form>
            )}
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
