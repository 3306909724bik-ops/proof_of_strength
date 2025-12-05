"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { matches, players, rankings } from "@/app/lib/data";

// 排名对应颜色
const rankColors: Record<number, string> = {
  1: "#ff0004ff",
  2: "#d4af37",
  3: "#C0C0C0",
  4: "#cd7f32",
};

// 找选手
function findPlayer(id: string) {
  return players.find((p) => p.id === id);
}

// 选手是否为前4
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

export default function MatchPage() {
  const { id } = useParams();
  const match = matches.find((m) => m.id === id);

  if (!match)
    return (
      <div style={{ paddingTop: "150px", textAlign: "center", color: "white" }}>
        找不到该比赛
      </div>
    );

  const p1 = findPlayer(match.player1);
  const p2 = findPlayer(match.player2);

  const p1Color = getPlayerRankColor(match.player1);
  const p2Color = getPlayerRankColor(match.player2);

  return (
    <div
      style={{
        paddingTop: "140px",
        paddingBottom: "100px",
        minHeight: "100vh",
        background: "#2e2828ff",
        color: "white",
        textAlign: "center",
      }}
    >
      {/* 🔙 返回按钮 */}
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <Link
          href="/events/pos1"
          style={{
            display: "inline-block",
            marginBottom: "40px",
            background: "rgba(255,255,255,0.15)",
            padding: "10px 20px",
            borderRadius: "12px",
            textDecoration: "none",
            color: "white",
            fontSize: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          ⬅ 返回赛事列表
        </Link>
      </div>

      {/* ⭐ 单个对决板块 */}
      <div
        style={{
          background: "rgba(255,255,255,0.08)",
          padding: "30px 40px",
          borderRadius: "16px",
          margin: "0 auto 40px",
          maxWidth: "600px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
        }}
      >

        {/* ⭐⭐⭐ 你要求加入的比赛信息区块 ⭐⭐⭐ */}
        <div
          style={{
            opacity: 0.85,
            fontSize: "20px",
            lineHeight: "34px",
            marginBottom: "25px",
          }}
        >
          体重级别：{match.weight}
          <br />
          {match.hand}
          <br />
          赛制：{match.format}
        </div>

        {/* ⭐ 中间唯一的对决卡片 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          {/* ✦ 选手1 */}
          <Link
            href={`/players/${p1?.id}`}
            style={{
              background: "rgba(255,255,255,0.12)",
              padding: "18px 26px",
              borderRadius: "14px",
              textDecoration: "none",
              color: "white",
              fontSize: "26px",
              fontWeight: 700,
              boxShadow: "0 4px 12px rgba(0,0,0,0.35)",
              minWidth: "180px",
            }}
          >
            {p1?.name}
            {p1Color && (
              <span
                style={{
                  marginLeft: "10px",
                  background: p1Color,
                  padding: "4px 10px",
                  borderRadius: "6px",
                  fontSize: "16px",
                  color: "black",
                }}
              >
                🏆
              </span>
            )}
          </Link>

          <div style={{ fontSize: "30px", fontWeight: "bold" }}>VS</div>

          {/* ✦ 选手2 */}
          <Link
            href={`/players/${p2?.id}`}
            style={{
              background: "rgba(255,255,255,0.12)",
              padding: "18px 26px",
              borderRadius: "14px",
              textDecoration: "none",
              color: "white",
              fontSize: "26px",
              fontWeight: 700,
              boxShadow: "0 4px 12px rgba(0,0,0,0.35)",
              minWidth: "180px",
            }}
          >
            {p2?.name}
            {p2Color && (
              <span
                style={{
                  marginLeft: "10px",
                  background: p2Color,
                  padding: "4px 10px",
                  borderRadius: "6px",
                  fontSize: "16px",
                  color: "black",
                }}
              >
                🏆
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* ⭐ 比赛信息 */}
      <div
        style={{
          background: "rgba(255,255,255,0.1)",
          padding: "25px",
          borderRadius: "14px",
          maxWidth: "600px",
          margin: "0 auto",
          fontSize: "22px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
      >
        <div style={{ marginBottom: "10px" }}>📅 比赛时间：{match.date}</div>

        <div style={{ marginBottom: "10px" }}>
          🏆 胜者：{match.winner ? findPlayer(match.winner)?.name : "敬请期待"}
        </div>

        <div>🎯 比分：{match.score || "敬请期待"}</div>
      </div>

      {/* ⭐ 视频（居中对齐） */}
<div
  style={{
    marginTop: "50px",
    display: "flex",
    justifyContent: "center",
    width: "100%",
  }}
>
  {match.video ? (
    <video
      src={match.video}
      controls
      style={{
        width: "90%",
        maxWidth: "800px",
        borderRadius: "12px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.45)",
      }}
    />
  ) : (
    <div
      style={{
        fontSize: "26px",
        opacity: 0.9,
        marginTop: "20px",
        textAlign: "center",
      }}
    >
      🎥 比赛视频：敬请期待
    </div>
  )}
</div>

    </div>
  );
}
