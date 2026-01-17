import Navbar from "../components/Navbar";
import FoodCard from "../components/FoodCard";
import { useNavigate } from "react-router-dom";

export default function NgoDashboard() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <Navbar />

      <div style={styles.container}>
        <div style={styles.box}>
          <h2 style={styles.title}>NGO Dashboard</h2>
          <p style={styles.subtitle}>
            Claim verified donations and manage pickups.
          </p>

          <div style={styles.list}>
            <FoodCard
              imageUrl="https://images.unsplash.com/photo-1600626333392-34c88d256905?w=400"
              title="Veg Biryani"
              meta="20 portions | Verified safe"
              actionLabel="Claim Now"
              onAction={() => alert("Claimed Veg Biryani")}
            />

            <FoodCard
              imageUrl="https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400"
              title="Dairy Desserts"
              meta="10 cups | Expires soon"
              actionLabel="Claim Now"
              onAction={() => alert("Claimed Dairy Desserts")}
            />
          </div>

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
  list: { display: "flex", flexDirection: "column", gap: "12px" },
  secondaryBtn: {
    marginTop: "16px",
    background: "white",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "12px",
    width: "100%",
    fontWeight: 800,
    cursor: "pointer",
  },
};
