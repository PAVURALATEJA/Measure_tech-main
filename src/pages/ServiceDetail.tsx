import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

/**
 * IMPORTANT:
 * Ideally, move this services array into a shared file like:
 * src/data/services.ts
 * and import it both here and in Services.tsx
 *
 * For now, paste the SAME services array here
 * (must match slug, image, title, description, features)
 */

import svcNetwork from "@/assets/services/Network Analyzer.jpg";
import svcPowerMeter from "@/assets/services/Power Meter.jpg";
import svcComponent from "@/assets/services/COMPONENT LEVEL.jpg";
import svcDcSupply from "@/assets/services/DC Power Supply.jpg";
import svcSpectrum from "@/assets/services/Spectrum Analyzer.png";
import svcConnectors from "@/assets/services/CONNECTORS.jpg";

const services = [
  {
    slug: "electronic-design-engineering",
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

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <Layout>
        <section className="py-32 text-center">
          <h2 className="text-3xl font-bold mb-4">Service not found</h2>
          <Button asChild>
            <Link to="/services">Back to Services</Link>
          </Button>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Back link */}
          <Link
            to="/services"
            className="inline-flex items-center text-sm text-muted-foreground mb-6 hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden mb-10 border border-border">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[420px] object-cover"
            />
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            {service.title}
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            {service.description}
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-4 mb-14">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="xl" variant="glow" asChild>
              <Link to="/contact">
                Request This Service
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>

            <Button size="xl" variant="heroOutline" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
