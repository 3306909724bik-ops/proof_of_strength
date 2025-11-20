"use client";

import { matches, players } from "@/app/lib/data";
import { useParams } from "next/navigation";

export default function VideosPage() {
  const { id } = useParams();

  // 筛选出该选手的所有视频比赛
  const playerMatches = matches.filter(
    (m) => (m.player1 === id || m.player2 === id) && m.video
  );

  if (playerMatches.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px", fontSize: "18px" }}>
        暂无比赛视频
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "25px",
      }}
    >
      {playerMatches.map((m) => {
        const opponentId = m.player1 === id ? m.player2 : m.player1;
        const opponent = players.find((p) => p.id === opponentId);
        const self = players.find((p) => p.id === id);

        return (
          <div
            key={m.id}
            style={{
              background: "white",
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.10)",
              transition: "0.25s",
              cursor: "pointer",
            }}
            onClick={() => window.open(m.video, "_blank")}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.10)";
            }}
          >
            {/* 自动封面（使用 video 截取第一帧） */}
            <video
              src={m.video}
              preload="metadata"
              muted
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                backgroundColor: "#ddd",
                display: "block",
              }}
              onLoadedMetadata={(e) => {
                // 自动跳到第 1 秒形成封面
                e.currentTarget.currentTime = 1;
              }}
              onLoadedData={(e) => {
                // 加载完封面后暂停显示
                e.currentTarget.pause();
              }}
            />

            {/* 内容区域 */}
            <div style={{ padding: "15px" }}>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  marginBottom: "6px",
                }}
              >
                {self?.name} vs {opponent?.name ?? "未知选手"}
              </div>

              <div style={{ fontSize: "15px", marginBottom: "12px" }}>
                比赛日期：{m.date}
              </div>

              {/* play 按钮 */}
              <div
                style={{
                  display: "inline-block",
                  padding: "8px 14px",
                  background: "#d35400",
                  color: "#fff",
                  borderRadius: "8px",
                  fontSize: "14px",
                }}
              >
                ▶ 播放视频
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
