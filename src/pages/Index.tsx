import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Innovation from "@/components/Innovation";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <div id="mission">
        <Mission />
      </div>
      <div id="innovation">
        <Innovation />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
