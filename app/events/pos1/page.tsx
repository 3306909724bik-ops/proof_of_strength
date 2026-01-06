"use client";

import Link from "next/link";
import { matches, players } from "@/app/lib/data";
import { useLanguage } from "@/app/context/LanguageContext"; // 1. 引入

export default function POS1Page() {
  const eventMatches = matches.filter((m) => m.event === "pos1");
  const { lang } = useLanguage(); // 2. 获取语言

  // 工具：根据 id 找选手名字 (支持中英切换)
  function getPlayerName(id: string) {
    const p = players.find((p) => p.id === id);
    if (!p) return lang === 'zh' ? "未知选手" : "Unknown";
    return lang === 'zh' ? p.name : p.nameEn;
  }

  return (
    <div
      style={{
        paddingTop: "180px",
        paddingBottom: "100px",
        minHeight: "100vh",
        background: "#2e2828ff",
        color: "#ffffff",
        textAlign: "center",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Banner */}
      <img
        src="/pos1_event_button.jpg"
        alt="POS1 Event Banner"
        style={{
          width: "700px",
          maxWidth: "90%",
          height: "auto",
          margin: "0 auto 60px auto",
          display: "block",
          borderRadius: "8px",
          boxShadow: "0 8px 22px rgba(0,0,0,0.35)",
        }}
      />

      {/* 卡片容器 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "40px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {eventMatches.map((m) => (
          <Link
            key={m.id}
            href={`/events/pos1/match/${m.id}`}
            style={{
              borderRadius: "8px",
              background: "#e60000", 
              border: "1px solid #990000", 
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "55px 20px",
              textDecoration: "none",
              color: "white",
              boxShadow: "0 6px 15px rgba(0,0,0,0.5)",
              transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.6)";
              e.currentTarget.style.background = "#ff1a1a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.5)";
              e.currentTarget.style.background = "#e60000";
            }}
          >
            {/* 左侧选手 */}
            <div style={{ 
              flex: 1, 
              textAlign: "right", 
              fontSize: "30px", 
              fontWeight: "800",
              color: "black",
              letterSpacing: "1px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}>
              {getPlayerName(m.player1)}
            </div>

            {/* 中间 VS */}
            <div
              style={{
                flex: "0 0 60px", 
                textAlign: "center",
                fontSize: "24px", 
                fontWeight: "900", 
                fontStyle: "italic", 
                color: "#000", 
                lineHeight: "1",
                textShadow: "0 0 5px rgba(0,0,0,0.85)", 
                transform: "skew(-12deg)",
                margin: "0 5px",
                zIndex: 2,
              }}
            >
              VS
            </div>

            {/* 右侧选手 */}
            <div style={{ 
              flex: 1, 
              textAlign: "left", 
              fontSize: "30px", 
              fontWeight: "800",
              color: "black",
              letterSpacing: "1px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}>
              {getPlayerName(m.player2)}
            </div>
            
            {/* 装饰线 */}
            <div style={{
                position: "absolute",
                top: 0, left: "50%", bottom: 0, width: "2px",
                background: "rgba(0,0,0,0.15)",
                transform: "skew(-12deg)"
            }} />

          </Link>
        ))}
      </div>
    </div>
  );
}