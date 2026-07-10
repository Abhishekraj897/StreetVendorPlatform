import { useEffect, useState } from "react";
import VendorCard from "./VendorCard";

function FeaturedVendors() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/vendors")
      .then((res) => res.json())
      .then((data) => setVendors(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          ⭐ Featured Vendors
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {vendors.map((vendor) => (
            <VendorCard
              key={vendor.id}
              vendor={vendor}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedVendors;