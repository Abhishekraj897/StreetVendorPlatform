import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import CategorySection from "../components/CategorySection";
import FeaturedVendors from "../components/FeaturedVendors";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <CategorySection />
      <FeaturedVendors />
    </>
  );
}

export default Home;