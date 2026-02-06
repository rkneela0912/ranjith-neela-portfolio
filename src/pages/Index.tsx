import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TechMarquee from '@/components/TechMarquee';
import About from '@/components/About';
import Services from '@/components/Services';
import StatsCounter from '@/components/StatsCounter';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';
import Certifications from '@/components/Certifications';
import CTABanner from '@/components/CTABanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Services />
        <StatsCounter />
        <Experience />
        <Projects />
        <Skills />
        <Testimonials />
        <Certifications />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
