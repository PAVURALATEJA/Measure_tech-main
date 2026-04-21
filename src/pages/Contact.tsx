import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, CheckCircle } from "lucide-react";
import contactOffice from "@/assets/contact-office.jpg";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: ["measuretechllp@gmail.com"],
    href: "mailto:measuretechllp@gmail.com",
    color: "bg-primary/10 border-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91-9505919927"],
    href: "tel:+919505919927",
    color: "bg-accent/10 border-accent/20",
    iconColor: "text-accent",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["8-42/8, Sri Sai Nagar Colony,", "Balapur, Hyderabad – 500005"],
    href: "#map",
    color: "bg-green-500/10 border-green-500/20",
    iconColor: "text-green-400",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon – Sat: 9:00 AM – 6:00 PM", "Sunday: Closed"],
    href: null,
    color: "bg-violet-500/10 border-violet-500/20",
    iconColor: "text-violet-400",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", phone: "", subject: "", message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
              <div className="badge-primary mb-5 w-fit">Contact Us</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-5 leading-tight">
                Let's Talk About{" "}
                <span className="text-gradient">Your Needs</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Whether you need a calibration quote, want to schedule a site visit, or
                have questions about our services — our team is ready to help.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Free Consultation", "24h Response", "On-site Available"].map((tag) => (
                  <span key={tag} className="flex items-center gap-1.5 text-sm text-foreground/75">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Office image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="rounded-2xl overflow-hidden border border-border/50">
                <img
                  src={contactOffice}
                  alt="MeasureTech office"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-5 -right-5 glass rounded-2xl p-4 border border-primary/25"
              >
                <div className="text-3xl font-display font-bold text-primary">24h</div>
                <div className="text-xs text-muted-foreground mt-0.5">Response Guarantee</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Contact Info + Form ── */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Get In Touch
              </h2>
              {contactInfo.map((info, index) => {
                const Wrapper = info.href ? "a" : "div";
                const wrapperProps = info.href ? { href: info.href } : {};
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Wrapper
                      { ...wrapperProps }
                      className={`flex gap-4 p-4 rounded-xl bg-card border border-border ${info.href ? "hover:border-primary/30 hover:shadow-md hover:shadow-black/10 transition-all cursor-pointer" : ""} card-hover group`}
                    >
                      <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${info.color}`}>
                        <info.icon className={`w-5 h-5 ${info.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm mb-1">{info.title}</h3>
                        {info.details.map((d) => (
                          <p key={d} className="text-xs text-muted-foreground">{d}</p>
                        ))}
                      </div>
                    </Wrapper>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10 gradient-border relative overflow-hidden">
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-60 rounded-t-2xl" />

                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground text-sm mb-8">
                  Fill in the form and our team will get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-foreground uppercase tracking-wider">
                        Full Name *
                      </label>
                      <Input
                        id="name" name="name" value={formData.name}
                        onChange={handleChange} placeholder="John Doe" required
                        className="bg-secondary/40 border-border focus:border-primary rounded-xl"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-foreground uppercase tracking-wider">
                        Email Address *
                      </label>
                      <Input
                        id="email" name="email" type="email" value={formData.email}
                        onChange={handleChange} placeholder="you@company.com" required
                        className="bg-secondary/40 border-border focus:border-primary rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="text-xs font-semibold text-foreground uppercase tracking-wider">
                        Company Name
                      </label>
                      <Input
                        id="company" name="company" value={formData.company}
                        onChange={handleChange} placeholder="Your Company Ltd."
                        className="bg-secondary/40 border-border focus:border-primary rounded-xl"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-semibold text-foreground uppercase tracking-wider">
                        Phone Number
                      </label>
                      <Input
                        id="phone" name="phone" type="tel" value={formData.phone}
                        onChange={handleChange} placeholder="+91 XXXXX XXXXX"
                        className="bg-secondary/40 border-border focus:border-primary rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-semibold text-foreground uppercase tracking-wider">
                      Subject *
                    </label>
                    <Input
                      id="subject" name="subject" value={formData.subject}
                      onChange={handleChange} placeholder="e.g. Calibration Quote Request" required
                      className="bg-secondary/40 border-border focus:border-primary rounded-xl"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-foreground uppercase tracking-wider">
                      Message *
                    </label>
                    <Textarea
                      id="message" name="message" value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your instruments, service requirements, or any questions…"
                      rows={5} required
                      className="bg-secondary/40 border-border focus:border-primary resize-none rounded-xl"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full py-3.5 rounded-xl text-base font-semibold text-white flex items-center justify-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Send className="w-5 h-5" />
                        </motion.div>
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section id="map" className="py-16 bg-card/30 relative">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <h2 className="font-display text-xl font-bold text-foreground">Our Location</h2>
            </div>
            <div className="relative w-full h-[420px] rounded-2xl overflow-hidden border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d375.9923811306697!2d78.51158788697164!3d17.310630238205533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s8-42%2F8%2C%20Sri%20Sai%20Nagar%20Colony%2C%20balapur%2C%20Hyderabad%2C%20Telangana%2C%20500005!5e0!3m2!1sen!2sus!4v1766549441692!5m2!1sen!2sus"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                title="MeasureTech Location"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
