import VendorCard from "./VendorCard";

const vendors = [
  {
    id: 1,
    name: "Sharma Momos",
    category: "Momos",
    location: "Patna",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
  },
  {
    id: 2,
    name: "Banaras Chaat",
    category: "Chaat",
    location: "Varanasi",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
  },
  {
    id: 3,
    name: "Kolkata Rolls",
    category: "Rolls",
    location: "Kolkata",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800",
  },
];

function FeaturedVendors() {
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