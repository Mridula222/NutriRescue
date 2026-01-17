import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { UserPlus } from "lucide-react";

export default function Signup() {
  const [role, setRole] = useState<"donor" | "ngo">("donor");
  const navigate = useNavigate();

  function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", role);

    if (role === "donor") navigate("/donor");
    else navigate("/ngo");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Navbar />

      <div className="px-6 md:px-12 py-14 grid md:grid-cols-2 gap-10 items-center">
        {/* Left info */}
        <div className="hidden md:block">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Join <span className="text-green-600">NutriRescue</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-xl">
            Start donating safe surplus food or claim donations for your NGO and
            track impact.
          </p>

          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1200&auto=format&fit=crop"
            alt="Food donation"
            className="mt-8 rounded-3xl shadow-lg border object-cover h-60 w-full"
          />
        </div>

        {/* Right form */}
        <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-xl border p-8">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-2xl bg-green-600 flex items-center justify-center">
              <UserPlus className="text-white" size={18} />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900">Sign Up</h2>
          </div>

          <p className="text-gray-500 text-sm mt-2">
            Select your role to create a demo account.
          </p>

          <form onSubmit={handleSignup} className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-semibold text-gray-600">
                Choose Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as "donor" | "ngo")}
                className="mt-2 w-full rounded-2xl border px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
              >
                <option value="donor">Donor (Restaurant/Hostel/Event)</option>
                <option value="ngo">NGO (Claim & Distribute)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-green-600 py-3 font-semibold text-white hover:bg-green-700 transition shadow-md"
            >
              Create Account
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-green-700 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
