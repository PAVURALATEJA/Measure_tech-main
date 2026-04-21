import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Factory, Plane, Cog, Wifi, Train, Zap, Ship, Cpu } from 'lucide-react';
import industryAutomation from '@/assets/industry-automation.jpg';

const industries = [
  {
    icon: Factory,
    name: 'Manufacturing & Automation',
    description: 'Comprehensive calibration and maintenance for automated production lines, PLCs, pressure transmitters, flow meters, and process control systems.',
    features: ['PLC & SCADA Calibration', 'Flow & Pressure Instruments', 'Temperature Sensors', 'Production Line Support'],
    gradient: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10 border-blue-500/25',
  },
  {
    icon: Plane,
    name: 'Aviation, Space & Defence',
    description: 'Aerospace-grade instrument verification and calibration meeting the strictest safety and compliance standards for avionic and defence systems.',
    features: ['Avionics Calibration', 'Navigation Instruments', 'RF & Microwave Equipment', 'Pressure Standards'],
    gradient: 'from-orange-500/20 to-amber-500/20',
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/10 border-orange-500/25',
  },
  {
    icon: Cog,
    name: 'IT Hardware',
    description: 'Precision measurement, hardware verification, lifecycle support and maintenance services for IT and electronics infrastructure.',
    features: ['Hardware Verification', 'Power Quality Testing', 'EMI/EMC Measurement', 'Lifecycle Support'],
    gradient: 'from-green-500/20 to-teal-500/20',
    iconColor: 'text-green-400',
    iconBg: 'bg-green-500/10 border-green-500/25',
  },
  {
    icon: Wifi,
    name: 'Telecom',
    description: 'Telecom-specific instrument calibration, field service testing, and precision measurement for network equipment and infrastructure.',
    features: ['RF Signal Calibration', 'Network Test Instruments', 'Optical Fiber Tools', 'Field Maintenance'],
    gradient: 'from-violet-500/20 to-purple-500/20',
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/10 border-violet-500/25',
  },
  {
    icon: Train,
    name: 'Railways',
    description: 'Specialized calibration for railway electronics, signalling instruments, and safety-critical measurement systems for track infrastructure.',
    features: ['Signalling Systems', 'Track Geometry Tools', 'Traction Electronics', 'Safety Instruments'],
    gradient: 'from-rose-500/20 to-pink-500/20',
    iconColor: 'text-rose-400',
    iconBg: 'bg-rose-500/10 border-rose-500/25',
  },
  {
    icon: Zap,
    name: 'IoT & Smart Systems',
    description: 'Calibration and testing of IoT sensors, connected devices, and smart automation ecosystems for reliable data and operational accuracy.',
    features: ['Sensor Calibration', 'Smart Meter Testing', 'SCADA Systems', 'Edge Device Maintenance'],
    gradient: 'from-yellow-500/20 to-orange-500/20',
    iconColor: 'text-yellow-400',
    iconBg: 'bg-yellow-500/10 border-yellow-500/25',
  },
  {
    icon: Ship,
    name: 'Marine & Offshore',
    description: 'Rugged calibration solutions for marine navigation, offshore platform instrumentation, and harsh environment measurement systems.',
    features: ['Navigation Instruments', 'Offshore Safety Gauges', 'Engine Controls', 'Marine Communication'],
    gradient: 'from-cyan-500/20 to-blue-500/20',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10 border-cyan-500/25',
  },
  {
    icon: Cpu,
    name: 'Research & Laboratories',
    description: 'High-accuracy calibration for R&D labs, quality control departments, and scientific measurement instruments requiring strict traceability.',
    features: ['Lab Instrument Calibration', 'Reference Standards', 'Uncertainty Analysis', 'NABL Compliance'],
    gradient: 'from-indigo-500/20 to-violet-500/20',
    iconColor: 'text-indigo-400',
    iconBg: 'bg-indigo-500/10 border-indigo-500/25',
  },
];

const Industries = () => {
  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 bg-radial-gradient opacity-50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="badge-primary mb-5 w-fit">Industries We Serve</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-5 leading-tight">
                Calibration Solutions for{' '}
                <span className="text-gradient">Every Sector</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                From factory floors to high-altitude aerospace labs, MeasureTech delivers
                precision calibration and maintenance expertise across the full spectrum of
                critical industries.
              </p>
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold text-white"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="rounded-2xl overflow-hidden border border-border/50">
                <img
                  src={industryAutomation}
                  alt="Industrial automation and calibration"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-5 -left-5 glass rounded-2xl p-4 border border-primary/25"
              >
                <div className="text-3xl font-display font-bold text-primary">8+</div>
                <div className="text-xs text-muted-foreground mt-0.5">Industry Sectors</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Industry Cards ── */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-7">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                className="group relative rounded-2xl bg-card border border-border overflow-hidden card-hover gradient-border"
              >
                {/* Gradient bg on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10 p-7">
                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl border flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${industry.iconBg}`}>
                      <industry.icon className={`w-7 h-7 ${industry.iconColor}`} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-xl font-bold text-foreground mb-2">
                        {industry.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                        {industry.description}
                      </p>

                      {/* Feature list */}
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-5">
                        {industry.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-xs text-foreground/80">
                            <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-200"
                      >
                        Get Solutions
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-card/30 relative">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="badge-primary mb-5 w-fit mx-auto">Don't see your sector?</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              We Work With{' '}
              <span className="text-gradient">All Industries</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contact us to discuss your specific calibration or maintenance requirements.
              Our experts will design a solution tailored to your operations.
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white"
            >
              Discuss Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
