"use client";

import { players, rankings } from "@/app/lib/data";
import Link from "next/link";
import { useEffect, useState } from "react";

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

// 激励语
const quotes = [
  "勒万为了在二番战击败恶魔斯，每天训练6小时",
  "德文12年夺得世界冠军后重伤，但他花了十年重返世界第二",
  "“不用怕被翻腕，只要你的信念不折。” ——恶魔斯",
  "“当你感到极限，那就是腕力定义你的时候，放弃还是拼尽一切” ——哈钦斯",
  "“最强的对手不是别人，是你心中说不行的声音” ——丹尼斯",
  "“保持强壮，保持巨大” ——德文",
  "别担心硬件，你远远没到你的上限",
  "金井和我们是同人种",
  "德文在高中甚至不是全班最强",
  "“成为伟大的腕力运动员有两条规则，第一永远热爱，第二永不放弃。” ——德文",
  "“我小时候也是哑铃都拿不起的小孩，现在我却战无不胜。” ——勒万",
  "“相信自己比什么都重要，我从不考虑比赛输赢，我早已成为胜利的代名词” ——勒万",
  "“我只知道哪怕输也要让对手赢得不轻松，我喜欢死战不退的感觉。” ——马特"
];

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
    open: "无差别",
  };

  // 避免 hydration mismatch
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, [hand, weight]);

  return (
    <div
      style={{
        ...containerStyle,
        minHeight: "calc(100vh - 160px)", 
      }}
    >
      <h1 style={{ color: "#000", marginBottom: "30px", fontSize: "32px" }}>
        {hand === "left" ? "左手" : "右手"} · {weightName[weight]} 排名
      </h1>

      {/* ⭐ 新增：提示语放到排行榜卡片上方 */}
      <div
        style={{
          fontSize: "18px",
          fontWeight: 600,
          marginBottom: "16px",
          background: "#fff7e6",
          padding: "8px 18px",
          borderRadius: "10px",
          display: "inline-block",
          border: "1px solid #f2c48d",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        点击选手名字查看选手信息
      </div>

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

      {/* 激励语句 */}
      <div
        style={{
          maxWidth: "550px",
          margin: "25px auto 0",
          padding: "16px 20px",
          background: "#fff4e6",
          borderRadius: "12px",
          fontSize: "17px",
          fontWeight: 500,
          color: "#222",
          border: "1px solid #f0d2b0",
          boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
        }}
      >
        {quote}
      </div>
    </div>
  );
}
