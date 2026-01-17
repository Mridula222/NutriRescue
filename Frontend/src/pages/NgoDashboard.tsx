import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import FoodCard from "../components/FoodCard";
import { useNavigate } from "react-router-dom";

const API_BASE = "http://localhost:8000";

type Donation = {
  id: number;
  food_name: string;
  food_category: string;
  quantity: number;
  donor_name: string;
  address: string;
  status: string;
};

export default function NgoDashboard() {
  const navigate = useNavigate();

  const [states, setStates] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(false);

  /* ---------- Load States ---------- */
  useEffect(() => {
    fetch(`${API_BASE}/location/states`)
      .then(res => res.json())
      .then(data => setStates(data.states || []))
      .catch(() => alert("Failed to load states"));
  }, []);

  /* ---------- Load Cities on State Change ---------- */
  useEffect(() => {
    if (!state) return;

    setCity("");
    fetch(`${API_BASE}/location/cities?state=${state}`)
      .then(res => res.json())
      .then(data => setCities(data.cities || []))
      .catch(() => alert("Failed to load cities"));
  }, [state]);

  /* ---------- Fetch Available Food ---------- */
  useEffect(() => {
    if (!state || !city) return;

    setLoading(true);
    fetch(`${API_BASE}/ngo/available-food?state=${state}&city=${city}`)
      .then(res => res.json())
      .then(data => setDonations(data.donations || []))
      .catch(() => alert("Failed to load food"))
      .finally(() => setLoading(false));
  }, [state, city]);

  /* ---------- Toggle Claim ---------- */
  async function toggleClaim(donationId: number) {
    try {
      const res = await fetch(`${API_BASE}/ngo/toggle-claim`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ donationId })
      });

      if (!res.ok) {
        alert("Unable to update donation");
        return;
      }

      // Refresh list after toggle
      setDonations(prev =>
        prev.filter(d => d.id !== donationId)
      );

    } catch {
      alert("Something went wrong");
    }
  }

  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div style={styles.page}>
      <Navbar />

      <div style={styles.container}>
        <div style={styles.box}>
          <h2 style={styles.title}>NGO Dashboard</h2>
          <p style={styles.subtitle}>
            Browse safe food donations and claim for distribution.
          </p>

          {/* ---------- LOCATION FILTER ---------- */}
          <div style={styles.filters}>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              style={styles.select}
            >
              <option value="">Select State</option>
              {states.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              disabled={!state}
              style={styles.select}
            >
              <option value="">Select City</option>
              {cities.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* ---------- FOOD LIST ---------- */}
          <div style={styles.list}>
            {loading && <p>Loading food...</p>}

            {!loading && donations.length === 0 && state && city && (
              <p>No safe food available</p>
            )}

            {donations.map((d) => (
              <FoodCard
                key={d.id}
                //imageUrl="https://images.unsplash.com/photo-1600626333392-34c88d256905?w=400"
                title={d.food_name}
                meta={`${d.quantity} portions | ${d.food_category} | ${d.donor_name}`}
                actionLabel="Claim"
                onAction={() => toggleClaim(d.id)}
              />
            ))}
          </div>

          <button style={styles.secondaryBtn} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- STYLES ---------- */

const styles: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh", background: "#f7f4ef" },
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "30px 16px"
  },
  box: {
    width: "100%",
    maxWidth: "720px",
    background: "white",
    borderRadius: "14px",
    padding: "22px",
    border: "1px solid #ececec",
    boxShadow: "0px 6px 16px rgba(0,0,0,0.08)"
  },
  title: { margin: 0, fontSize: "24px", fontWeight: 800 },
  subtitle: { margin: "8px 0 16px", color: "#666" },
  filters: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    marginBottom: "16px"
  },
  select: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    fontSize: "14px"
  },
  list: { display: "flex", flexDirection: "column", gap: "12px" },
  secondaryBtn: {
    marginTop: "16px",
    background: "white",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "12px",
    width: "100%",
    fontWeight: 800,
    cursor: "pointer"
  }
};
