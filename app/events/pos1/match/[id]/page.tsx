"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import {
  players,
  rankings,
  matches,
  getPlayerById,
  getMatchById,
} from "@/app/lib/data";

// ----------------------------------------------------
// 🎨 样式常量与配色
// ----------------------------------------------------

// 排名对应颜色 (名牌背景色)
const rankColors: Record<number, string> = {
  1: "#ff0004ff", // 冠军 (红色)
  2: "#FFD700", // 亚军金
  3: "#C0C0C0", // 季军银
  4: "#CD7F32", // 第四名铜
  
};

// 默认名牌颜色 (无排名时)
const DEFAULT_NAME_BG = "rgba(255, 255, 255, 0.1)";

// ----------------------------------------------------
// ⚙️ 辅助函数
// ----------------------------------------------------

function getPlayerRankColor(id: string) {
  for (const hand of ["left", "right"] as const) {
    for (const weight of ["65kg", "75kg", "85kg", "open"] as const) {
      const list = rankings[hand][weight];
      const index = list.indexOf(id);
      if (index !== -1 && index + 1 <= 4) {
        return rankColors[index + 1];
      }
    }
  }
  return null;
}

// ----------------------------------------------------
// 📄 页面组件
// ----------------------------------------------------

export default function MatchPage() {
  const { id } = useParams();
  const match = getMatchById(id as string);

  if (!match)
    return (
      <div style={{ paddingTop: "200px", textAlign: "center", color: "white" }}>
        ❌ 找不到该比赛信息
      </div>
    );

  const p1 = getPlayerById(match.player1);
  const p2 = getPlayerById(match.player2);
  const winnerPlayer = getPlayerById(match.winner);

  // 获取排位颜色
  const p1Color = getPlayerRankColor(match.player1);
  const p2Color = getPlayerRankColor(match.player2);

  // 判断是否已完赛
  const isFinished = !!match.winner;

  return (
    <div
      style={{
        // 保持顶部间距不变
        paddingTop: "180px", 
        paddingBottom: "100px",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a1a1a 0%, #2e2828 100%)",
        color: "white",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* 🔙 返回按钮 */}
      <div style={{ maxWidth: "800px", margin: "0 auto 20px", padding: "0 20px" }}>
        <Link
          href="/events/pos1"
          style={{
            display: "inline-flex",
            alignItems: "center",
            background: "rgba(255,255,255,0.1)",
            padding: "8px 20px", // 稍微减小内边距
            borderRadius: "50px",
            textDecoration: "none",
            color: "#ccc",
            fontSize: "14px", // 稍微减小字体
            fontWeight: 500,
            backdropFilter: "blur(10px)",
            transition: "all 0.3s ease",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          ⬅ 返回赛事列表
        </Link>
      </div>

      {/* ⚔️ 主对决卡片 (Glassmorphism 风格) */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "24px",
          maxWidth: "800px",
          margin: "0 auto",
          // ⭐ 重点修改 1：大幅减小上下内边距
          padding: "25px 40px", 
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
          backdropFilter: "blur(20px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* 顶部标签栏 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            // ⭐ 重点修改 2：减小下方间距
            marginBottom: "20px", 
            flexWrap: "wrap",
          }}
        >
          <InfoTag text={match.weight} color="#3498db" />
          <InfoTag text={match.hand === "left" ? "左手 LEFT" : "右手 RIGHT"} color="#e67e22" />
          <InfoTag text={match.format} color="#9b59b6" />
        </div>

        {/* 🥊 选手 VS 区域 */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            // ⭐ 重点修改 3：减小下方间距 (如果下面有结果区域)
            marginBottom: isFinished ? "20px" : "0px",
          }}
        >
          <PlayerCard
            player={p1}
            rankColor={p1Color}
            isWinner={match.winner === p1?.id}
            align="left"
          />

          <div style={{ textAlign: "center", padding: "0 10px" }}>
            <div
              style={{
                fontSize: "40px", // 稍微减小 VS 字号
                fontWeight: "900",
                background: "linear-gradient(to bottom, #fff, #999)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontStyle: "italic",
              }}
            >
              VS
            </div>
            {isFinished && (
              <div
                style={{
                  marginTop: "8px",
                  background: "#27ae60",
                  color: "white",
                  padding: "4px 12px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                已完赛
              </div>
            )}
          </div>

          <PlayerCard
            player={p2}
            rankColor={p2Color}
            isWinner={match.winner === p2?.id}
            align="right"
          />
        </div>

        {/* 🏆 比赛结果详情 */}
        {isFinished && (
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: "20px", // 减小上方间距
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "#aaa", fontSize: "12px", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "2px" }}>Match Result</h3>
            
            <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "10px" }}>
               <span style={{ fontSize: "16px", color: "#888" }}>获胜者</span>
               <span style={{ fontSize: "24px", fontWeight: "bold", color: "#fff" }}>
                 {winnerPlayer?.name}
               </span>
            </div>
            
            <div style={{ marginTop: "5px" }}>
              <span style={{ 
                fontSize: "48px", // 稍微减小分数
                fontWeight: "800", 
                letterSpacing: "4px",
                color: "#ffda79",
                textShadow: "0 0 20px rgba(255, 218, 121, 0.4)"
              }}>
                {match.score}
              </span>
            </div>
            
            <div style={{ marginTop: "10px", color: "#666", fontSize: "12px" }}>
               {match.date}
            </div>
          </div>
        )}
      </div>

      {/* 🎥 视频区域 (紧贴上方) */}
      <div
        style={{
          // ⭐ 重点修改 4：大幅减小视频区域与卡片的距离
          marginTop: "30px", 
          display: "flex",
          justifyContent: "center",
        }}
      >
        {match.video ? (
          <div style={{ width: "90%", maxWidth: "800px" }}>
             <div style={{ marginBottom: "10px", display:"flex", alignItems:"center", gap:"8px", justifyContent: "center", color: "#ccc" }}>
                <span style={{ fontSize: "18px" }}>🎬</span>
                <span style={{ fontSize: "16px", fontWeight:"bold" }}>比赛回放</span>
             </div>
            <video
              src={match.video}
              controls
              style={{
                width: "100%",
                borderRadius: "16px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            />
          </div>
        ) : (
          <div
            style={{
              padding: "20px",
              background: "rgba(255,255,255,0.03)",
              borderRadius: "16px",
              border: "1px dashed rgba(255,255,255,0.1)",
              textAlign: "center",
              color: "#666",
              width: "80%",
              maxWidth: "600px",
              fontSize: "14px"
            }}
          >
            🎥 暂无比赛视频
          </div>
        )}
      </div>
    </div>
  );
}

// ----------------------------------------------------
// 🧩 子组件：信息标签
// ----------------------------------------------------
function InfoTag({ text, color }: { text: string; color: string }) {
  return (
    <span
      style={{
        background: `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 0.15)`,
        border: `1px solid ${color}`,
        color: color,
        padding: "4px 10px", // 减小内边距
        borderRadius: "6px",
        fontSize: "12px",
        fontWeight: "600",
        letterSpacing: "0.5px",
        textTransform: "uppercase",
      }}
    >
      {text}
    </span>
  );
}

// ----------------------------------------------------
// 🧩 子组件：选手卡片
// ----------------------------------------------------
function PlayerCard({
  player,
  rankColor,
  isWinner,
  align,
}: {
  player: any;
  rankColor: string | null;
  isWinner: boolean;
  align: "left" | "right";
}) {
  const textColor = rankColor ? "#000" : "#fff";
  
  return (
    <Link
      href={`/players/${player?.id}`}
      style={{
        flex: 1,
        textDecoration: "none",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* 头像占位符 (稍微减小尺寸) */}
      <div
        style={{
          width: "70px", // 减小尺寸
          height: "70px",
          borderRadius: "50%",
          background: isWinner 
            ? "linear-gradient(45deg, #ffd700, #f39c12)" 
            : "linear-gradient(to bottom, #444, #333)",
          marginBottom: "10px", // 减小间距
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "28px",
          boxShadow: isWinner ? "0 0 20px rgba(255, 215, 0, 0.3)" : "none",
          border: isWinner ? "2px solid #fff" : "2px solid rgba(255,255,255,0.1)",
        }}
      >
        {isWinner ? "👑" : "👤"}
      </div>

      {/* 名字 */}
      <div
        style={{
          background: rankColor || DEFAULT_NAME_BG,
          color: textColor,
          padding: "6px 18px", // 减小内边距
          borderRadius: "8px",
          fontSize: "18px", // 减小字体
          fontWeight: "bold",
          boxShadow: rankColor ? "0 4px 15px rgba(0,0,0,0.3)" : "none",
          minWidth: "100px",
          marginBottom: "6px",
          whiteSpace: "nowrap",
        }}
      >
        {player?.name}
      </div>

      {/* 城市信息 */}
      <div style={{ color: "#888", fontSize: "12px" }}>
        {player?.city || player?.country || "中国"}
      </div>
      
    </Link>
  );
}