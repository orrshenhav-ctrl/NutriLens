export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #07111f 0%, #0f172a 55%, #123c2f 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "32px",
      }}
    >
      <nav
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: "28px", margin: 0 }}>🥗 NutriLens</h2>

        <button
          style={{
            background: "transparent",
            color: "white",
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: "10px",
            padding: "10px 18px",
            cursor: "pointer",
          }}
        >
          Sign In
        </button>
      </nav>

      <section
        style={{
          maxWidth: "1100px",
          margin: "90px auto 0",
          display: "flex",
          flexWrap: "wrap",
          gap: "48px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ maxWidth: "560px" }}>
          <p
            style={{
              color: "#86efac",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            AI-POWERED NUTRITION COACH
          </p>

          <h1
            style={{
              fontSize: "clamp(48px, 7vw, 82px)",
              lineHeight: 1,
              margin: "18px 0",
            }}
          >
            Understand your food.
            <br />
            Improve your habits.
          </h1>

          <p
            style={{
              fontSize: "21px",
              lineHeight: 1.6,
              color: "#cbd5e1",
              maxWidth: "520px",
            }}
          >
            Upload a meal photo and let NutriLens estimate calories,
            protein, carbohydrates, and fat — then explain what your meal
            means for your goals.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
              marginTop: "34px",
            }}
          >
            <button
              style={{
                background: "#22c55e",
                color: "#052e16",
                border: "none",
                borderRadius: "14px",
                padding: "16px 26px",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Analyze a meal
            </button>

            <button
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "white",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: "14px",
                padding: "16px 26px",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              See how it works
            </button>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            maxWidth: "390px",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: "24px",
            padding: "24px",
            boxShadow: "0 24px 70px rgba(0,0,0,0.35)",
          }}
        >
          <div
            style={{
              height: "210px",
              borderRadius: "18px",
              background:
                "linear-gradient(135deg, #f59e0b, #ef4444 55%, #7c3aed)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "72px",
            }}
          >
            🍛
          </div>

          <h3 style={{ fontSize: "24px", marginBottom: "8px" }}>
            Chicken rice bowl
          </h3>

          <p style={{ color: "#cbd5e1", marginTop: 0 }}>
            Estimated nutrition
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            {[
              ["Calories", "620 kcal"],
              ["Protein", "42 g"],
              ["Carbs", "68 g"],
              ["Fat", "18 g"],
            ].map(([label, value]) => (
              <div
                key={label}
                style={{
                  background: "rgba(15,23,42,0.75)",
                  borderRadius: "14px",
                  padding: "14px",
                }}
              >
                <div style={{ color: "#94a3b8", fontSize: "14px" }}>
                  {label}
                </div>
                <strong style={{ fontSize: "18px" }}>{value}</strong>
              </div>
            ))}
          </div>

          <p
            style={{
              marginTop: "20px",
              padding: "14px",
              borderRadius: "14px",
              background: "rgba(34,197,94,0.12)",
              color: "#bbf7d0",
              lineHeight: 1.5,
            }}
          >
            Strong post-workout meal. Add vegetables for more fiber and
            micronutrients.
          </p>
        </div>
      </section>
    </main>
  );
}