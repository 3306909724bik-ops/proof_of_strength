"use client";

import { useParams } from "next/navigation";
import { players, rankings } from "@/app/lib/data";
import { useLanguage } from "@/app/context/LanguageContext"; // 引入

// 类型定义
type Hand = keyof typeof rankings;
type Weight = keyof (typeof rankings.left);

const medalColors: Record<number, string> = {
  1: "#ff0000", 
  2: "#FFD700", 
  3: "#C0C0C0", 
  4: "#cd7f32", 
};

export default function InfoPage() {
  const { id } = useParams();
  const { lang, t } = useLanguage(); // 获取语言

  const player = players.find((p) => p.id === id);

  if (!player) {
    return <div style={{ padding: "20px" }}>{lang === 'zh' ? "未找到选手。" : "Player not found."}</div>;
  }

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
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      {/* 标题 */}
      <h2 style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "20px", textAlign: "center" }}>
        {lang === 'zh' ? "选手基本信息" : "Player Profile"}
      </h2>

      {/* 基本资料卡片 */}
      <div style={{ background: "white", padding: "25px", borderRadius: "16px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", marginBottom: "30px" }}>
        <p style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "8px" }}>
          {lang === 'zh' ? "姓名：" : "Name: "} 
          {lang === 'zh' ? player.name : player.nameEn}
        </p>
        <p style={{ fontSize: "17px", opacity: 0.8 }}>
          {lang === 'zh' ? "城市：" : "City: "}
          {lang === 'zh' ? player.city : player.cityEn}
        </p>
      </div>

      {/* Top4 排名部分 */}
      <h3 style={{ marginTop: "15px", marginBottom: "15px", fontSize: "22px", textAlign: "center", fontWeight: "600" }}>
        {lang === 'zh' ? "该选手入围 Top 4 排名：" : "Top 4 Rankings:"}
      </h3>

      {rankResults.length === 0 ? (
        <div style={{ background: "white", padding: "20px", borderRadius: "12px", textAlign: "center", boxShadow: "0 3px 12px rgba(0,0,0,0.08)" }}>
          {lang === 'zh' ? "暂无前四名排名" : "No Top 4 rankings yet"}
        </div>
      ) : (
        <div style={{ display: "grid", gap: "15px" }}>
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
                {/* 左右手翻译 */}
                {lang === 'zh' 
                  ? (item.hand === "left" ? "左手" : "右手") 
                  : (item.hand === "left" ? "LEFT" : "RIGHT")} 
                {" · "}
                {/* 体重翻译 */}
                {item.weight === 'open' 
                  ? (lang === 'zh' ? "无差别" : "OPEN") 
                  : item.weight}
              </span>

              <b style={{ fontSize: "22px", fontWeight: "bold" }}>
                {lang === 'zh' ? `第 ${item.rank} 名` : `Rank ${item.rank}`}
              </b>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}