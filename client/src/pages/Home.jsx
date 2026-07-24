import { useState, useRef } from "react";

import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import CategorySection from "../components/CategorySection";
import FeaturedVendors from "../components/FeaturedVendors";

function Home() {
  const [search, setSearch] = useState("");
  const vendorsRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <Hero />

      <SearchBar
        search={search}
        setSearch={setSearch}
        onSearch={() =>
          vendorsRef.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      />

      <CategorySection
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <FeaturedVendors
        search={search}
        selectedCategory={selectedCategory}
      />

      <FeaturedVendors
        ref={vendorsRef}
        search={search}
        selectedCategory={selectedCategory}
      />
    </>
  );
}

export default Home;