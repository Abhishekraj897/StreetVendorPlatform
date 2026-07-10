function SearchBar() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-4">

          <input
            type="text"
            placeholder="Search food, vendor or location..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition">
            Search
          </button>

        </div>
      </div>
    </section>
  );
}

export default SearchBar;