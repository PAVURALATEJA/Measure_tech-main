import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Factory, Plane, Wifi, Zap, Train, Cog } from "lucide-react";

const industries = [
  {
    icon: Factory,
    name: "Manufacturing & Automation",
    description: "Calibration and maintenance for automated production lines, PLCs, and process control systems.",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: Plane,
    name: "Aviation, Space & Defence",
    description: "Aerospace-grade instrument calibration and verification meeting stringent safety standards.",
    color: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/10 border-orange-500/20",
  },
  {
    icon: Cog,
    name: "IT Hardware",
    description: "Hardware verification, lifecycle support and precision maintenance for IT infrastructure.",
    color: "from-green-500/20 to-teal-500/20",
    iconColor: "text-green-400",
    iconBg: "bg-green-500/10 border-green-500/20",
  },
  {
    icon: Wifi,
    name: "Telecom",
    description: "Telecom instrument calibration, field testing, and precision measurement for network infrastructure.",
    color: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10 border-violet-500/20",
  },
  {
    icon: Train,
    name: "Railways",
    description: "Railway electronics, safety instrumentation, and calibration for track and signalling systems.",
    color: "from-rose-500/20 to-pink-500/20",
    iconColor: "text-rose-400",
    iconBg: "bg-rose-500/10 border-rose-500/20",
  },
  {
    icon: Zap,
    name: "IoT & Smart Systems",
    description: "Calibration and testing of connected sensors, IoT devices, and smart automation ecosystems.",
    color: "from-yellow-500/20 to-orange-500/20",
    iconColor: "text-yellow-400",
    iconBg: "bg-yellow-500/10 border-yellow-500/20",
  },
];

export const Industries = () => {
  return (
    <section className="py-28 bg-card/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="badge-primary mb-4 w-fit mx-auto">Industries We Serve</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 leading-tight">
            Supporting <span className="text-gradient">Critical Sectors</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Trusted calibration and maintenance expertise across diverse industries —
            keeping your operations accurate and compliant.
          </p>
        </motion.div>

        {/* Industry Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative p-7 rounded-2xl bg-card border border-border overflow-hidden cursor-pointer transition-all duration-300 hover:border-border/80 hover:shadow-xl hover:shadow-black/20"
            >
              {/* Gradient hover bg */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${industry.iconBg}`}>
                  <industry.icon className={`w-6 h-6 ${industry.iconColor}`} />
                </div>

                {/* Name */}
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {industry.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {industry.description}
                </p>

                {/* Link */}
                <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-200">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/industries"
            className="btn-outline-primary inline-flex items-center gap-2.5 px-7 py-3 rounded-xl text-sm font-semibold"
          >
            View All Industries
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
