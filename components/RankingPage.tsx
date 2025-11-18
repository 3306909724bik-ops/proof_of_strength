"use client";

import { players, rankings } from "@/app/lib/data";
import Link from "next/link";

// 字体与全局样式
const containerStyle: React.CSSProperties = {
  fontFamily: `"Inter", "Segoe UI", "Helvetica Neue", Arial, sans-serif`,
  color: "#000",
  textAlign: "center",
  marginTop: "40px",
};

// 前 4 名颜色
const rankColors: Record<number, string> = {
  1: "#ff0004ff", // 冠军
  2: "#d4af37",   // 亚军（金色）
  3: "#C0C0C0",   // 白银
  4: "#cd7f32",   // 铜
};

interface Props {
  hand: "left" | "right";
  weight: "65kg" | "75kg" | "85kg" | "open";
}

export default function RankingPage({ hand, weight }: Props) {
  const order = rankings[hand][weight];

  const data = order
    .map((id) => players.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  const weightName = {
    "65kg": "65kg",
    "75kg": "75kg",
    "85kg": "85kg",
    "open": "无差别",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: "#000", marginBottom: "30px", fontSize: "32px" }}>
        {hand === "left" ? "左手" : "右手"} · {weightName[weight]} 排名
      </h1>

      {/* 排行榜卡片 */}
      <div
        style={{
          maxWidth: "550px",
          margin: "0 auto",
          background: "#ffffffcc",
          borderRadius: "14px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          padding: "20px",
        }}
      >
        {/* 表头 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "100px auto",
            fontSize: "20px",
            fontWeight: 700,
            borderBottom: "2px solid #444",
            paddingBottom: "8px",
            marginBottom: "12px",
          }}
        >
          <div>排名</div>
          <div>姓名</div>
        </div>

        {/* 名次列表 */}
        {data.map((p, i) => {
          const rank = i + 1;
          const bg = rankColors[rank] ?? "transparent";

          return (
            <div
              key={p.id}
              style={{
                display: "grid",
                gridTemplateColumns: "100px auto",
                marginBottom: "8px",
              }}
            >
              <div
                style={{
                  background: bg,
                  padding: "8px 0",
                  borderRadius: rank <= 4 ? "8px 0 0 8px" : undefined,
                  fontWeight: 700,
                }}
              >
                {rank}
              </div>

              <Link
                href={`/players/${p.id}?hand=${hand}&weight=${weight}`}
                style={{
                  background: bg,
                  padding: "8px 12px",
                  borderRadius: rank <= 4 ? "0 8px 8px 0" : undefined,
                  textDecoration: "none",
                  color: "#000",
                  fontWeight: 600,
                  transition: "0.15s",
                  display: "block",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    rank <= 4 ? bg : "#f4f4f4")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = bg)
                }
              >
                {p.name}（{p.city}）
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
