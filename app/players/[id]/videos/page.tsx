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
              // cursor: "pointer", // 移除整个卡片的点击，避免误触 iframe
              display: "flex",
              flexDirection: "column",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)"; // 悬浮上浮效果
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.10)";
            }}
          >
            {/* 📺 B站播放器嵌入 (自动显示 B站封面) */}
            <div
              style={{
                width: "100%",
                paddingTop: "56.25%", // 16:9 比例
                position: "relative",
                background: "#000",
              }}
            >
              <iframe
                src={`//player.bilibili.com/player.html?bvid=${m.video}&page=1&high_quality=1&danmaku=0`}
                allowFullScreen={true}
                scrolling="no"
                frameBorder="0"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>

            {/* 📝 内容区域 */}
            <div
              style={{
                padding: "15px",
                flex: 1, // 让内容区撑满剩余空间
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    marginBottom: "8px",
                    color: "#333",
                  }}
                >
                  {self?.name} <span style={{ color: "#e74c3c" }}>VS</span>{" "}
                  {opponent?.name ?? "未知选手"}
                </div>

                <div style={{ fontSize: "14px", color: "#666", marginBottom: "12px" }}>
                  📅 比赛日期：{m.date}
                </div>
              </div>

              {/* 🔗 跳转到 B站观看按钮 */}
              <a
                href={`https://www.bilibili.com/video/${m.video}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "10px 0",
                  width: "100%",
                  textAlign: "center",
                  background: "#fb7299", // B站粉色
                  color: "#fff",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#f45a8d")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#fb7299")}
              >
                🚀 去 Bilibili 观看
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}