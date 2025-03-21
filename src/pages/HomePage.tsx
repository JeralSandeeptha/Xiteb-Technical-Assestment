import ClientLogoSection from "../components/client-logo-section/ClientLogoSection";
import NewsSection from "../components/news-section/NewsSection";
import StatsContent from "../components/stats-content/StatsContent";

const HomePage = () => {

  return (
    <>
      <StatsContent />
      <ClientLogoSection />
      <NewsSection />
    </>
  );

}

export default HomePage;