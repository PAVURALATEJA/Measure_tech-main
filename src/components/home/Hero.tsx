import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Cpu, Shield, Gauge } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const highlights = [
  "ISO-Traceable Calibration",
  "Fast Turnaround Times",
  "On-Site & Lab Services",
];

export const Hero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden">

      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Industrial precision calibration background"
          className="w-full h-full object-cover object-center"
        />
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </div>

      {/* Ambient glow blobs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 py-28 md:py-36">
        <div className="max-w-3xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="badge-primary mb-6 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Trusted Calibration & Maintenance Partner
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-display font-bold text-foreground leading-[1.08] mb-6"
          >
            Precision You Can
            <br />
            <span className="text-gradient">Measure & Trust</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed"
          >
            We specialize in precision calibration, industrial maintenance, and
            engineering solutions — ensuring reliability, accuracy, and operational
            safety for your business.
          </motion.p>

          {/* Highlight checklist */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-x-6 gap-y-2 mb-10"
          >
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                {item}
              </li>
            ))}
          </motion.ul>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Link
              to="/contact"
              id="hero-cta-primary"
              className="btn-primary inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold text-white"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              id="hero-cta-secondary"
              className="btn-outline-primary inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold"
            >
              Learn About Us
            </Link>
          </motion.div>
        </div>

        {/* Floating Quick-stat Cards */}
        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-4">
          {[
            { icon: Gauge, label: "Calibration", sub: "ISO Traceable" },
            { icon: Shield, label: "Reliability", sub: "Certified Services" },
            { icon: Cpu, label: "Precision", sub: "Micron Accuracy" },
          ].map(({ icon: Icon, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
              whileHover={{ scale: 1.04, x: -4 }}
              className="glass rounded-2xl p-4 flex items-center gap-3 w-52 card-hover gradient-border"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">{label}</div>
                <div className="text-xs text-muted-foreground">{sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};
