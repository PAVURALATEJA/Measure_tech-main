import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Cpu,
  Settings,
  Wrench,
  Package,
  RefreshCw,
  BookOpen,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

import servicesElectronics from "@/assets/services-electronics.jpg";
import svcNetwork from "@/assets/services/Network Analyzer.jpg";
import svcPowerMeter from "@/assets/services/Power Meter.jpg";
import svcComponent from "@/assets/services/COMPONENT LEVEL.jpg";
import svcDcSupply from "@/assets/services/DC Power Supply.jpg";
import svcSpectrum from "@/assets/services/Spectrum Analyzer.png";
import svcConnectors from "@/assets/services/CONNECTORS.jpg";

const services = [
  {
    slug: "electronic-design-engineering",
    icon: Cpu,
    title: "Electronic Design & Engineering",
    description:
      "From concept to production-ready designs, our engineering team delivers innovative electronic solutions tailored to your specifications.",
    image: svcNetwork,
    features: [
      "Circuit design & simulation",
      "PCB layout & optimization",
      "Firmware development",
      "Prototype development",
      "Design for manufacturability",
    ],
  },
  {
    slug: "system-integration",
    icon: Settings,
    title: "System Integration",
    description:
      "Seamless integration of electronic systems with your existing infrastructure, ensuring optimal performance and reliability.",
    image: svcPowerMeter,
    features: [
      "Hardware-software integration",
      "Legacy system modernization",
      "IoT connectivity solutions",
      "SCADA integration",
      "Custom interface development",
    ],
  },
  {
    slug: "manufacturing-assembly",
    icon: Package,
    title: "Manufacturing & Assembly",
    description:
      "State-of-the-art manufacturing facilities equipped for high-precision electronic component production and assembly.",
    image: svcComponent,
    features: [
      "SMT & through-hole assembly",
      "Box build assembly",
      "Quality inspection & testing",
      "Conformal coating",
      "Volume production",
    ],
  },
  {
    slug: "maintenance-services",
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Comprehensive maintenance services to keep your electronic systems operating at peak efficiency throughout their lifecycle.",
    image: svcDcSupply,
    features: [
      "Preventive maintenance",
      "Emergency repairs",
      "Performance optimization",
      "System upgrades",
      "Remote monitoring",
    ],
  },
  {
    slug: "repair-refurbishment",
    icon: RefreshCw,
    title: "Repair & Refurbishment",
    description:
      "Expert repair services that extend the life of your electronic equipment, reducing costs and minimizing downtime.",
    image: svcSpectrum,
    features: [
      "Component-level repair",
      "Board refurbishment",
      "Obsolete parts replacement",
      "Failure analysis",
      "Warranty extensions",
    ],
  },
  {
    slug: "consulting-training",
    icon: BookOpen,
    title: "Consulting & Training",
    description:
      "Strategic consulting and hands-on training to help your team maximize the value of your electronic investments.",
    image: svcConnectors,
    features: [
      "Technology assessment",
      "Process optimization",
      "Staff training programs",
      "Documentation services",
      "Compliance guidance",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-radial-gradient" />

        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
                Our Services
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Comprehensive Electronic <br />
                <span className="text-gradient">Solutions & Services</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive calibration, repair, and lifecycle solutions designed
                to keep your measurement instruments accurate and compliant.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="rounded-2xl overflow-hidden border border-border">
                <img
                  src={servicesElectronics}
                  alt="Electronic services"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group rounded-2xl bg-card border border-border hover:border-primary/30 transition-all overflow-hidden h-full"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all">
                      <span className="text-sm font-semibold text-white flex items-center">
                        View Service <ArrowRight className="w-4 h-4 ml-2" />
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>

                    <h3 className="font-display text-2xl font-bold mb-4">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <Button variant="glow" size="xl" asChild>
            <Link to="/contact">
              Request a Quote <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
