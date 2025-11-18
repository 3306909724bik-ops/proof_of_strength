import "./globals.css";
import Navbar from "../components/Navbar";
import HideNavbarWrapper from "../components/HideNavbarWrapper";

export const metadata = {
  title: "腕力实力排名网站",
  description: "Armwrestling Rankings and Match Records",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body style={{ margin: 0 }}>

        {/* 客户端判断是否隐藏 */}
        <HideNavbarWrapper>
          {/* 顶部横幅 */}
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

          {/* 导航栏 */}
          <nav
            style={{
              position: "fixed",
              top: "100px",
              width: "100%",
              zIndex: 1001,
              background: "#222",
            }}
          >
            <Navbar />
          </nav>
        </HideNavbarWrapper>

        {/* 内容区域：根据是否显示 Navbar 自动撑开  */}
        <main style={{ padding: "20px", paddingTop: "160px" }}>
          {children}
        </main>

      </body>
    </html>
  );
}
