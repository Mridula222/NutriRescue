import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header style={styles.header}>
      <div style={styles.brand} onClick={() => navigate("/")}>
        NutriRescue
      </div>

      <div style={styles.actions}>
        <button style={styles.btnLight} onClick={() => navigate("/donor-login")}>
          Donor Login
        </button>

        <button style={styles.btnLight} onClick={() => navigate("/ngo-login")}>
          NGO Login
        </button>
      </div>
    </header>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    background: "#2e7d32",
    padding: "16px 28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brand: {
    color: "white",
    fontSize: "28px",
    fontWeight: 700,
    letterSpacing: "0.3px",
    cursor: "pointer",
  },
  actions: {
    display: "flex",
    gap: "12px",
  },
  btnLight: {
    background: "white",
    color: "#333",
    border: "1px solid #e5e5e5",
    borderRadius: "8px",
    padding: "10px 16px",
    fontWeight: 600,
    cursor: "pointer",
  },
};
