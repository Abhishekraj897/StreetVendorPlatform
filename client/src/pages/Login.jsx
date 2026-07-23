import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { loginUser } from "../services/authService";

function Login() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const data = await loginUser(user);

            if (data.token) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));

                toast.success("Login Successful!");

                navigate("/");
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error("Something went wrong.");
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center p-6">

            <div className="grid lg:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full">

                {/* Left Section */}
                <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-orange-500 to-orange-600 text-white p-12">

                    <div className="text-6xl mb-6">
                        🍜
                    </div>

                    <h1 className="text-5xl font-bold">
                        Welcome Back
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-orange-100">
                        Discover the best street food vendors around you using AI-powered recommendations.
                    </p>

                    <div className="mt-12 space-y-4 text-lg">

                        <div>✅ AI Vendor Assistant</div>

                        <div>✅ Verified Vendors</div>

                        <div>✅ Customer Reviews</div>

                        <div>✅ Google Maps Navigation</div>

                    </div>

                </div>

                {/* Right Section */}

                <div className="p-10 md:p-14 flex flex-col justify-center">

                    <div className="mb-10">

                        <h2 className="text-4xl font-bold text-gray-800">
                            Login
                        </h2>

                        <p className="text-gray-500 mt-3">
                            Welcome back! Please sign in to continue.
                        </p>

                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >

                        {/* Email */}

                        <div className="relative">

                            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={user.email}
                                onChange={handleChange}
                                required
                                className="w-full border-2 border-gray-200 focus:border-orange-500 outline-none rounded-xl py-3 pl-12 pr-4 transition-all duration-300"
                            />

                        </div>

                        {/* Password */}

                        <div className="relative">

                            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                value={user.password}
                                onChange={handleChange}
                                required
                                className="w-full border-2 border-gray-200 focus:border-orange-500 outline-none rounded-xl py-3 pl-12 pr-14 transition-all duration-300"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                            >
                                {showPassword ? (
                                    <FiEyeOff size={22} />
                                ) : (
                                    <FiEye size={22} />
                                )}
                            </button>

                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-4 rounded-xl text-white font-semibold transition-all duration-300 ${
                                loading
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-orange-500 hover:bg-orange-600 hover:scale-105 active:scale-95"
                            }`}
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>

                        <div className="flex justify-between items-center text-sm">

                            <button
                                type="button"
                                onClick={() =>
                                    navigate("/forgot-password")
                                }
                                className="text-blue-600 hover:underline"
                            >
                                Forgot Password?
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    navigate("/register")
                                }
                                className="text-orange-500 hover:underline"
                            >
                                Create Account
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default Login;