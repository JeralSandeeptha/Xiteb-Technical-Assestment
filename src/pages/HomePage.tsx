import ClientLogoSection from "../components/client-logo-section/ClientLogoSection";
import NewsSection from "../components/news-section/NewsSection";
import StatsContent from "../components/stats-content/StatsContent";
import WelcomeSection from "../components/welcome-section/WelcomeSection";

const HomePage = () => {

  return (
    <>
      <WelcomeSection />
      <StatsContent />
      <ClientLogoSection />
      <NewsSection />
    </>
  );

}

export default HomePage;