import { useEffect, useState } from "react";
import { getFavorites } from "../services/favoriteService";
import VendorCard from "../components/VendorCard";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const [loading, setLoading] = useState(true);

  const loadFavorites = async () => {
    try {
      const data = await getFavorites();
      setFavorites(data);
    } catch (error) {
      console.error(error);
    }  finally {
    setLoading(false);
}
  };
  if (loading) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-gray-100">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

                <h2 className="mt-6 text-2xl font-bold">
                    Loading Favorites...
                </h2>
            </div>
        </div>
    );
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="mb-10">

    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
        ❤️ My Favorites
    </h1>

    <p className="text-gray-500 mt-3 text-base sm:text-lg">
        Quickly access all your saved favorite vendors.
    </p>

</div>

      {favorites.length === 0 ? (
       <div className="bg-white rounded-3xl shadow-lg p-10 text-center">

    <div className="text-6xl mb-5">
        ❤️
    </div>

    <h2 className="text-2xl font-bold text-gray-800">
        No Favorites Yet
    </h2>

    <p className="mt-3 text-gray-500">
        Save vendors you like and they'll appear here.
    </p>

</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((fav) => (
            <VendorCard
              key={fav._id}
              vendor={fav.vendor}
            />
          ))}
        </div>
      )}
    </div>
    </div>
  );
}

export default Favorites;