import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

function Hero() {
  return (
    <section
      className="relative min-h-[85vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

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
              <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 shadow-xl">
                Explore Vendors
                <FiArrowRight />
              </button>
            </Link>

            <Link to="/ai-assistant" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 px-8 py-4 rounded-xl font-semibold">
                🤖 Try AI Assistant
              </button>
            </Link>

          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-8 text-white">

            <div className="flex items-center gap-3">
              <div className="text-3xl">🍜</div>
              <div>
                <h3 className="text-2xl font-bold">500+</h3>
                <p className="text-white/80">Street Vendors</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-3xl">⭐</div>
              <div>
                <h3 className="text-2xl font-bold">4.8</h3>
                <p className="text-white/80">Average Rating</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-3xl">📍</div>
              <div>
                <h3 className="text-2xl font-bold">50+</h3>
                <p className="text-white/80">Cities</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section >
  );
}

export default Hero;