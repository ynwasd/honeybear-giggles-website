import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Ticket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GetTicketsModal } from "@/components/GetTicketsModal";
import logo from "@/assets/honeybear-logo.jpg";

const NAV_LINKS = [
  { label: "Tour", path: "/tour" },
  { label: "Media", path: "/media" },
  { label: "Merch", path: "/merch" },
  { label: "Booking", path: "/booking" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ticketsOpen, setTicketsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-accent/95 backdrop-blur-md border-b border-primary/10">
        <div className="container-tight flex items-center justify-between h-16 px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Honeybear Giggles" className="h-10 w-10 rounded-full object-cover" />
            <span className="font-display text-xl text-primary-foreground tracking-wide hidden sm:block">
              HONEYBEAR GIGGLES
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-display text-sm tracking-widest uppercase transition-colors hover:text-primary ${
                  location.pathname === link.path ? "text-primary" : "text-accent-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              onClick={() => setTicketsOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-display tracking-wider text-sm"
            >
              <Ticket className="w-4 h-4 mr-1.5" />
              GET INFO/TICKETS
            </Button>
            <button
              className="md:hidden text-accent-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-accent border-t border-primary/10 overflow-hidden"
            >
              <nav className="flex flex-col p-4 gap-3">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`font-display text-lg tracking-widest uppercase py-2 transition-colors hover:text-primary ${
                      location.pathname === link.path ? "text-primary" : "text-accent-foreground/80"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <GetTicketsModal open={ticketsOpen} onOpenChange={setTicketsOpen} />
    </>
  );
}
