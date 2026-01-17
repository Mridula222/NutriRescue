export type FoodCardProps = {

  title: string;
  meta: string;
  actionLabel: string;
  disabled?: boolean;
  onAction?: () => void;
};

export default function FoodCard({
  
  title,
  meta,
  actionLabel,
  disabled = false,
  onAction,
}: FoodCardProps) {
  return (
    <div style={styles.card}>

      <div style={styles.info}>
        <div style={styles.title}>{title}</div>
        <div style={styles.meta}>{meta}</div>
      </div>

      <button
        style={{
          ...styles.actionBtn,
          ...(disabled ? styles.disabledBtn : {}),
        }}
        disabled={disabled}
        onClick={onAction}
      >
        {actionLabel}
      </button>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    background: "white",
    borderRadius: "12px",
    border: "1px solid #e9e9e9",
    padding: "12px",
    display: "flex",
    alignItems: "center",
    gap: "14px",
    boxShadow: "0px 3px 10px rgba(0,0,0,0.06)",
  },
  img: {
    width: "70px",
    height: "52px",
    borderRadius: "10px",
    objectFit: "cover",
    border: "1px solid #eee",
  },
  info: {
    flex: 1,
    minWidth: 0,
  },
  title: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#222",
    marginBottom: "4px",
  },
  meta: {
    fontSize: "13px",
    color: "#666",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  actionBtn: {
    background: "#2e7d32",
    color: "white",
    border: "none",
    padding: "10px 14px",
    borderRadius: "10px",
    fontWeight: 700,
    cursor: "pointer",
    minWidth: "100px",
  },
  disabledBtn: {
    background: "#e6e6e6",
    color: "#555",
    cursor: "not-allowed",
  },
};
