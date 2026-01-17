type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.line} />
      <h3 style={styles.title}>{title}</h3>
      <div style={styles.line} />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    margin: "28px 0 18px",
    justifyContent: "center",
  },
  title: {
    margin: 0,
    fontSize: "18px",
    fontWeight: 700,
    color: "#444",
  },
  line: {
    height: "1px",
    width: "180px",
    background: "#d8d8d8",
  },
};
