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
import { useLanguage } from "@/app/context/LanguageContext";

// ... (颜色常量和辅助函数保持不变，或者你可以把它们提取到一个公共组件里) ...
const rankColors: Record<number, string> = {
  1: "#ff0004ff", 2: "#FFD700", 3: "#C0C0C0", 4: "#CD7F32", 
};
const DEFAULT_NAME_BG = "rgba(255, 255, 255, 0.1)";

function getPlayerRankColor(id: string) {
  for (const hand of ["left", "right"] as const) {
    for (const weight of ["65kg", "75kg", "85kg", "open"] as const) {
      const list = rankings[hand][weight];
      const index = list.indexOf(id);
      if (index !== -1 && index + 1 <= 4) return rankColors[index + 1];
    }
  }
  return null;
}

function InfoTag({ text, color }: { text: string; color: string }) {
  return (
    <span style={{ background: `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 0.15)`, border: `1px solid ${color}`, color: color, padding: "4px 10px", borderRadius: "6px", fontSize: "12px", fontWeight: "600", letterSpacing: "0.5px", textTransform: "uppercase" }}>
      {text}
    </span>
  );
}

function PlayerCard({ player, rankColor, isWinner, align }: any) {
  const { lang } = useLanguage();
  const textColor = rankColor ? "#000" : "#fff";
  const name = player ? (lang === 'zh' ? player.name : player.nameEn) : "";
  const city = player ? (lang === 'zh' ? player.city : player.cityEn) : "China";

  return (
    <Link href={`/players/${player?.id}`} style={{ flex: 1, textDecoration: "none", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: "70px", height: "70px", borderRadius: "50%", background: isWinner ? "linear-gradient(45deg, #ffd700, #f39c12)" : "linear-gradient(to bottom, #444, #333)", marginBottom: "10px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "28px", boxShadow: isWinner ? "0 0 20px rgba(255, 215, 0, 0.3)" : "none", border: isWinner ? "2px solid #fff" : "2px solid rgba(255,255,255,0.1)" }}>
        {isWinner ? "👑" : "👤"}
      </div>
      <div style={{ background: rankColor || DEFAULT_NAME_BG, color: textColor, padding: "6px 18px", borderRadius: "8px", fontSize: "18px", fontWeight: "bold", boxShadow: rankColor ? "0 4px 15px rgba(0,0,0,0.3)" : "none", minWidth: "100px", marginBottom: "6px", whiteSpace: "nowrap" }}>
        {name}
      </div>
      <div style={{ color: "#888", fontSize: "12px" }}>{city || "China"}</div>
    </Link>
  );
}

export default function MatchPage() {
  const { id } = useParams();
  const { t, lang } = useLanguage();
  const match = getMatchById(id as string);

  if (!match) return <div style={{ paddingTop: "200px", textAlign: "center", color: "white" }}>{t('match_not_found')}</div>;

  const p1 = getPlayerById(match.player1);
  const p2 = getPlayerById(match.player2);
  const winnerPlayer = getPlayerById(match.winner);
  const p1Color = getPlayerRankColor(match.player1);
  const p2Color = getPlayerRankColor(match.player2);
  const isFinished = !!match.winner; // pos2 这里基本都是 false，所以不会显示比分

  const handText = lang === 'zh' ? (match.hand === "left" ? "左手 LEFT" : "右手 RIGHT") : (match.hand === "left" ? "LEFT ARM" : "RIGHT ARM");
  const winnerName = winnerPlayer ? (lang === 'zh' ? winnerPlayer.name : winnerPlayer.nameEn) : "";

  return (
    <div style={{ paddingTop: "180px", paddingBottom: "100px", minHeight: "100vh", background: "linear-gradient(135deg, #1a1a1a 0%, #2e2828 100%)", color: "white", fontFamily: "'Inter', sans-serif" }}>
      {/* ⭐ 关键修改：返回按钮指向 pos2 */}
      <div style={{ maxWidth: "800px", margin: "0 auto 20px", padding: "0 20px" }}>
        <Link href="/events/pos2" style={{ display: "inline-flex", alignItems: "center", background: "rgba(255,255,255,0.1)", padding: "8px 20px", borderRadius: "50px", textDecoration: "none", color: "#ccc", fontSize: "14px", fontWeight: 500, backdropFilter: "blur(10px)", transition: "all 0.3s ease", border: "1px solid rgba(255,255,255,0.05)" }}>
          {t('match_back_list')}
        </Link>
      </div>

      <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "24px", maxWidth: "800px", margin: "0 auto", padding: "25px 40px", boxShadow: "0 20px 50px rgba(0,0,0,0.5)", backdropFilter: "blur(20px)", position: "relative", overflow: "hidden" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
          <InfoTag text={match.weight} color="#3498db" />
          <InfoTag text={handText} color="#e67e22" />
          <InfoTag text={match.format} color="#9b59b6" />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", marginBottom: isFinished ? "20px" : "0px" }}>
          <PlayerCard player={p1} rankColor={p1Color} isWinner={match.winner === p1?.id} align="left" />
          <div style={{ textAlign: "center", padding: "0 10px" }}>
            <div style={{ fontSize: "40px", fontWeight: "900", background: "linear-gradient(to bottom, #fff, #999)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontStyle: "italic" }}>VS</div>
            {/* 只有完赛才显示“已完赛” */}
            {isFinished && <div style={{ marginTop: "8px", background: "#27ae60", color: "white", padding: "4px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "bold" }}>{t('match_status_finished')}</div>}
          </div>
          <PlayerCard player={p2} rankColor={p2Color} isWinner={match.winner === p2?.id} align="right" />
        </div>

        {/* 只有完赛才显示结果 */}
        {isFinished && (
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px", textAlign: "center" }}>
            <h3 style={{ color: "#aaa", fontSize: "12px", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "2px" }}>{t('match_result_title')}</h3>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "10px" }}>
              <span style={{ fontSize: "16px", color: "#888" }}>{t('match_winner_label')}</span>
              <span style={{ fontSize: "24px", fontWeight: "bold", color: "#fff" }}>{winnerName}</span>
            </div>
            <div style={{ marginTop: "5px" }}>
              <span style={{ fontSize: "48px", fontWeight: "800", letterSpacing: "4px", color: "#ffda79", textShadow: "0 0 20px rgba(255, 218, 121, 0.4)" }}>{match.score}</span>
            </div>
            <div style={{ marginTop: "10px", color: "#666", fontSize: "12px" }}>{match.date}</div>
          </div>
        )}
        
        {/* 未完赛显示预告时间 */}
        {!isFinished && (
           <div style={{ marginTop: "30px", textAlign: "center", color: "#aaa", fontSize: "14px", borderTop: "1px dashed rgba(255,255,255,0.1)", paddingTop: "20px" }}>
              📅 比赛时间: {match.date} <br/> 15:00
           </div>
        )}
      </div>

      <div style={{ marginTop: "30px", display: "flex", justifyContent: "center" }}>
        {match.video ? (
          // ... 视频代码 ...
          <div style={{ width: "90%", maxWidth: "800px" }}>
             {/* 此处省略相同的视频代码，可以直接复制 POS1 的 */}
          </div>
        ) : (
          <div style={{ padding: "20px", background: "rgba(255,255,255,0.03)", borderRadius: "16px", border: "1px dashed rgba(255,255,255,0.1)", textAlign: "center", color: "#666", width: "80%", maxWidth: "600px", fontSize: "14px" }}>
            {t('match_no_video')}
          </div>
        )}
      </div>
    </div>
  );
}