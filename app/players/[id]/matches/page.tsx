export const runtime = "edge";

"use client";

import { matches, players } from "@/app/lib/data";
import { useParams } from "next/navigation";

export default function MatchesPage() {
  const { id } = useParams();

  // 当前选手所有比赛
  const playerMatches = matches.filter(
    (m) => m.player1 === id || m.player2 === id
  );

  if (playerMatches.length === 0) {
    return (
      <div style={{ textAlign: "center", paddingTop: "20px" }}>
        暂无比赛记录
      </div>
    );
  }

  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "16px",
        boxShadow: "0 3px 14px rgba(0,0,0,0.08)",
        maxWidth: "850px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ fontSize: "24px", marginBottom: "20px", textAlign: "center" }}>
        比赛战绩
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "18px",
        }}
      >
        <thead>
          <tr style={{ background: "#f2f2f2", textAlign: "left" }}>
            <th style={{ padding: "12px" }}>对手</th>
            <th style={{ padding: "12px", width: "80px" }}>结果</th>
            <th style={{ padding: "12px", width: "100px" }}>比分</th>
            <th style={{ padding: "12px", width: "140px" }}>日期</th>
          </tr>
        </thead>

        <tbody>
          {playerMatches.map((m) => {
            const opponentId = m.player1 === id ? m.player2 : m.player1;
            const opponent = players.find((p) => p.id === opponentId);
            const isWin = m.winner === id;

            return (
              <tr
                key={m.id}
                style={{
                  borderBottom: "1px solid #eee",
                  cursor: "pointer",
                  transition: "0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#f9f9f9";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <td style={{ padding: "12px" }}>
                  {opponent ? opponent.name : "未知选手"}
                </td>

                <td
                  style={{
                    padding: "12px",
                    fontWeight: "bold",
                    color: isWin ? "green" : "red",
                  }}
                >
                  {isWin ? "胜" : "负"}
                </td>

                <td style={{ padding: "12px", fontWeight: "bold" }}>
                  {m.score ?? "-"}
                </td>

                <td style={{ padding: "12px" }}>{m.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
