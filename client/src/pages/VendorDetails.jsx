import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getVendorById } from "../services/vendorService";
import { getReviews, addReview } from "../services/reviewService";
import { toast } from "react-toastify";

function VendorDetails() {
  const { id } = useParams();

  const [vendor, setVendor] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const loadVendor = async () => {
      try {
        const data = await getVendorById(id);
        setVendor(data);

        const reviewData = await getReviews(id);
        setReviews(reviewData);
      } catch (error) {
        console.error(error);
      }
    };

    loadVendor();
  }, [id]);

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    try {
      await addReview({
        vendorId: id,
        rating,
        comment,
      });

      toast.success("Review submitted successfully!");

      const reviewData = await getReviews(id);
      setReviews(reviewData);

      setRating(5);
      setComment("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit review");
    }
  };

  if (!vendor) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-gray-100">

            <div className="text-center">

                <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

                <h2 className="mt-6 text-2xl font-bold text-gray-800">
                    Loading Vendor...
                </h2>

            </div>

        </div>
    );
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-gray-100 py-6 sm:py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">

        <div className="relative">

    <img
        src={vendor.image}
        alt={vendor.name}
        className="w-full h-64 sm:h-80 md:h-[500px] object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

    <div className="absolute bottom-6 left-5 sm:bottom-8 sm:left-8">

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white">
            {vendor.name}
        </h1>

        <p className="text-orange-100 text-xl mt-2">
            {vendor.category}
        </p>

    </div>

    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-yellow-400 text-gray-900 px-4 sm:px-5 py-2 sm:py-3 rounded-full font-bold shadow-xl text-sm sm:text-lg">

        ⭐ {vendor.rating}

    </div>

    <button
    className="absolute top-20 right-4 sm:top-24 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-xl hover:scale-110 transition-all duration-300 text-xl sm:text-2xl"
>
    ❤️
</button>

</div>

        <div className="p-5 sm:p-8">

          <div className="flex flex-wrap gap-3">

    <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold">
        🍽️ {vendor.category}
    </span>

    <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold">
        ⭐ {vendor.rating}
    </span>

</div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-8">

    {/* Location */}
    <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

        <h3 className="font-bold text-lg mb-3">
            📍 Location
        </h3>

        <p className="text-gray-600">
            {vendor.location}
        </p>

    </div>

    {/* Phone */}
    {/* Contact */}
<div className="bg-green-50 rounded-2xl p-6 border border-green-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

        <h3 className="font-bold text-lg mb-3">
            📞 Contact
        </h3>

        <p className="text-gray-600">
            {vendor.phone || "Not Available"}
        </p>

    </div>

    {/* Opening Hours */}
    {/* Opening Hours */}
<div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

        <h3 className="font-bold text-lg mb-3">
            🕒 Opening Hours
        </h3>

        <p className="text-gray-600">
            {vendor.openingHours}
        </p>

    </div>

    {/* Category */}
    {/* Category */}
<div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

        <h3 className="font-bold text-lg mb-3">
            🍽️ Category
        </h3>

        <p className="text-gray-600">
            {vendor.category}
        </p>

    </div>

</div>

<div className="mt-8 bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300">

    <h2 className="text-2xl font-bold mb-4">
        📝 About this Vendor
    </h2>

    <p className="text-gray-600 leading-8">
        {vendor.description || "No description available."}
    </p>

</div>

<div className="flex flex-col sm:flex-row gap-4 mt-8">

    {vendor.phone && (
        <a
            href={`tel:${vendor.phone}`}
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 text-center"
        >
            📞 Call Vendor
        </a>
    )}

    {vendor.googleMapsLink && (
        <a
            href={vendor.googleMapsLink}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 text-center"
        >
            🗺️ Open in Google Maps
        </a>
    )}

</div>

          {/* Review Form */}

          <div className="mt-12 bg-white border border-gray-200 rounded-3xl shadow-lg p-6 sm:p-8">

    <h2 className="text-3xl font-bold text-gray-800 mb-6">
        ⭐ Write a Review
    </h2>

    <form onSubmit={handleSubmitReview} className="space-y-6">

        <div>

            <label className="block font-semibold mb-2">
                Rating
            </label>

            <select
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-orange-500 outline-none"
            >
                <option value={5}>⭐⭐⭐⭐⭐ Excellent</option>
                <option value={4}>⭐⭐⭐⭐ Very Good</option>
                <option value={3}>⭐⭐⭐ Good</option>
                <option value={2}>⭐⭐ Fair</option>
                <option value={1}>⭐ Poor</option>
            </select>

        </div>

        <div>

            <label className="block font-semibold mb-2">
                Your Review
            </label>

            <textarea
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Share your experience..."
                className="w-full border-2 border-gray-200 rounded-xl p-4 resize-none focus:border-orange-500 outline-none"
            />

        </div>

        <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
        >
            Submit Review
        </button>

    </form>

</div>

          {/* Customer Reviews */}

          <div className="mt-12">

    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
        💬 Customer Reviews
    </h2>

    {reviews.length === 0 ? (

        <div className="bg-gray-50 rounded-3xl p-10 text-center border">

            <div className="text-3xl md:text-5xl mb-4">
                💬
            </div>

            <h3 className="text-xl font-bold text-gray-700">
                No Reviews Yet
            </h3>

            <p className="text-gray-500 mt-2">
                Be the first one to review this vendor.
            </p>

        </div>

    ) : (

        <div className="space-y-6">

            {reviews.map((review) => (

                <div
                    key={review._id}
                    className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                >

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">

                        <h3 className="font-bold text-lg">
                            {review.user?.name || "Anonymous"}
                        </h3>

                        <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold">
                            ⭐ {review.rating}/5
                        </span>

                    </div>

                    <p className="text-gray-600 leading-7 mt-4">
                        {review.comment}
                    </p>

                </div>

            ))}

        </div>

    )}

</div>

          <div className="flex justify-center mt-12">

    <button
        onClick={() => window.history.back()}
        className="bg-gray-800 hover:bg-black text-white px-10 py-4 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
    >
        ← Back to Vendors
    </button>

</div>

        </div>
      </div>
    </div>
  );
}

export default VendorDetails;