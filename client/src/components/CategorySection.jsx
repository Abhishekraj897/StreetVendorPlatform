import {
  FaHamburger,
  FaPizzaSlice,
  FaIceCream,
  FaCoffee,
} from "react-icons/fa";

import {
  GiNoodles,
  GiWrappedSweet,
  GiFruitBowl,
} from "react-icons/gi";

const categories = [
  {
    name: "All",
    value: "All",
    icon: "🍽️",
  },
  {
    name: "Momos",
    value: "Momos",
    icon: <GiNoodles size={38} />,
  },
  {
    name: "Rolls",
    value: "Rolls",
    icon: "🌯",
  },
  {
    name: "Chaat",
    value: "Chaat",
    icon: <GiWrappedSweet size={38} />,
  },
  {
    name: "Burger",
    value: "Burger",
    icon: <FaHamburger size={34} />,
  },
  {
    name: "Tea",
    value: "Tea",
    icon: <FaCoffee size={34} />,
  },
  {
    name: "Pizza",
    value: "Pizza",
    icon: <FaPizzaSlice size={34} />,
  },
  {
    name: "Ice Cream",
    value: "Ice Cream",
    icon: <FaIceCream size={34} />,
  },
  {
    name: "Juice",
    value: "Juice",
    icon: <GiFruitBowl size={36} />,
  },
];

function CategorySection({
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">

          <span className="text-orange-500 font-semibold uppercase tracking-wider">
            Explore
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mt-3">
            Popular Categories
          </h2>

          <p className="text-gray-500 mt-4 text-base sm:text-lg">
            Browse delicious street food from different categories
          </p>

        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">

          {categories.map((item) => (

            <button
              key={item.value}
              onClick={() => setSelectedCategory(item.value)}
              className={`group rounded-3xl p-5 sm:p-6 lg:p-8 transition-all duration-300 border

              ${
                selectedCategory === item.value
                  ? "bg-orange-500 text-white shadow-2xl border-orange-500 scale-105"
                  : "bg-white hover:shadow-xl hover:-translate-y-2 border-gray-100"
              }`}
            >

              <div className="flex justify-center text-3xl sm:text-4xl mb-4 sm:mb-5 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="font-bold text-base sm:text-lg">
                {item.name}
              </h3>

            </button>

          ))}

        </div>

      </div>

    </section>
  );
}

export default CategorySection;