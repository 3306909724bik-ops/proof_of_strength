"use client";

import Link from "next/link";
import { matches, players } from "@/app/lib/data";
import { useLanguage } from "@/app/context/LanguageContext";

export default function POS2Page() {
  // ⭐ 关键修改：筛选 pos2 的比赛
  const eventMatches = matches.filter((m) => m.event === "pos2");
  const { lang } = useLanguage();

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
      {/* ⚠️ 注意：你需要上传一张名为 pos2_event_button.jpg 的图片到 public 文件夹，或者暂时用 pos1 的图 */}
      <img
        src="/pos1_event_button.jpg" 
        alt="POS2 Event Banner"
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

      {/* 标题 (可选，因为还没有 POS2 的专用 Banner 图，加个文字说明清楚点) */}
      <h1 style={{ marginBottom: "40px", fontSize: "32px", fontWeight: "bold" }}>
        {lang === 'zh' ? "力之证第二届单挑赛" : "Proof of Strength 2"}
      </h1>

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
            // ⭐ 关键修改：链接指向 pos2 的详情页
            href={`/events/pos2/match/${m.id}`}
            style={{
              borderRadius: "8px",
              // 这里我保持了红色背景，如果你想区分 POS2，可以改颜色，例如深蓝色 "#1e3799"
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