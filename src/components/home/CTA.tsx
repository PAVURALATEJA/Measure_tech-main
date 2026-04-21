import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-radial-gradient opacity-60" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      {/* Animated ring decorations */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/2 -right-1/4 w-[700px] h-[700px] border border-primary/8 rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] border border-accent/8 rounded-full pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Card background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-card to-accent/10 rounded-3xl" />
          <div className="absolute inset-0 border border-primary/20 rounded-3xl" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

          <div className="relative z-10 px-8 md:px-16 py-16 md:py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              {/* Text */}
              <div className="text-center lg:text-left max-w-xl">
                <div className="badge-primary mb-5 w-fit mx-auto lg:mx-0">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Ready to Get Started?
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 leading-tight">
                  Need Calibration or{" "}
                  <span className="text-gradient">Maintenance Support?</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Contact our team for a free consultation, site visit, or tailored
                  quote. We respond within 24 hours.
                </p>
              </div>

              {/* Action Group */}
              <div className="flex flex-col items-center lg:items-end gap-5 shrink-0">
                {/* Primary CTA */}
                <Link
                  to="/contact"
                  id="cta-section-primary"
                  className="btn-primary inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white w-full sm:w-auto justify-center"
                >
                  Request a Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>

                {/* Secondary contact links */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+919505919927"
                    className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/12 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    +91-9505919927
                  </a>
                  <a
                    href="mailto:measuretechllp@gmail.com"
                    className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/12 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    measuretechllp@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
