import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    content:
      "MeasureTech has been our trusted calibration partner. Their accuracy, professionalism, and quick turnaround time have significantly improved our operational efficiency.",
    rating: 5,
    color: "from-blue-500 to-cyan-500",
  },
  {
    content:
      "We were impressed by the level of detail in their calibration reports. The team is highly knowledgeable and handles complex instruments with ease. Highly recommended!",
    rating: 5,
    color: "from-orange-500 to-amber-500",
  },
  {
    content:
      "Their on-site maintenance service was flawless. The engineers were prompt, professional, and resolved our instrument issues with minimal downtime. Exceptional service.",
    rating: 5,
    color: "from-green-500 to-teal-500",
  },
  {
    content:
      "MeasureTech consistently delivers on time and within budget. Their calibration solutions are reliable, well-documented, and compliant with all industry standards.",
    rating: 5,
    color: "from-violet-500 to-purple-500",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="badge-primary mb-4 w-fit mx-auto">Client Testimonials</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Trusted by{" "}
            <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our clients say about
            working with MeasureTech.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-2xl p-7 card-hover gradient-border"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/4 to-accent/4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10">
                {/* Quote icon */}
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-5">
                  <Quote className="w-5 h-5 text-primary" />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/85 text-base leading-relaxed mb-6 italic">
                  "{t.content}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
