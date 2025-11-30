import Image from "next/image";

export default function Home() {
  return (
    <div style={{
      backgroundColor: "#0d3280", // ブランドカラー
      minHeight: "100vh",         // 画面いっぱいの高さ
      color: "white",             // 文字は白
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      fontFamily: "sans-serif"
    }}>
      {/* ヘッダーエリア */}
      <header style={{ marginTop: "40px", marginBottom: "40px", textAlign: "center" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>
          SMART GOLF
        </h1>
        <p style={{ fontSize: "14px", opacity: 0.8 }}>MEMBER PORTAL</p>
      </header>

      {/* メインメニューエリア */}
      <main style={{ width: "100%", maxWidth: "400px", display: "flex", flexDirection: "column", gap: "16px" }}>

        {/* ランク表示カード */}
        <div style={{ backgroundColor: "white", color: "#333", padding: "20px", borderRadius: "12px" }}>
          <p style={{ fontSize: "12px", color: "#666" }}>現在のランク</p>
          <h2 style={{ fontSize: "28px", color: "#0d3280", margin: "5px 0" }}>BRONZE</h2>
          <p style={{ fontSize: "14px" }}>次のランクまであと 3 回来店</p>
        </div>

        {/* ボタン例 */}
        <button style={{
          padding: "16px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#ffffff20", // 半透明の白
          color: "white",
          fontSize: "16px",
          cursor: "pointer"
        }}>
          🎫 保有クーポンを見る
        </button>

        <button style={{
          padding: "16px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#ffffff20",
          color: "white",
          fontSize: "16px",
          cursor: "pointer"
        }}>
          📅 予約サイトへ
        </button>

      </main>

      <footer style={{ marginTop: "auto", padding: "20px", fontSize: "12px", opacity: 0.5 }}>
        © SMART GOLF
      </footer>
    </div>
  );
}