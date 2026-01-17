type ImpactCardProps = {
  title: string;
  value: string;
  description: string;
  icon: string; // emoji (simple MVP)
};

export default function ImpactCard({
  title,
  value,
  description,
  icon,
}: ImpactCardProps) {
  return (
    <div style={styles.card}>
      <div style={styles.icon}>{icon}</div>

      <div>
        <div style={styles.title}>{title}</div>
        <div style={styles.value}>{value}</div>
        <div style={styles.desc}>{description}</div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    background: "white",
    borderRadius: "14px",
    border: "1px solid #ececec",
    padding: "16px",
    display: "flex",
    gap: "12px",
    alignItems: "center",
    boxShadow: "0px 3px 10px rgba(0,0,0,0.06)",
  },
  icon: {
    fontSize: "28px",
    width: "46px",
    height: "46px",
    borderRadius: "999px",
    background: "#f3f3f3",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "13px",
    fontWeight: 700,
    color: "#555",
  },
  value: {
    fontSize: "22px",
    fontWeight: 800,
    color: "#222",
    marginTop: "2px",
  },
  desc: {
    fontSize: "12px",
    color: "#777",
    marginTop: "2px",
  },
};
