import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-radial-gradient opacity-50" />

      {/* Animated blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* 404 Number */}
          <div className="text-[120px] md:text-[160px] font-display font-bold text-gradient leading-none mb-4 select-none">
            404
          </div>

          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
            Page Not Found
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="btn-primary inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold text-white"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="btn-outline-primary inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
