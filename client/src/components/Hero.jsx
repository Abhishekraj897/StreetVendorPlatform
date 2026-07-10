function Hero() {
  return (
    <section className="bg-gradient-to-r from-orange-50 to-orange-100 min-h-[85vh] flex items-center">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-6xl font-bold leading-tight text-gray-800">
            Discover the Best
            <span className="text-orange-500"> Street Food </span>
            Around You
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Search nearby vendors, explore delicious local food,
            and support small businesses in your city.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
              Explore Vendors
            </button>

            <button className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800"
            alt="Street Food"
            className="rounded-3xl shadow-2xl"
          />
        </div>

      </div>

    </section>
  );
}

export default Hero;