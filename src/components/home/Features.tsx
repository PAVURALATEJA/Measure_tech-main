import { motion } from "framer-motion";
import { CheckCircle2, Cpu, Shield, Gauge, Wrench, Radio, GitBranch } from "lucide-react";

const features = [
  {
    icon: Gauge,
    title: "Precision Calibration",
    description:
      "Traceable, ISO-compliant calibration of electrical, mechanical, and process instruments — ensuring measurement accuracy you can rely on.",
    highlights: ["NABL Standards", "Lab & On-site"],
  },
  {
    icon: Wrench,
    title: "Industrial Maintenance",
    description:
      "Proactive and corrective maintenance programs designed to maximize equipment uptime and extend operational lifespan.",
    highlights: ["Preventive Plans", "Emergency Response"],
  },
  {
    icon: Cpu,
    title: "Instrument Repair",
    description:
      "Expert diagnosis and repair of precision instruments across multiple disciplines — minimizing downtime for your operations.",
    highlights: ["Multi-brand Expertise", "Fast Turnaround"],
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Robust QA processes with full documentation, traceability records, and compliance reporting for audits and certifications.",
    highlights: ["Full Documentation", "Audit Ready"],
  },
  {
    icon: Radio,
    title: "Performance Monitoring",
    description:
      "Continuous instrument health monitoring and periodic verification to catch drift early and maintain measurement integrity.",
    highlights: ["Trend Analysis", "Early Detection"],
  },
  {
    icon: GitBranch,
    title: "Engineering Solutions",
    description:
      "Custom engineering and integration services — from measurement system design to complete instrumentation project management.",
    highlights: ["Custom Projects", "System Integration"],
  },
];

export const Features = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-25" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="badge-primary mb-4 w-fit">Our Core Services</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 leading-tight">
            Comprehensive Solutions for{" "}
            <span className="text-gradient">Industrial Precision</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From calibration labs to on-site maintenance, we deliver end-to-end
            measurement and reliability services tailored to your industry needs.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-2xl p-7 card-hover overflow-hidden gradient-border"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="feature-icon mb-5 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {feature.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {feature.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/15"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
