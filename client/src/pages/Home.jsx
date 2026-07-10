import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import CategorySection from "../components/CategorySection";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <CategorySection />
    </>
  );
}

export default Home;