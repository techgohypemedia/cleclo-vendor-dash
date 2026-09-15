import Header from "@/components/home/header";
import Hero from "@/components/home/hero";
import StatsSection from "@/components/home/stats-section";
import VendorBenefits from "@/components/home/vendor-benefits";
import Services from "@/components/home/services";
import VerificationSystem from "@/components/home/verification-system";
import HowItWorks from "@/components/home/how-it-works";
import WhyChoose from "@/components/home/why-choose";
import CallToAction from "@/components/home/call-to-action";
import Footer from "@/components/home/footer";
import ScrollReveal from "@/components/customer/ScrollReveal";
export default function VendorLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <StatsSection />
        <VendorBenefits />
        <Services />
        <VerificationSystem />
        <HowItWorks />
        <WhyChoose />
        <CallToAction />
      </main>
      <Footer />
      <ScrollReveal />
    </div>
  );
}
