import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const API_BASE = "http://localhost:8000";

type Donation = {
  id: number;
  food_name: string;
  food_category: string;
  quantity: number;
  status: string;
  created_at: string;
};

export default function DonorDashboard() {
  const navigate = useNavigate();
  const donorId = localStorage.getItem("userId");

  const [donations, setDonations] = useState<Donation[]>([]);
  const [foodName, setFoodName] = useState("");
  const [foodCategory, setFoodCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [loading, setLoading] = useState(false);

  /* -------- Fetch donor donations -------- */
  useEffect(() => {
    if (!donorId) return;

    fetch(`${API_BASE}/donor/donations/${donorId}`)
      .then(res => res.json())
      .then(data => setDonations(data.donations || []))
      .catch(() => alert("Failed to load donations"));
  }, [donorId]);

  /* -------- Create new donation -------- */
  async function handleCreateFood(e: React.FormEvent) {
    e.preventDefault();

    if (!foodName || !foodCategory || !quantity) {
      alert("Fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${API_BASE}/donor/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          donorId,
          foodName,
          foodCategory,
          quantity: Number(quantity)
        })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to create donation");
        return;
      }

      setDonations(prev => [data.donation, ...prev]);
      setFoodName("");
      setFoodCategory("");
      setQuantity("");

    } catch {
      alert("Something went wrong");
    } finally {
      setLoading(false);
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
          <h2 style={styles.title}>Donor Dashboard</h2>
          <p style={styles.subtitle}>
            Post surplus food and track donation status.
          </p>

          {/* ---------- CREATE FOOD ---------- */}
          <form onSubmit={handleCreateFood} style={styles.form}>
            <input
              placeholder="Food name"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              style={styles.input}
            />

            <select
              value={foodCategory}
              onChange={(e) => setFoodCategory(e.target.value)}
              style={styles.input}
            >
              <option value="">Select category</option>
              <option value="DAIRY">Dairy</option>
              <option value="MEAT">Meat</option>
              <option value="VEGETABLES">Vegetables</option>
              <option value="RICE_GRAINS">Rice / Grains</option>
              <option value="LENTILS_LEGUMES">Lentils</option>
              <option value="BREADS">Breads</option>
              <option value="FRIED_FASTFOOD">Fried / Fast Food</option>
              <option value="SWEETS">Sweets</option>
              <option value="FRUITS_RAW">Fruits</option>
              <option value="PICKLES_CONDIMENTS">Pickles</option>
            </select>

            <input
              type="number"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              style={styles.input}
            />

            <button style={styles.primaryBtn} disabled={loading}>
              {loading ? "Posting..." : "Post Food"}
            </button>
          </form>

          {/* ---------- DONATION LIST ---------- */}
          {donations.map((d) => (
            <div key={d.id} style={styles.card}>
              <h4 style={styles.foodTitle}>{d.food_name}</h4>
              <p style={styles.meta}>Category: {d.food_category}</p>
              <p style={styles.meta}>Quantity: {d.quantity}</p>
              <p style={styles.meta}>Status: {d.status}</p>
            </div>
          ))}

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
  container: { display: "flex", justifyContent: "center", padding: "30px 16px" },
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
  form: { display: "grid", gap: "10px", marginBottom: "18px" },
  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    fontSize: "14px"
  },
  card: {
    border: "1px solid #eaeaea",
    borderRadius: "12px",
    padding: "14px",
    background: "#fafafa",
    marginBottom: "12px"
  },
  foodTitle: { margin: 0, fontSize: "18px", fontWeight: 800 },
  meta: { margin: "6px 0", color: "#555", fontSize: "13px" },
  primaryBtn: {
    background: "#2e7d32",
    color: "white",
    border: "none",
    borderRadius: "10px",
    padding: "12px",
    fontWeight: 800,
    cursor: "pointer"
  },
  secondaryBtn: {
    marginTop: "10px",
    background: "white",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "12px",
    width: "100%",
    fontWeight: 800,
    cursor: "pointer"
  }
};
