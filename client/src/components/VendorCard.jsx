function VendorCard({ vendor }) {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover::shadow-xl transition duration-300">
            <img
                src={vendor.image}
                alt={vendor.name}
                className="w-full h-52 object-cover"
            />
            <div className="p-5">
                <h3 className="text-2xl font-bold">
                    {vendor.name}
                </h3>

                <p className="text-gray-600 mt-2">
                    🍜 {vendor.category}
                </p>

                <p className="text-gray-600">
                    📍 {vendor.location}
                </p>

                <p className="text-yellow-500 font-semibold mt-2">
                    ⭐ {vendor.rating}
                </p>

                <button className="mt-5 w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition">
                    View Details
                </button>


            </div>
        </div>
    );
}

export default VendorCard;