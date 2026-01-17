import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function NgoLogin() {
  const navigate = useNavigate();
  const [ngoName, setNgoName] = useState("");
  const [city, setCity] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // MVP: fake login
    if (!ngoName || !city) {
      alert("Please fill all fields");
      return;
    }

    navigate("/ngo-dashboard");
  };

  return (
    <div style={styles.page}>
      <Navbar />

      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>NGO Login</h2>
          <p style={styles.subtitle}>
            Claim verified donations and distribute safely.
          </p>

          <form onSubmit={handleLogin} style={styles.form}>
            <label style={styles.label}>NGO Name</label>
            <input
              style={styles.input}
              placeholder="Your NGO name"
              value={ngoName}
              onChange={(e) => setNgoName(e.target.value)}
            />

            <label style={styles.label}>City</label>
            <input
              style={styles.input}
              placeholder="Your city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <button style={styles.primaryBtn} type="submit">
              Continue
            </button>

            <button
              style={styles.secondaryBtn}
              type="button"
              onClick={() => navigate("/")}
            >
              Back to Home
            </button>
          </form>
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
    padding: "40px 16px",
  },
  card: {
    width: "100%",
    maxWidth: "420px",
    background: "white",
    borderRadius: "14px",
    padding: "22px",
    border: "1px solid #ececec",
    boxShadow: "0px 6px 16px rgba(0,0,0,0.08)",
  },
  title: { margin: 0, fontSize: "24px", fontWeight: 800, color: "#222" },
  subtitle: { marginTop: "8px", marginBottom: "18px", color: "#666" },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  label: { fontSize: "13px", fontWeight: 700, color: "#444" },
  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    outline: "none",
  },
  primaryBtn: {
    marginTop: "6px",
    background: "#2e7d32",
    color: "white",
    border: "none",
    borderRadius: "10px",
    padding: "12px",
    fontWeight: 800,
    cursor: "pointer",
  },
  secondaryBtn: {
    background: "white",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "12px",
    fontWeight: 800,
    cursor: "pointer",
  },
};
