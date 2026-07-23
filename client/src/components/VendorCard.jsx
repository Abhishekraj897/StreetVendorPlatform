import { Link } from "react-router-dom";
import {
  addFavorite,
  removeFavorite,
  getFavorites,
} from "../services/favoriteService";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import {
  FiHeart,
  FiMapPin,
  FiStar,
  FiPhone,
  FiArrowRight,
} from "react-icons/fi";

function VendorCard({
  vendor,
  showActions = false,
  onDelete,
  onEdit,
}) {
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = async () => {
    try {
      if (!localStorage.getItem("token")) {
       toast.error("Please login first");
        return;
      }

      if (favorite) {
        await removeFavorite(vendor._id);
        setFavorite(false);
      } else {
        await addFavorite(vendor._id);
        setFavorite(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const loadFavorites = async () => {
      if (!localStorage.getItem("token")) return;

      try {
        const favorites = await getFavorites();

        const isFavorite = favorites.some(
          (fav) => fav.vendor._id === vendor._id
        );

        setFavorite(isFavorite);
      } catch (error) {
        console.error(error);
      }
    };

    loadFavorites();
  }, [vendor._id]);

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <div className="relative">

        <img
          src={vendor.image}
          alt={vendor.name}
          className="w-full h-52 sm:h-56 object-cover group-hover:scale-105 transition duration-500"
        />

        <button
          onClick={handleFavorite}
          className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white shadow flex items-center justify-center hover:scale-110 transition"
        >
          <FiHeart
            className={
              favorite
                ? "text-red-500 fill-red-500"
                : "text-gray-500"
            }
            size={20}
          />
        </button>

        <div className="absolute bottom-4 left-4 bg-yellow-400 text-black font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
          <FiStar />
          {vendor.rating}
        </div>

      </div>

      <div className="p-5 sm:p-6">

        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          {vendor.name}
        </h2>

        <span className="inline-block mt-3 bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
          {vendor.category}
        </span>

        <p className="flex items-center gap-2 mt-4 text-gray-600 text-sm sm:text-base">
          <FiMapPin />
          {vendor.location}
        </p>

        {vendor.phone && (
          <p className="flex items-center gap-2 mt-2 text-gray-600 text-sm sm:text-base">
            <FiPhone />
            {vendor.phone}
          </p>
        )}

        {showActions ? (
          <div className="flex gap-3 mt-6">

            <button
              onClick={() => onEdit(vendor)}
              className="flex-1 bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600"
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(vendor._id)}
              className="flex-1 bg-red-500 text-white py-3 rounded-xl hover:bg-red-600"
            >
              Delete
            </button>

          </div>
        ) : (
          <Link to={`/vendor/${vendor._id}`}>
            <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl flex justify-center items-center gap-2 transition">
              View Details
              <FiArrowRight />
            </button>
          </Link>
        )}

      </div>

    </div>
  );
}

export default VendorCard;