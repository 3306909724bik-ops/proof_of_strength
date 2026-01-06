"use client";

import { players, rankings } from "@/app/lib/data";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext"; // 引入

// ... 样式常量保持不变 ...
const fontStack = `-apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif`;

const rankColors: Record<number, string> = {
  1: "#ff0004ff", // 冠军红
  2: "#FFD700",   // 亚军金
  3: "#C0C0C0",   // 季军银
  4: "#cd7f32",   // 第四名铜
};

const quotes = [
  "勒万为了在二番战击败恶魔斯，每天训练6小时",
  "德文12年夺得世界冠军后重伤，但他花了十年重返世界第二",
  "“不用怕被翻腕，只要你的信念不折。” ——恶魔斯",
  "“当你感到极限，那就是腕力定义你的时候。” ——哈钦斯",
  "“最强的对手不是别人，是你心中说不行的声音” ——丹尼斯",
  "“保持强壮，保持巨大” ——德文",
  "别担心硬件，你远远没到你的上限",
  "金井和我们是同人种",
  "“成为伟大的腕力运动员：第一永远热爱，第二永不放弃。” ——德文",
  "“我小时候也是哑铃都拿不起的小孩，现在我却战无不胜。” ——勒万",
  "“相信自己比什么都重要，我早已成为胜利的代名词” ——勒万",
  "“我只知道哪怕输也要让对手赢得不轻松。” ——马特",
];

interface Props {
  hand: "left" | "right";
  weight: "65kg" | "75kg" | "85kg" | "open";
}

