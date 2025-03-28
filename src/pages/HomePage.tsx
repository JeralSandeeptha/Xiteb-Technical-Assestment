import ClientLogoSection from "../components/client-logo-section/ClientLogoSection";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import NewsSection from "../components/news-section/NewsSection";
import Services from "../components/services/Services";
import StatsContent from "../components/stats-content/StatsContent";
import Testimonials from "../components/testimonials/Testimonials";
import WelcomeSection from "../components/welcome-section/WelcomeSection";

const HomePage = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <StatsContent />
      <Testimonials />
      <WelcomeSection />
      <ClientLogoSection />
      <NewsSection />
      <Footer />
    </>
  );

}

export default HomePage;