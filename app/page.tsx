export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        🥗 NutriLens
      </h1>

      <p style={{ fontSize: "22px", color: "#cbd5e1" }}>
        Your AI Nutrition Coach
      </p>

      <button
        style={{
          marginTop: "40px",
          padding: "15px 35px",
          fontSize: "20px",
          borderRadius: "12px",
          border: "none",
          background: "#22c55e",
          color: "white",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </main>
  );
}