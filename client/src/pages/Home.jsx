import { useState } from "react";

import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import CategorySection from "../components/CategorySection";
import FeaturedVendors from "../components/FeaturedVendors";

function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <Hero />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <CategorySection
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <FeaturedVendors
        search={search}
        selectedCategory={selectedCategory}
      />
    </>
  );
}

export default Home;