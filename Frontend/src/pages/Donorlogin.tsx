import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const API_BASE = "http://localhost:8000";

export default function DonorLogin() {
  const navigate = useNavigate();
  const [donors, setDonors] = useState<any[]>([]);
  const [selectedDonor, setSelectedDonor] = useState("");

  useEffect(() => {
    fetch(`${API_BASE}/users?role=DONOR`)
      .then(res => res.json())
      .then(data => setDonors(data.users || []))
      .catch(() => alert("Failed to load donors"));
  }, []);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (!selectedDonor) {
      alert("Please select a donor");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", "DONOR");
    localStorage.setItem("userId", selectedDonor);

    navigate("/donor-dashboard");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Navbar />

      <div className="flex justify-center items-center py-20">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border p-8">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
            Donor Login
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-gray-600">
                Select Donor
              </label>
              <select
                value={selectedDonor}
                onChange={(e) => setSelectedDonor(e.target.value)}
                className="mt-2 w-full rounded-2xl border px-4 py-3"
              >
                <option value="">Choose Donor</option>
                {donors.map((donor) => (
                  <option key={donor.id} value={donor.id}>
                    {donor.name} ({donor.city})
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-green-600 py-3 font-semibold text-white hover:bg-green-700 transition shadow-md"
            >
              Proceed as Donor
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
