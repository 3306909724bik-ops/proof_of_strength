"use client";

import { players, rankings } from "@/app/lib/data";

// 字体：更现代的 Inter
const containerStyle: React.CSSProperties = {
  fontFamily: `"Inter", "Segoe UI", "Helvetica Neue", Arial, sans-serif`,
  color: "#000",
  textAlign: "center",
  marginTop: "40px",
};

// 排名颜色映射
const rankColors: Record<number, string> = {
  1: "#ff0004ff", // 红色
  2: "#d4af37",  // 金色
  3: "#C0C0C0",  // 银色
  4: "#cd7f32",  // 铜色
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
      <h1 style={{ color: "#000000ff", marginBottom: "30px" }}>
        {hand === "left" ? "左手" : "右手"} · {weightName[weight]} 排名
      </h1>

      {/* 两列布局 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "100px auto",
          maxWidth: "500px",
          margin: "0 auto",
          rowGap: "12px",
          fontSize: "20px",
          fontWeight: 600,
        }}
      >
        {/* 列头 */}
        <div style={{ borderBottom: "2px solid #333", paddingBottom: "6px" }}>
          排名
        </div>
        <div style={{ borderBottom: "2px solid #333", paddingBottom: "6px" }}>
          姓名
        </div>

        {/* 列表 */}
        {data.map((p, i) => {
          const rank = i + 1;
          const bgColor = rankColors[rank] ?? "transparent";

          return (
            <>
              {/* 排名列 */}
              <div
                key={`rank-${p.id}`}
                style={{
                  background: bgColor,
                  padding: "6px 0",
                  borderRadius: rank <= 4 ? "6px 0 0 6px" : undefined,
                }}
              >
                {rank}
              </div>

              {/* 姓名列 */}
              <div
                key={`name-${p.id}`}
                style={{
                  background: bgColor,
                  padding: "6px 10px",
                  borderRadius: rank <= 4 ? "0 6px 6px 0" : undefined,
                }}
              >
                <a
                  href={`/players/${p.id}`}
                  style={{
                    textDecoration: "none",
                    color: "#000", // 姓名黑色字体
                  }}
                >
                  {p.name}（{p.city}）
                </a>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
