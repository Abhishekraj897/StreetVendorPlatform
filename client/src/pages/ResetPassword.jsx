import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { resetPassword } from "../services/authService";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const { token } = useParams();
const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  const data = await resetPassword(token, password);

  if (data.message === "Password reset successful") {
    toast.success("Password updated successfully!");

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  } else {
    toast.error(data.message);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-orange-500 mb-8">
          Reset Password
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded-lg"
            required
          />

          <button
            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600"
          >
            Reset Password
          </button>

        </form>

      </div>
    </div>
  );
}

export default ResetPassword;