import { createVendor } from "../services/vendorService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { uploadImage } from "../services/uploadService";

function AddVendor() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [vendor, setVendor] = useState({
        name: "",
        category: "",
        location: "",
        googleMapsLink: "",
        image: null,
        description: "",
        phone: "",
        openingHours: "",
    });

    const handleChange = (e) => {
        setVendor({
            ...vendor,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const uploadResult = await uploadImage(vendor.image);

            const vendorData = {
                ...vendor,
                image: uploadResult.imageUrl,
            };

            const user = JSON.parse(localStorage.getItem("user"));
            vendorData.owner = user._id;

            await createVendor(vendorData);

            toast.success("Vendor Added Successfully!");

            setVendor({
                name: "",
                category: "",
                location: "",
                googleMapsLink: "",
                image: null,
                description: "",
                phone: "",
                openingHours: "",
            });

            setLoading(false);

            setTimeout(() => {
                navigate("/");
            }, 1000);

        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Failed to add vendor.");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-10 px-4">

            <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10">

                <div className="text-center mb-10">

                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
                        Add Vendor
                    </h1>

                    <p className="text-gray-500 mt-3">
                        Share your favorite street food vendor with everyone.
                    </p>

                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-8"
                >

                    {/* Basic Information */}

                    <div>

                        <h2 className="text-xl font-semibold text-orange-500 mb-5">
                            📌 Basic Information
                        </h2>

                        <div className="space-y-5">

                            <input
                                type="text"
                                name="name"
                                placeholder="Vendor Name"
                                value={vendor.name}
                                onChange={handleChange}
                                required
                                className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-orange-500 focus:outline-none transition"
                            />

                            <input
                                type="text"
                                name="category"
                                placeholder="Category"
                                value={vendor.category}
                                onChange={handleChange}
                                required
                                className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-orange-500 focus:outline-none transition"
                            />

                            <input
                                type="text"
                                name="location"
                                placeholder="Location"
                                value={vendor.location}
                                onChange={handleChange}
                                required
                                className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-orange-500 focus:outline-none transition"
                            />

                        </div>

                    </div>

                    {/* Google Maps */}

                    <div>

                        <h2 className="text-xl font-semibold text-orange-500 mb-5">
                            📍 Google Maps
                        </h2>

                        <input
                            type="url"
                            name="googleMapsLink"
                            placeholder="Paste Google Maps Link"
                            value={vendor.googleMapsLink}
                            onChange={handleChange}
                            className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-orange-500 focus:outline-none transition"
                        />

                    </div>

                    {/* Details */}

                    <div>

                        <h2 className="text-xl font-semibold text-orange-500 mb-5">
                            📝 Vendor Details
                        </h2>

                        <div className="space-y-5">

                            <textarea
                                name="description"
                                placeholder="Vendor Description"
                                value={vendor.description}
                                onChange={handleChange}
                                rows="4"
                                className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-orange-500 focus:outline-none transition"
                            />

                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                value={vendor.phone}
                                onChange={handleChange}
                                className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-orange-500 focus:outline-none transition"
                            />

                            <input
                                type="text"
                                name="openingHours"
                                placeholder="Opening Hours"
                                value={vendor.openingHours}
                                onChange={handleChange}
                                className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-orange-500 focus:outline-none transition"
                            />

                        </div>

                    </div>

                    {/* Image Upload */}

                    <div>

                        <h2 className="text-xl font-semibold text-orange-500 mb-5">
                            🖼 Upload Vendor Image
                        </h2>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                                setVendor({
                                    ...vendor,
                                    image: e.target.files[0],
                                })
                            }
                            className="w-full border-2 border-dashed border-orange-300 rounded-xl p-4 cursor-pointer
                            file:mr-4
                            file:px-4
                            file:py-2
                            file:border-0
                            file:bg-orange-500
                            file:text-white
                            file:rounded-lg
                            hover:border-orange-500"
                        />

                    </div>

                    {/* Submit Button */}

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-4 rounded-xl text-white font-semibold transition-all duration-300 ${
                            loading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-orange-500 hover:bg-orange-600 hover:scale-[1.02] active:scale-95"
                        }`}
                    >
                        {loading ? "Adding Vendor..." : "Add Vendor"}
                    </button>

                </form>

            </div>

        </div>
    );
}

export default AddVendor;