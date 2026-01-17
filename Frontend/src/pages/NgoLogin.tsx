import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const API_BASE = "http://localhost:8000";

export default function NgoLogin() {
  const navigate = useNavigate();
  const [ngos, setNgos] = useState<any[]>([]);
  const [selectedNgo, setSelectedNgo] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE}/users?role=NGO`)
      .then(res => res.json())
      .then(data => setNgos(data.users || []))
      .catch(() => alert("Failed to load NGOs"));
  }, []);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (!selectedNgo) {
      alert("Please select an NGO");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", "NGO");
    localStorage.setItem("userId", selectedNgo);

    navigate("/ngo-dashboard");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Navbar />

      <div className="flex justify-center items-center py-20">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border p-8">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
            NGO Login
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-gray-600">
                Select NGO
              </label>
              <select
                value={selectedNgo}
                onChange={(e) => setSelectedNgo(e.target.value)}
                className="mt-2 w-full rounded-2xl border px-4 py-3"
              >
                <option value="">Choose NGO</option>
                {ngos.map((ngo) => (
                  <option key={ngo.id} value={ngo.id}>
                    {ngo.name} ({ngo.city})
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-green-600 py-3 font-semibold text-white hover:bg-green-700 transition shadow-md"
            >
              Proceed as NGO
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
