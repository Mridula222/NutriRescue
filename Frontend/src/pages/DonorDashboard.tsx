import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function DonorDashboard() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <Navbar />

      <div style={styles.container}>
        <div style={styles.box}>
          <h2 style={styles.title}>Donor Dashboard</h2>
          <p style={styles.subtitle}>
            Post surplus food listings and track donation status.
          </p>

          <div style={styles.card}>
            <h4 style={styles.foodTitle}>Pasta & Salad</h4>
            <p style={styles.meta}>Quantity: 30 servings</p>
            <p style={styles.meta}>Status: ✅ Verified Safe</p>
          </div>

          <button
            style={styles.primaryBtn}
            onClick={() => alert("Next: Add Post Food Form")}
          >
            Post New Food +
          </button>

          <button style={styles.secondaryBtn} onClick={() => navigate("/")}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh", background: "#f7f4ef" },
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "30px 16px",
  },
  box: {
    width: "100%",
    maxWidth: "680px",
    background: "white",
    borderRadius: "14px",
    padding: "22px",
    border: "1px solid #ececec",
    boxShadow: "0px 6px 16px rgba(0,0,0,0.08)",
  },
  title: { margin: 0, fontSize: "24px", fontWeight: 800, color: "#222" },
  subtitle: { marginTop: "8px", color: "#666", marginBottom: "16px" },
  card: {
    border: "1px solid #eaeaea",
    borderRadius: "12px",
    padding: "14px",
    background: "#fafafa",
    marginBottom: "14px",
  },
  foodTitle: { margin: 0, fontSize: "18px", fontWeight: 800 },
  meta: { margin: "6px 0", color: "#555", fontSize: "13px" },
  primaryBtn: {
    background: "#2e7d32",
    color: "white",
    border: "none",
    borderRadius: "10px",
    padding: "12px",
    width: "100%",
    fontWeight: 800,
    cursor: "pointer",
  },
  secondaryBtn: {
    marginTop: "10px",
    background: "white",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "12px",
    width: "100%",
    fontWeight: 800,
    cursor: "pointer",
  },
};
