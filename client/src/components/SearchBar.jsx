import { FiSearch, FiMapPin } from "react-icons/fi";

function SearchBar({ search, setSearch, onSearch }) {
  const handleLocation = async () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );

          const data = await response.json();

          const city =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            data.address.state;

          setSearch(city);

          if (onSearch) {
            setTimeout(() => onSearch(), 100);
          }
        } catch (err) {
          console.error(err);
          alert("Unable to detect your location.");
        }
      },
      () => {
        alert("Location permission denied.");
      }
    );
  };
  return (
    <section className="-mt-1 relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="bg-white rounded-3xl shadow-2xl p-5 sm:p-6">

          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
            Find Your Favorite Street Food
          </h2>

          <p className="text-sm sm:text-base text-center text-gray-500 mt-2 mb-8">
            Search by vendor name, food category or location
          </p>

          <div className="flex flex-col md:flex-row gap-4">

            {/* Search Input */}
            <div className="flex-1 relative">

              <FiSearch
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                size={22}
              />

              <input
                type="text"
                placeholder="Search vendors, momos, tea, dosa..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-14 pr-4 py-4 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition"
              />

            </div>

            {/* Location Button */}
            <button
              onClick={handleLocation}
              className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border border-gray-200 hover:border-orange-500 hover:text-orange-500 transition"
            >
              Location
            </button>

            {/* Search Button */}
            <button
              onClick={onSearch}
              className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-4 rounded-2xl transition shadow-lg"
            >
              Search
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default SearchBar;