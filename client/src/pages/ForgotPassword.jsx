import { useState } from "react";
import { forgotPassword } from "../services/authService";
import { toast } from "react-toastify";

function ForgotPassword() {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = await forgotPassword(email);

        if (data.message === "User verified successfully") {
            toast.success("User verified successfully!");
        } else {
            toast.error(data.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

                <h1 className="text-3xl font-bold text-center text-orange-500 mb-8">
                    Forgot Password
                </h1>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border p-3 rounded-lg"
                        required
                    />

                    <button
                        className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600"
                    >
                        Send Reset Link
                    </button>

                </form>

            </div>
        </div>
    );
}

export default ForgotPassword;