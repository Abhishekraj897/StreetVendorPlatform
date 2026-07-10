const categories = [
  "🍜 Momos",
  "🌮 Rolls",
  "🥟 Chaat",
  "🍔 Burger",
  "☕ Tea",
  "🍕 Pizza",
  "🍦 Ice Cream",
  "🥤 Juice",
];

function CategorySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Popular Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold">{item}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CategorySection;