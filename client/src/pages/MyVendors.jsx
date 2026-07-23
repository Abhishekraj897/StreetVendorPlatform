import { useEffect, useState } from "react";
import { getMyVendors, deleteVendor } from "../services/vendorService";
import VendorCard from "../components/VendorCard";
import { useNavigate } from "react-router-dom";

function MyVendors() {
    const [vendors, setVendors] = useState([]);
    const [loading, setLoading] = useState(true);
    const user = JSON.parse(localStorage.getItem("user"));

    const navigate = useNavigate();

    useEffect(() => {
        const loadVendors = async () => {
            try {
        const data = await getMyVendors(user._id);
        setVendors(data);
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
        };

        loadVendors();
    }, []);
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this vendor?"
        );

        if (!confirmDelete) return;

        await deleteVendor(id);

        setVendors(
            vendors.filter((vendor) => vendor._id !== id)
        );
    };

    if (loading) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-gray-100">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

                <h2 className="mt-6 text-2xl font-bold">
                    Loading Vendors...
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
        📍 My Vendors
    </h1>

    <p className="text-gray-500 mt-3 text-base sm:text-lg">
        Manage all the vendors you've added to the platform.
    </p>

</div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {vendors.length > 0 ? (
                    vendors.map((vendor) => (
                        <VendorCard
                            key={vendor._id}
                            vendor={vendor}
                            showActions={true}
                            onDelete={handleDelete}
                            onEdit={(vendor) => navigate(`/edit-vendor/${vendor._id}`)}
                        />
                    ))
                ) : (
                    <div className="col-span-full bg-white rounded-3xl shadow-lg p-10 text-center">

    <div className="text-6xl mb-5">
        🍽️
    </div>

    <h2 className="text-2xl font-bold text-gray-800">
        No Vendors Found
    </h2>

    <p className="mt-3 text-gray-500">
        You haven't added any vendors yet.
    </p>

    <button
        onClick={() => navigate("/add-vendor")}
        className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
    >
        Add Vendor
    </button>

</div>
                )}

            </div>

        </div>
        </div>
    );
}

export default MyVendors;