import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

function Hero() {
  return (
    <section
      className="relative min-h-screen lg:min-h-[90vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">

          <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🍽️ India's Street Food Discovery Platform
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            Discover
            <span className="text-orange-400"> Amazing </span>
            Street Food
            <br />
            Near You
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 leading-7 md:leading-8 max-w-2xl">
            Find the best local vendors, explore authentic street food,
            support small businesses, and let AI recommend your next meal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <Link to="/" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 shadow-xl">
                Explore Vendors
                <FiArrowRight />
              </button>
            </Link>

            <Link to="/ai-assistant" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-black transition px-8 py-4 rounded-xl font-semibold">
                🤖 Try AI Assistant
              </button>
            </Link>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-xl">

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-orange-400">
                500+
              </h2>
              <p className="text-gray-300">
                Vendors
              </p>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-orange-400">
                50+
              </h2>
              <p className="text-gray-300">
                Categories
              </p>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-orange-400">
                AI
              </h2>
              <p className="text-gray-300">
                Recommendations
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;