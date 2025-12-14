"use client";

import { useParams } from "next/navigation";
import { players, rankings } from "@/app/lib/data";

// -------------------------
// 类型定义（完全类型安全）
// -------------------------
type Hand = keyof typeof rankings; // "left" | "right"
type Weight = keyof (typeof rankings.left); // "65kg" | "75kg" | "85kg" | "open"

// 中文体重名
const weightName: Record<Weight, string> = {
  "65kg": "65kg",
  "75kg": "75kg",
  "85kg": "85kg",
  open: "无差别",
};

// 勋章背景色
const medalColors: Record<number, string> = {
  1: "#ff0000", // 冠军 红
  2: "#FFD700", // 亚军 金
  3: "#C0C0C0", // 季军 银
  4: "#cd7f32", // 殿军 铜
};

// -------------------------
// 主组件
// -------------------------
export default function InfoPage() {
  const { id } = useParams();
  const player = players.find((p) => p.id === id);

  if (!player) {
    return <div style={{ padding: "20px" }}>未找到选手。</div>;
  }

  // 查找所有手 & 体重下的排名
  const rankResults: {
    hand: Hand;
    weight: Weight;
    rank: number;
  }[] = [];

  (["left", "right"] as Hand[]).forEach((hand) => {
    (["65kg", "75kg", "85kg", "open"] as Weight[]).forEach((weight) => {
      const list = rankings[hand][weight];
      const index = list.indexOf(id as string);
      if (index !== -1 && index + 1 <= 4) {
        rankResults.push({
          hand,
          weight,
          rank: index + 1,
        });
      }
    });
  });

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {/* 标题 */}
      <h2
        style={{
          fontSize: "26px",
          fontWeight: "bold",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        选手基本信息
      </h2>

      {/* 基本资料卡片 */}
      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "16px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          marginBottom: "30px",
        }}
      >
        <p style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "8px" }}>
          姓名：{player.name}
        </p>
        <p style={{ fontSize: "17px", opacity: 0.8 }}>
          城市：{player.city}
        </p>
      </div>

      {/* Top4 排名部分 */}
      <h3
        style={{
          marginTop: "15px",
          marginBottom: "15px",
          fontSize: "22px",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        该选手入围 Top 4 排名：
      </h3>

      {rankResults.length === 0 ? (
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
          }}
        >
          暂无前四名排名
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gap: "15px",
          }}
        >
          {rankResults.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: medalColors[item.rank],
                color: "white",
                padding: "15px 20px",
                borderRadius: "12px",
                fontSize: "18px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              }}
            >
              <span>
                {item.hand === "left" ? "左手" : "右手"} ·{" "}
                {weightName[item.weight]}
              </span>

              <b
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                第 {item.rank} 名
              </b>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
