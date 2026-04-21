import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Award, Users, Globe, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import aboutFactory from "@/assets/about-factory.jpg";
import whatsappImg from "@/assets/WhatsApp Image 2025-12-23 at 8.55.00 PM.jpeg";

/* — Slideshow — */
const Slideshow = ({ images, className = "" }: { images: string[]; className?: string }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 5000);
    return () => clearInterval(id);
  }, [images]);

  return (
    <div className={`relative rounded-2xl overflow-hidden border border-border/50 ${className}`}>
      {images.map((src, i) => (
        <motion.img
          key={src}
          src={src}
          alt={`about-slide-${i}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 0.9 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ))}
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === index ? "bg-primary w-5 h-2" : "bg-white/40 w-2 h-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const values = [
  { icon: Target, title: "Precision", description: "Every instrument calibrated to micron-level accuracy using industry-standard references." },
  { icon: Award, title: "Quality", description: "Uncompromising quality standards in every service we deliver — documented and traceable." },
  { icon: Users, title: "Partnership", description: "Long-term client relationships built on trust, transparency, and consistent delivery." },
  { icon: Globe, title: "Sustainability", description: "Environmentally responsible practices that prioritize safety and resource efficiency." },
];

const whyUs = [
  "Experienced team of certified calibration engineers",
  "Wide range of instruments covered — electrical, mechanical, process",
  "Fast turnaround — lab & on-site services available",
  "Detailed calibration certificates with traceable references",
  "Competitive pricing with flexible service plans",
  "24-hour response guarantee for urgent requirements",
];

const About = () => {
  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 bg-radial-gradient opacity-60" />
        {/* Top gradient bar */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="badge-primary mb-5 w-fit">About MeasureTech</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-5 leading-tight">
                Precision &amp; Reliability{" "}
                <span className="text-gradient">Since 2025</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                MeasureTech is a Hyderabad-based precision calibration and industrial
                maintenance company. We help organizations across critical sectors
                maintain accuracy, safety, and uninterrupted operations through expert
                calibration, instrument repair, and engineering services.
              </p>
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold text-white"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Slideshow */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <Slideshow images={[whatsappImg, aboutFactory]} className="h-[420px]" />
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-5 -left-5 glass rounded-2xl p-4 border border-primary/20 shadow-xl"
              >
                <div className="text-3xl font-display font-bold text-primary">ISO</div>
                <div className="text-xs text-muted-foreground mt-0.5">Traceable Standards</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-20 bg-card/30 relative">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                content:
                  "To provide industry-leading calibration, maintenance, and engineering services that help organizations maintain accuracy, safety, and uptime — with measurable, documented results every time.",
                accent: "bg-primary/10 border-primary/20",
                iconColor: "text-primary",
              },
              {
                icon: Eye,
                title: "Our Vision",
                content:
                  "To be the most trusted precision measurement and calibration partner across India — enabling every client to operate with complete confidence in their instruments and processes.",
                accent: "bg-accent/10 border-accent/20",
                iconColor: "text-accent",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative bg-card border border-border rounded-2xl p-8 card-hover gradient-border"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl border flex items-center justify-center mb-6 ${item.accent}`}>
                    <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">{item.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-xl mx-auto mb-14"
          >
            <div className="badge-primary mb-4 w-fit mx-auto">Our Core Values</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              What <span className="text-gradient">Drives Us</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card border border-border rounded-2xl p-7 text-center card-hover gradient-border"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-24 bg-card/30 relative">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden border border-border/50">
                <img
                  src={aboutFactory}
                  alt="MeasureTech calibration lab"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent rounded-2xl" />
              </div>
              {/* Stat chip */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-5 -right-5 glass rounded-2xl p-5 border border-primary/20"
              >
                <div className="text-3xl font-display font-bold text-gradient mb-0.5">500+</div>
                <div className="text-xs text-muted-foreground">Instruments Calibrated</div>
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="badge-primary mb-5 w-fit">Why Choose MeasureTech</div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-5 leading-tight">
                Experience the Difference of{" "}
                <span className="text-gradient">True Precision</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-7">
                When accuracy matters, you need a partner you can trust. MeasureTech
                combines technical expertise with a commitment to customer satisfaction
                that sets us apart from the competition.
              </p>

              <ul className="space-y-3">
                {whyUs.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-start gap-3 text-sm text-foreground/85"
                  >
                    <CheckCircle className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold text-white"
                >
                  Work With Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
