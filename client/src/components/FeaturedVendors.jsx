import { getVendors } from "../services/vendorService";
import { useEffect, useState } from "react";
import VendorCard from "./VendorCard";
import { forwardRef } from "react";

const FeaturedVendors = forwardRef(
  ({ search, selectedCategory }, ref) => {
  const [vendors, setVendors] = useState([]);

  const filteredVendors = vendors.filter((vendor) => {
    const matchesSearch =
      vendor.name.toLowerCase().includes(search.toLowerCase()) ||
      vendor.category.toLowerCase().includes(search.toLowerCase()) ||
      vendor.location.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      vendor.category.toLowerCase() ===
        selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    const loadVendors = async () => {
      try {
        const data = await getVendors();
        setVendors(data);
      } catch (error) {
        console.log(error);
      }
    };

    loadVendors();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-14">

          <div>

            <span className="text-orange-500 font-semibold uppercase tracking-widest">
              Best Picks
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 text-gray-800">
              Featured Vendors
            </h2>

            <p className="text-gray-500 mt-3 text-base sm:text-lg">
              Discover the highest-rated local street food vendors.
            </p>

          </div>


        </div>

        {/* Vendors */}
        {filteredVendors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {filteredVendors.map((vendor) => (
              <VendorCard
                key={vendor._id}
                vendor={vendor}
              />
            ))}
          </div>
        ) : (
          <div className="bg-orange-50 rounded-3xl p-8 sm:p-12 lg:p-16 text-center">

            <div className="text-7xl mb-6">
              🍽️
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
              No Vendors Found
            </h3>

            <p className="text-gray-500 mt-4 text-lg">
              Try another category or search term.
            </p>

          </div>
        )}

      </div>

    </section>
  );
});

export default FeaturedVendors;