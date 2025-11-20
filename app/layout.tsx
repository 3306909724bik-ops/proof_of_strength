import "./globals.css";
import Navbar from "../components/Navbar";
import HideNavbarWrapper from "../components/HideNavbarWrapper";
import ClientPaddingController from "../components/ClientPaddingController";
import { ReactNode } from "react";

export const metadata = {
  title: "腕力实力排名网站",
  description: "Armwrestling Rankings and Match Records",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh">
      <body style={{ margin: 0, padding: 0 }}>
        {/* 顶部 Banner + Navbar */}
        <HideNavbarWrapper>
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

        {/* paddingTop 会自动根据页面类型决定 */}
        <ClientPaddingController>{children}</ClientPaddingController>
      </body>
    </html>
  );
}
