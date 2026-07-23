import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
    FiPackage,
    FiHeart,
    FiUser,
    FiPlusCircle,
    FiStar,
    FiMapPin,
    FiCpu,
} from "react-icons/fi";
import { getVendors } from "../services/vendorService";
import { getFavorites } from "../services/favoriteService";
import StatCard from "../components/StatCard";

function Dashboard() {
    const [stats, setStats] = useState({
        vendors: 0,
        favorites: 0,
        reviews: 0,
        myVendors: 0,
    });
    const [vendors, setVendors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {
        try {
            const user = JSON.parse(localStorage.getItem("user"));

            const vendors = await getVendors();
            setVendors(vendors);
            const favorites = await getFavorites();

            const myVendorCount = vendors.filter(
                (vendor) => vendor.owner === user._id
            ).length;

            setStats({
                vendors: vendors.length,
                favorites: favorites.length,
                reviews: 0,
                myVendors: myVendorCount,
            });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-gray-100">

                <div className="text-center">

                    <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

                    <h2 className="mt-6 text-2xl font-bold text-gray-800">
                        Loading Dashboard...
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Please wait while we fetch your data.
                    </p>

                </div>

            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-gray-100">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 mb-10">

                    <div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
                            Dashboard 👋
                        </h1>

                        <p className="text-gray-500 mt-3 text-base sm:text-lg">
                            Welcome back! Here's an overview of your Street Vendor Platform.
                        </p>
                    </div>

                    <Link
                        to="/add-vendor"
                        className="mt-6 md:mt-0 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
                    >
                        <FiPlusCircle />
                        Add Vendor
                    </Link>

                </div>

                {/* Welcome Banner */}
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl mb-10">

                    <h2 className="text-2xl sm:text-3xl font-bold">
                        Welcome Back 👋
                    </h2>

                    <p className="mt-3 text-orange-100">
                        Manage vendors, favorites and AI recommendations from one place.
                    </p>

                </div>


                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    <StatCard
                        title="Vendors"
                        subtitle="Total"
                        value={stats.vendors}
                        icon={<FiPackage />}
                        color="bg-orange-500"
                    />

                    <StatCard
                        title="Favorites"
                        subtitle="Saved"
                        value={stats.favorites}
                        icon={<FiHeart />}
                        color="bg-pink-500"
                    />

                    <StatCard
                        title="My Vendors"
                        subtitle="Owned"
                        value={stats.myVendors}
                        icon={<FiUser />}
                        color="bg-green-500"
                    />

                    <StatCard
                        title="Reviews"
                        subtitle="Coming Soon"
                        value={stats.reviews}
                        icon={<FiStar />}
                        color="bg-yellow-500"
                    />

                </div>

                {/* Dashboard Panels */}
                <div className="grid lg:grid-cols-2 gap-8 mt-10">

                    {/* Platform Overview */}
                    <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-6 sm:p-8">

                        <h2 className="text-2xl font-bold mb-8">
                            📊 Platform Overview
                        </h2>

                        <div className="space-y-6">

                            <div>
                                <div className="flex justify-between mb-2">
                                    <span>Total Vendors</span>
                                    <span>{stats.vendors}</span>
                                </div>

                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div
                                        className="bg-orange-500 h-3 rounded-full"
                                        style={{ width: `${Math.min(stats.vendors * 10, 100)}%` }}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between mb-2">
                                    <span>Favorites</span>
                                    <span>{stats.favorites}</span>
                                </div>

                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div
                                        className="bg-pink-500 h-3 rounded-full"
                                        style={{ width: `${Math.min(stats.favorites * 10, 100)}%` }}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between mb-2">
                                    <span>My Vendors</span>
                                    <span>{stats.myVendors}</span>
                                </div>

                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div
                                        className="bg-green-500 h-3 rounded-full"
                                        style={{ width: `${Math.min(stats.myVendors * 20, 100)}%` }}
                                    />
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8">

                        <h2 className="text-2xl font-bold mb-8">
                            ⚡ Quick Actions
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                            <Link
                                to="/add-vendor"
                                className="bg-orange-100 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-105 rounded-xl p-6 text-center"
                            >
                                <FiPlusCircle className="text-3xl mx-auto mb-3" />
                                Add Vendor
                            </Link>

                            <Link
                                to="/favorites"
                                className="bg-pink-100 hover:bg-pink-500 hover:text-white transition-all duration-300 hover:scale-105 rounded-xl p-6 text-center"
                            >
                                <FiHeart className="text-3xl mx-auto mb-3" />
                                Favorites
                            </Link>

                            <Link
                                to="/my-vendors"
                                className="bg-green-100 hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-105 rounded-xl p-6 text-center"
                            >
                                <FiMapPin className="text-3xl mx-auto mb-3" />
                                My Vendors
                            </Link>

                            <Link
                                to="/ai"
                                className="bg-blue-100 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 rounded-xl p-6 text-center"
                            >
                                <FiCpu className="text-3xl mx-auto mb-3" />
                                AI Assistant
                            </Link>

                        </div>

                    </div>

                </div>
                {/* Recently Added Vendors */}
                <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-6 sm:p-8 mt-10">

                    <div className="flex justify-between items-center mb-8">

                        <h2 className="text-2xl font-bold">
                            🍽️ Recently Added Vendors
                        </h2>

                        <span className="text-gray-500">
                            {vendors.length} Vendors
                        </span>

                    </div>

                    <div className="overflow-x-auto">

                        <table className="w-full">

                            <thead>

                                <tr className="border-b">

                                    <th className="text-left py-4 font-semibold text-gray-600">Vendor</th>
                                    <th className="text-left py-4 font-semibold text-gray-600">Category</th>
                                    <th className="text-left py-4 font-semibold text-gray-600">Location</th>
                                    <th className="text-left py-4 font-semibold text-gray-600">Rating</th>

                                </tr>

                            </thead>

                            <tbody>

                                {vendors.length === 0 ? (

                                    <tr>
                                        <td
                                            colSpan="4"
                                            className="py-12 text-center"
                                        >
                                            <div className="flex flex-col items-center">

                                                <div className="text-6xl mb-4">
                                                    🍽️
                                                </div>

                                                <h3 className="text-2xl font-bold text-gray-700">
                                                    No Vendors Yet
                                                </h3>

                                                <p className="text-gray-500 mt-2">
                                                    Add your first vendor to get started.
                                                </p>

                                                <Link
                                                    to="/add-vendor"
                                                    className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                                                >
                                                    Add Vendor
                                                </Link>

                                            </div>
                                        </td>
                                    </tr>

                                ) : (

                                    vendors.slice(0, 5).map((vendor) => (

                                        <tr
                                            key={vendor._id}
                                            className="border-b hover:bg-orange-50 transition-all duration-300"
                                        >

                                            <td className="py-4 flex items-center gap-4">

                                                <img
                                                    src={vendor.image || "https://placehold.co/80x80?text=Vendor"}
                                                    alt={vendor.name}
                                                    className="w-14 h-14 rounded-xl object-cover transition-transform duration-300 hover:scale-110"
                                                />

                                                <span className="font-semibold">
                                                    {vendor.name}
                                                </span>

                                            </td>

                                            <td>{vendor.category}</td>

                                            <td>{vendor.location}</td>

                                            <td>
                                                <div className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-semibold">
                                                    ⭐ {vendor.rating}
                                                </div>
                                            </td>

                                        </tr>

                                    ))

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>
                {/* Recent Activity */}
                <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-6 sm:p-8 mt-10">

                    <h2 className="text-2xl font-bold mb-8">
                        📈 Recent Activity
                    </h2>

                    <div className="space-y-5">

                        <div className="flex items-center gap-4 border-b pb-4">
                            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-2xl">
                                🍽️
                            </div>

                            <div>
                                <p className="font-semibold">
                                    Total Vendors
                                </p>

                                <p className="text-gray-500 text-sm">
                                    {stats.vendors} vendors are currently available.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 border-b pb-4">
                            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-2xl">
                                ❤️
                            </div>

                            <div>
                                <p className="font-semibold">
                                    Favorites
                                </p>

                                <p className="text-gray-500 text-sm">
                                    You have {stats.favorites} favorite vendors.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 border-b pb-4">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                                👤
                            </div>

                            <div>
                                <p className="font-semibold">
                                    My Vendors
                                </p>

                                <p className="text-gray-500 text-sm">
                                    You own {stats.myVendors} vendor listings.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
                                🤖
                            </div>

                            <div>
                                <p className="font-semibold">
                                    AI Assistant
                                </p>

                                <p className="text-gray-500 text-sm">
                                    Ready to help you discover the best vendors.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div >
        </div >
    );
}

export default Dashboard;