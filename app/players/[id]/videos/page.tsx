export const runtime = "edge";

"use client";

import { matches, players } from "@/app/lib/data";
import { useParams } from "next/navigation";

export default function VideosPage() {
  const { id } = useParams();

  // 获取当前选手的视频比赛
  const playerMatches = matches.filter(
    (m) => (m.player1 === id || m.player2 === id) && m.video
  );

  if (playerMatches.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        暂无比赛视频
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "20px",
      }}
    >
      {playerMatches.map((m) => {
        const opponentId = m.player1 === id ? m.player2 : m.player1;
        const opponent = players.find((p) => p.id === opponentId);

        return (
          <a
            key={m.id}
            href={m.video}
            target="_blank"
            style={{
              background: "white",
              borderRadius: "14px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.10)",
              textDecoration: "none",
              color: "#000",
              overflow: "hidden",
              transition: "0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.10)";
            }}
          >
            {/* 视频封面（自动生成） */}
            <div
              style={{
                height: "160px",
                background: `url(https://img.youtube.com/vi/${extractYouTubeId(
                  m.video
                )}/mqdefault.jpg) center/cover`,
                backgroundColor: "#ddd",
              }}
            />

            {/* 文字信息块 */}
            <div style={{ padding: "14px" }}>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginBottom: "6px",
                }}
              >
                {players.find((p) => p.id === id)?.name} vs{" "}
                {opponent?.name ?? "未知选手"}
              </div>

              <div style={{ fontSize: "15px", marginBottom: "10px" }}>
                比赛日期：{m.date}
              </div>

              {/* PLAY 按钮 */}
              <div
                style={{
                  display: "inline-block",
                  padding: "6px 12px",
                  background: "#d35400",
                  color: "white",
                  borderRadius: "8px",
                  fontSize: "14px",
                }}
              >
                ▶ 播放视频
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}

// 提取 YouTube 视频 ID（如果不是 YouTube 就用默认图）
function extractYouTubeId(url: string | undefined) {
  if (!url) return "";
  try {
    const reg = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
    const match = url.match(reg);
    return match ? match[1] : "";
  } catch {
    return "";
  }
}
