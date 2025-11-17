import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "腕力实力排名网站",
  description: "Armwrestling Rankings and Match Records",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body style={{ margin: 0 }}>

        {/* 固定顶部横幅 */}
        <header
          style={{
            width: "100%",
            height: "100px",
            backgroundImage: "url('/LogoBanner.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1000,
          }}
        />

        {/* 固定导航栏（紧贴 Banner 下方） */}
        <nav
          style={{
            position: "fixed",
            top: "100px",   // Banner 高度
            width: "100%",
            zIndex: 1001,   // 高于 Banner
            background: "#222",
          }}
        >
          <Navbar />
        </nav>

        {/* 主内容区域：让出 Banner + Navbar 的高度 */}
        <main style={{ padding: "20px", paddingTop: "160px" }}>
          {children}
        </main>

      </body>
    </html>
  );
}
