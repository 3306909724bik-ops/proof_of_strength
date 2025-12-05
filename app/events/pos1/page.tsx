"use client";

import Link from "next/link";
import { matches, players } from "@/app/lib/data";

// 工具：根据 id 找选手名字
function getPlayerName(id: string) {
  return players.find((p) => p.id === id)?.name ?? "未知选手";
}

export default function POS1Page() {
  // 仅选择属于 pos1 的比赛
  const eventMatches = matches.filter((m) => m.event === "pos1");

  return (
    <div
      style={{
        paddingTop: "200px",
        minHeight: "100vh",
        background: "#2e2828ff", // ⭐ 你的红色背景
        color: "#ffffff",
        textAlign: "center",
      }}
    >
      {/* ⭐ 用你的 POS1 按钮图片替代标题 */}
      <img
        src="/pos1_event_button.jpg" // ← 你需要放在 public 文件夹
        alt="POS1 Event Banner"
        style={{
          width: "700px",
          maxWidth: "90%",
          height: "auto",
          margin: "0 auto 60px auto",
          display: "block",
          borderRadius: "14px",
          boxShadow: "0 8px 22px rgba(0,0,0,0.35)",
        }}
      />

      {/* ⭐ 卡片容器 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "24px",
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
              background: "#ff0000ff",
              padding: "20px",
              borderRadius: "16px",
              color: "#000",
              fontWeight: 600,
              boxShadow: "0 6px 14px rgba(0,0,0,0.32)",
              textDecoration: "none",
              transition: "0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
          >
            <div style={{ fontSize: "22px", marginBottom: "12px" }}>
              {getPlayerName(m.player1)} <br /> VS <br /> {getPlayerName(m.player2)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
