import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { UserPlus } from "lucide-react";

const API_BASE = "http://localhost:8000";

export default function Signup() {
  const navigate = useNavigate();

  const [role, setRole] = useState<"NGO" | "DONOR">("NGO");
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();

    if (!name || !state || !city) {
      alert("Please fill all required fields");
      return;
    }

    if (role === "DONOR" && !address) {
      alert("Address is required for donors");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${API_BASE}/user/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          role,
          state,
          city,
          address: role === "DONOR" ? address : null,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Signup failed");
        return;
      }

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", role);
      localStorage.setItem("userId", data.user.id);

      navigate(role === "DONOR" ? "/donor-dashboard" : "/ngo-dashboard");
    } catch {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Navbar />

      <div className="px-6 md:px-12 py-14 grid md:grid-cols-2 gap-10 items-center">
        <div className="hidden md:block">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Join <span className="text-green-600">NutriRescue</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-xl">
            Sign up as a donor to share surplus food or as an NGO to claim and distribute safely.
          </p>
        </div>

        <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-xl border p-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-10 w-10 rounded-2xl bg-green-600 flex items-center justify-center">
              <UserPlus className="text-white" size={18} />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900">Sign Up</h2>
          </div>

          <form onSubmit={handleSignup} className="space-y-4">
            {/* Role */}
            <div>
              <label className="text-sm font-semibold text-gray-600">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as "NGO" | "DONOR")}
                className="mt-2 w-full rounded-2xl border px-4 py-3"
              >
                <option value="NGO">NGO</option>
                <option value="DONOR">Donor</option>
              </select>
            </div>

            {/* Name */}
            <div>
              <label className="text-sm font-semibold text-gray-600">
                {role === "DONOR" ? "Donor Name" : "NGO Name"}
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full rounded-2xl border px-4 py-3"
                placeholder={role === "DONOR" ? "Hotel Annapurna" : "Helping Hands NGO"}
              />
            </div>

            {/* State */}
            <div>
              <label className="text-sm font-semibold text-gray-600">State</label>
              <input
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="mt-2 w-full rounded-2xl border px-4 py-3"
                placeholder="Karnataka"
              />
            </div>

            {/* City */}
            <div>
              <label className="text-sm font-semibold text-gray-600">City</label>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="mt-2 w-full rounded-2xl border px-4 py-3"
                placeholder="Bangalore"
              />
            </div>

            {/* Address */}
            {role === "DONOR" && (
              <div>
                <label className="text-sm font-semibold text-gray-600">Address</label>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mt-2 w-full rounded-2xl border px-4 py-3"
                  placeholder="MG Road"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-green-600 py-3 font-semibold text-white hover:bg-green-700 transition shadow-md disabled:opacity-60"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
