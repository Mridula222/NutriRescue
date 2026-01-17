import Navbar from "../components/Navbar";
import FoodCard from "../components/FoodCard";
import SectionTitle from "../components/SectionTitle";
import ImpactCard from "../components/ImpactCard";

export default function LandingPage() {
  return (
    <div style={styles.page}>
      <Navbar/>

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Rescue Surplus Food. Distribute Safely.</h1>

        <p style={styles.heroSubtitle}>
          Connect donors with NGOs, ensure food safety checks, and deliver
          nutrition where it matters most.
        </p>

        <button style={styles.ctaBtn} onClick={() => alert("Get Started")}>
          Get Started
        </button>

        <p style={styles.heroSmallText}>
          No cost. No wastage. Just impact.
        </p>
      </section>

      {/* DASHBOARDS */}
      <section style={styles.dualSection}>
        {/* Donor Card */}
        <div style={styles.panel}>
          <div style={{ ...styles.panelHeader, background: "#2b83c6" }}>
            Donor Dashboard
          </div>

          <div style={styles.panelBody}>
            <div style={styles.panelSubHeader}>Hotel ABC</div>

            <div style={styles.donorItemCard}>
              <div style={{ flex: 1 }}>
                <h4 style={styles.foodTitle}>Pasta & Salad</h4>

                <p style={styles.foodInfo}>Quantity: 30 servings</p>
                <p style={styles.foodInfo}>Pickup window: Next 2 hours</p>

                <div style={styles.safeBadge}>Status: Safe for Donation</div>
              </div>

              <img
                src="https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?w=400"
                alt="Food"
                style={styles.foodImage}
              />
            </div>

            <button
              style={styles.postBtn}
              onClick={() => alert("Post new food")}
            >
              Post New Food +
            </button>

            <div style={styles.alertBox}>
              ⚠️ Expiry Alert: Sandwiches — Expired and Removed
            </div>
          </div>
        </div>

        {/* NGO Card */}
        <div style={styles.panel}>
          <div style={{ ...styles.panelHeader, background: "#ef7e3b" }}>
            NGO Food Listings
          </div>

          <div style={styles.panelBody}>
            <div style={styles.panelSubHeader}>Available Donations</div>

            <div style={styles.listStack}>
              <FoodCard
                imageUrl="https://images.unsplash.com/photo-1600626333392-34c88d256905?w=400"
                title="Veg Biryani"
                meta="20 portions | Freshly cooked | Verified safe"
                actionLabel="Claim Now"
                onAction={() => alert("Claimed Veg Biryani")}
              />

              <FoodCard
                imageUrl="https://images.unsplash.com/photo-1604908176997-125f25cc500f?w=400"
                title="Grilled Chicken"
                meta="15 servings | Safe to consume"
                actionLabel="Claimed"
                disabled
              />

              <FoodCard
                imageUrl="https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400"
                title="Dairy Desserts"
                meta="10 cups | Expires in 1 hour | Priority pickup"
                actionLabel="Claim Now"
                onAction={() => alert("Claimed Desserts")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <SectionTitle title="Impact Summary" />

      <section style={styles.impactGrid}>
        <ImpactCard
          icon="🍽️"
          title="Meals Saved"
          value="120"
          description="Plates delivered to people in need"
        />
        <ImpactCard
          icon="🌿"
          title="Food Waste Reduced"
          value="45 kg"
          description="Surplus redirected from landfill"
        />
        <ImpactCard
          icon="⚠️"
          title="Unsafe Donations Blocked"
          value="8"
          description="Rejected for quality & expiry risks"
        />
        <ImpactCard
          icon="🌍"
          title="CO₂ Emissions Saved"
          value="75 kg"
          description="Reduced carbon impact via rescue"
        />
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerTitle}>NutriRescue © 2026</div>
        <div style={styles.footerText}>
          Built for safe food rescue and verified nutrition delivery.
        </div>
      </footer>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#f7f4ef",
    fontFamily: "system-ui, Arial, sans-serif",
  },

  hero: {
    textAlign: "center",
    padding: "48px 18px",
  },
  heroTitle: {
    margin: 0,
    fontSize: "40px",
    fontWeight: 800,
    color: "#2f2f2f",
  },
  heroSubtitle: {
    maxWidth: "720px",
    margin: "14px auto 18px",
    fontSize: "16px",
    color: "#555",
    lineHeight: 1.6,
  },
  ctaBtn: {
    background: "#2e7d32",
    color: "white",
    border: "none",
    padding: "12px 24px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: 800,
    fontSize: "14px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.12)",
  },
  heroSmallText: {
    marginTop: "10px",
    fontSize: "12px",
    color: "#777",
  },

  dualSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "22px",
    padding: "20px 22px",
    maxWidth: "1150px",
    margin: "0 auto",
  },

  panel: {
    background: "#eaf1f7",
    borderRadius: "14px",
    overflow: "hidden",
    border: "1px solid rgba(0,0,0,0.06)",
    boxShadow: "0px 6px 16px rgba(0,0,0,0.06)",
  },

  panelHeader: {
    padding: "14px 16px",
    color: "white",
    fontWeight: 800,
    textAlign: "center",
    fontSize: "18px",
  },

  panelBody: {
    padding: "16px",
  },

  panelSubHeader: {
    textAlign: "center",
    color: "#444",
    fontWeight: 700,
    marginBottom: "14px",
  },

  donorItemCard: {
    background: "white",
    borderRadius: "12px",
    border: "1px solid #e9e9e9",
    padding: "14px",
    display: "flex",
    alignItems: "center",
    gap: "14px",
    boxShadow: "0px 3px 10px rgba(0,0,0,0.06)",
  },

  foodTitle: {
    margin: "0 0 6px",
    fontSize: "18px",
    color: "#222",
  },

  foodInfo: {
    margin: "4px 0",
    color: "#666",
    fontSize: "13px",
  },

  safeBadge: {
    marginTop: "10px",
    padding: "8px 10px",
    borderRadius: "10px",
    background: "#e7f6ea",
    border: "1px solid #bde5c5",
    color: "#1f6b25",
    fontWeight: 800,
    fontSize: "13px",
    width: "fit-content",
  },

  foodImage: {
    width: "92px",
    height: "72px",
    objectFit: "cover",
    borderRadius: "14px",
    border: "1px solid #eee",
  },

  postBtn: {
    marginTop: "14px",
    width: "100%",
    background: "#2e7d32",
    color: "white",
    border: "none",
    padding: "12px",
    borderRadius: "10px",
    fontWeight: 800,
    cursor: "pointer",
  },

  alertBox: {
    marginTop: "12px",
    padding: "12px",
    borderRadius: "10px",
    background: "#ffdede",
    border: "1px solid #ffb8b8",
    color: "#9b1c1c",
    fontWeight: 700,
    fontSize: "13px",
    textAlign: "center",
  },

  listStack: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  impactGrid: {
    maxWidth: "1150px",
    margin: "0 auto",
    padding: "0px 22px 26px",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "14px",
  },

  footer: {
    marginTop: "20px",
    background: "#ffffff",
    borderTop: "1px solid #e7e7e7",
    textAlign: "center",
    padding: "18px 10px",
  },
  footerTitle: {
    fontWeight: 800,
    color: "#333",
  },
  footerText: {
    marginTop: "4px",
    fontSize: "12px",
    color: "#666",
  },
};
