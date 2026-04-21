import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import logo from "@/assets/200 X 54 - Copy.jpg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Industries", path: "/industries" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:flex items-center justify-between bg-secondary/60 border-b border-border/50 px-8 py-2 text-xs text-muted-foreground">
        <span>MeasureTech — Precision Calibration & Industrial Maintenance, Hyderabad, India</span>
        <div className="flex items-center gap-6">
          <a href="mailto:measuretechllp@gmail.com" className="hover:text-primary transition-colors">
            measuretechllp@gmail.com
          </a>
          <a href="tel:+919505919927" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Phone className="w-3 h-3" />
            +91-9505919927
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border/60 shadow-lg shadow-black/20 py-3"
            : "bg-background/70 backdrop-blur-md border-b border-border/30 py-4"
        }`}
      >
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img
                src={logo}
                alt="MeasureTech Logo"
                style={{ width: '200px', height: '54px', objectFit: 'contain', display: 'block' }}
              />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-5 py-2 text-sm font-medium transition-all duration-200 rounded-lg group ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                      location.pathname === link.path
                        ? "w-4/5 opacity-100"
                        : "w-0 opacity-0 group-hover:w-3/5 group-hover:opacity-50"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/contact"
                className="btn-primary px-6 py-2.5 rounded-xl text-sm font-semibold text-white inline-flex items-center gap-2"
              >
                Get A Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-secondary/70 transition-colors border border-border/50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="lg:hidden overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-xl"
            >
              <div className="container mx-auto px-6 py-4 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        location.pathname === link.path
                          ? "bg-primary/12 text-primary border border-primary/20"
                          : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.06 }}
                  className="pt-2"
                >
                  <Link
                    to="/contact"
                    className="btn-primary w-full px-6 py-3 rounded-xl text-sm font-semibold text-white flex items-center justify-center"
                  >
                    Get A Quote
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};
