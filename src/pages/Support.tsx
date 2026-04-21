import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

// Images copied from Measure_tech assets (relative to workspace sibling)
import img1 from "@/assets/support/image1.jpg";
import img2 from "@/assets/support/image2.jpg";
import img3 from "@/assets/support/image3.jpg";
import video1 from "@/assets/home/first.mp4";

const supportImages = [img1, img2, img3];

export const Support = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setCurrent((p) => (p + 1) % supportImages.length),
      5000
    );
    return () => clearInterval(t);
  }, []);

  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
                Support
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Our Support
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                We provide calibration, repair and on-site maintenance services
                backed by traceable documentation and experienced engineers. Use
                the form to request service or reach us directly.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div className="text-sm text-muted-foreground">
                      8-42/8, Sri Sai Nagar Colony, Balapur, Hyderabad, Telangana, 500005
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div className="text-sm text-muted-foreground">
                      measuretechllp@gmail.com
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div className="text-sm text-muted-foreground">
                      +91-9505919927
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Mon - Sat: 9:00 AM – 6:00 PM
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button variant="glow" asChild>
                  <a href="mailto:support@measuretech.com">Email Support</a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-border h-80 bg-secondary/20 flex items-center justify-center">
                <img
                  src={supportImages[current]}
                  alt="Support visual"
                  className="w-full h-full object-cover"
                />
              </div>
              <video
                src={video1}
                controls
                className="w-full h-48 object-cover mt-6 rounded-xl"
              />
            </div>
          </div>

          {/* Service request form simplified to fit theme */}
          <div className="mt-12 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="glass rounded-2xl p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Request Service
                </h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input placeholder="Full name" className="input" />
                  <input placeholder="Company" className="input" />
                  <input placeholder="Phone" className="input" />
                  <input placeholder="Email" className="input" />
                  <input
                    placeholder="Equipment model"
                    className="input md:col-span-2"
                  />
                  <textarea
                    placeholder="Additional details"
                    rows={4}
                    className="input md:col-span-2"
                  />
                  <div className="md:col-span-2">
                    <Button type="submit">Submit Request</Button>
                  </div>
                </form>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-semibold mb-2">On-site & Bench Service</h3>
                <p className="text-sm text-muted-foreground">
                  Choose bench calibration or onsite support — we provide both
                  with traceable reports.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-semibold mb-2">Request Via WhatsApp</h3>
                <p className="text-sm text-muted-foreground">
                  Prefer WhatsApp? Click to open a prefilled chat.
                </p>
                <div className="mt-3">
                  <a
                    className="inline-flex items-center gap-2 text-primary"
                    href="https://wa.me/919490267666"
                  >
                    Open WhatsApp
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Support;
