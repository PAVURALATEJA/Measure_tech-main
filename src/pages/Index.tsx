import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/home/Hero';
import { Stats } from '@/components/home/Stats';
import { Features } from '@/components/home/Features';
import { Industries } from '@/components/home/Industries';
import { Testimonials } from '@/components/home/Testimonials';
import { CTA } from '@/components/home/CTA';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Stats />
      <Features />
      <Industries />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default Index;