export default function RankingPage({ hand, weight }: Props) {
  const { t, lang } = useLanguage(); // 获取上下文

  const order = rankings[hand][weight];

  const data = order
    .map((id) => players.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  // 体重显示：无差别特殊处理
  const weightName = weight === "open" 
    ? (lang === 'zh' ? "无差别" : "OPEN") 
    : weight;

  // 手显示
  const handName = lang === 'zh'
    ? (hand === "left" ? "左手" : "右手")
    : (hand === "left" ? "LEFT" : "RIGHT");

  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, [hand, weight]);

  return (
    <div
      style={{
        fontFamily: fontStack,
        color: "#fff",
        minHeight: "calc(100vh - 160px)",
        paddingBottom: "80px",
        background: "#2e2828ff",
      }}
    >
      {/* 顶部标题区域 */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1
          style={{
            margin: "0 0 10px 0",
            fontSize: "42px",
            fontWeight: 900,
            fontStyle: "italic",
            letterSpacing: "-1px",
            background: "linear-gradient(180deg, #ff4d4d 0%, #b30000 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.5))",
          }}
        >
          {handName} · {weightName}
        </h1>
        
        <div
          style={{
            fontSize: "14px",
            color: "#ccc", 
            fontWeight: 700,
            letterSpacing: "6px",
            textTransform: "uppercase",
            opacity: 0.9,
          }}
        >
          - Proof of Strength {t('ranking_title_suffix')} -
        </div>
      </div>

      {/* 主体内容区：双栏布局 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          maxWidth: "900px", 
          margin: "0 auto",
          padding: "0 20px",
          gap: "30px",
        }}
      >
        {/* 左侧：排行榜列表 */}
        <div style={{ 
            flex: 1, 
            minWidth: 0,
            background: "rgba(255, 255, 255, 0.04)", 
            borderRadius: "20px", 
            padding: "30px 25px", 
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)", 
            border: "1px solid rgba(255,255,255,0.08)", 
        }}>
          
          {/* 表头 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "70px 1fr",
              padding: "0 0 15px 0",
              borderBottom: "2px solid rgba(255,255,255,0.15)", 
              marginBottom: "25px",
              color: "#ddd", 
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "1px",
            }}
          >
            <div style={{ textAlign: "center" }}>{t('ranking_col_rank')}</div>
            <div style={{ textAlign: "center" }}>{t('ranking_col_name')}</div>
          </div>

          {/* 选手列表 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {data.map((p, i) => {
              const rank = i + 1;
              const isTop4 = rank <= 4;
              const bg = isTop4 ? rankColors[rank] : "rgba(255,255,255,0.08)";
              const textColor = isTop4 ? "#000" : "#fff";
              const cityColor = isTop4 ? "#333" : "#aaa";
              const cityBg = isTop4 ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.4)";

              return (
                <div
                  key={p.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "70px 1fr",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  {/* (1) 排名数字块 */}
                  <div
                    style={{
                      height: "56px",
                      background: bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "8px",
                      color: textColor,
                      fontSize: "24px",
                      fontWeight: 900,
                      fontStyle: "italic",
                      fontFamily: "Arial Black, sans-serif",
                      textShadow: isTop4 ? "0 1px 0 rgba(255,255,255,0.4)" : "none",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                      zIndex: 2,
                    }}
                  >
                    {rank}
                  </div>

                  {/* (2) 选手信息条 (Link) */}
                  <Link
                    href={`/players/${p.id}?hand=${hand}&weight=${weight}`}
                    style={{
                      textDecoration: "none",
                      height: "56px",
                      background: bg, 
                      borderRadius: "0 8px 8px 0",
                      display: "flex",
                      justifyContent: "center", 
                      alignItems: "center",
                      padding: "0 20px",
                      marginLeft: "-10px", 
                      boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                      transition: "transform 0.2s ease, filter 0.2s ease",
                      position: "relative",
                      zIndex: 1,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateX(5px)";
                      e.currentTarget.style.filter = "brightness(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateX(0)";
                      e.currentTarget.style.filter = "brightness(1)";
                    }}
                  >
                    {/* 名字 (中英切换) */}
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: 900,
                        color: textColor,
                        letterSpacing: "0.5px",
                        textAlign: "center",
                        width: "100%", 
                      }}
                    >
                      {lang === 'zh' ? p.name : p.nameEn}
                    </span>

                    {/* 城市 (中英切换) */}
                    <span
                      style={{
                        position: "absolute",
                        right: "15px", 
                        fontSize: "12px",
                        color: cityColor,
                        background: cityBg,
                        padding: "4px 8px",
                        borderRadius: "4px",
                        fontWeight: 600,
                      }}
                    >
                      {lang === 'zh' ? p.city : p.cityEn}
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* 右侧：纵向提示栏 */}
        <div
          style={{
            width: "40px",
            writingMode: "vertical-rl", 
            textOrientation: "upright", 
            letterSpacing: "6px",
            fontSize: "14px",
            fontWeight: 700,
            color: "#666",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingTop: "50px", 
            paddingLeft: "10px",
            height: "auto",
            minHeight: "400px",
          }}
        >
          <span style={{ marginBottom: "20px", color: "#ff0004" }}>●</span>
          <span style={{ color: "#fff", textShadow: "0 0 10px rgba(255,255,255,0.3)" }}>
            {t('ranking_tip_click')}
          </span>
          <span style={{ marginTop: "10px", color: "#FFD700" }}>
             {t('ranking_tip_detail')}
          </span>
        </div>
      </div>

      {/* 底部激励语 */}
      <div
        style={{
          maxWidth: "600px",
          margin: "40px auto 0", 
          position: "relative",
          padding: "30px 30px",
          background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.2) 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-30px",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "60px",
            color: "#FFD700",
            fontFamily: "serif",
            lineHeight: 1,
            opacity: 0.8,
            textShadow: "0 0 15px rgba(255, 215, 0, 0.4)",
            background: "#2e2828ff",
            padding: "0 20px",
          }}
        >
        </div>

        <p
          style={{
            margin: 0,
            fontSize: "19px",
            fontWeight: 500,
            color: "#f0f0f0",
            fontStyle: "italic",
            fontFamily: "Georgia, serif",
            lineHeight: "1.6",
            letterSpacing: "0.5px",
          }}
        >
          {quote}
        </p>

        <div 
          style={{ 
            width: "40px", 
            height: "3px", 
            background: "#FFD700",
            margin: "20px auto 0",
            opacity: 0.6,
            borderRadius: "2px"
          }} 
        />
      </div>
    </div>
  );
}