"use client";

import { matches, players } from "@/app/lib/data";
import { useParams } from "next/navigation";
import { useState } from "react"; // 1. 引入 useState

export default function VideosPage() {
  const { id } = useParams();
  
  // 2. 新增状态：记录当前正在全屏播放的 BV 号，如果有值则显示弹窗
  const [playingBvid, setPlayingBvid] = useState<string | null>(null);

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
    <>
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
              // 3. 点击卡片时，不再跳转，而是设置当前播放的 BV 号
              onClick={() => setPlayingBvid(m.video)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.10)";
              }}
            >
              {/* 4. 封面区域：使用 B站 iframe 作为预览 */}
              <div 
                style={{ 
                  width: "100%", 
                  height: "180px", 
                  position: "relative",
                  background: "#000",
                  // 关键点：禁止 iframe 的鼠标事件，这样点击会穿透到外层的 div，触发 onClick
                  pointerEvents: "none" 
                }}
              >
                <iframe
                  src={`//player.bilibili.com/player.html?bvid=${m.video}&page=1&high_quality=1&danmaku=0&autoplay=0`}
                  scrolling="no"
                  frameBorder="0"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                />
                {/* 可选：加一个播放按钮图标在中间，提示用户可以点击放大 */}
                <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    fontSize: "40px",
                    opacity: 0.8,
                    textShadow: "0 2px 10px rgba(0,0,0,0.5)"
                }}>
                    ▶
                </div>
              </div>

              {/* 内容区域 */}
              <div style={{ padding: "15px" }}>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    marginBottom: "6px",
                    color: "#333"
                  }}
                >
                  {self?.name} <span style={{color:"#e74c3c"}}>VS</span> {opponent?.name ?? "未知选手"}
                </div>

                <div style={{ fontSize: "15px", marginBottom: "12px", color: "#666" }}>
                  比赛日期：{m.date}
                </div>

                <div
                  style={{
                    display: "inline-block",
                    padding: "8px 14px",
                    background: "#fb7299", // B站粉色
                    color: "#fff",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "bold"
                  }}
                >
                  📺 点击放大观看
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 5. 全屏播放弹窗 (Modal) */}
      {playingBvid && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.85)", // 深色遮罩
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            backdropFilter: "blur(5px)"
          }}
          // 点击遮罩关闭弹窗
          onClick={() => setPlayingBvid(null)}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "1000px", // 最大宽度
              aspectRatio: "16/9", // 锁定 16:9 比例
              background: "#000",
              borderRadius: "12px",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
            }}
            // 阻止点击播放器时关闭弹窗
            onClick={(e) => e.stopPropagation()}
          >
            {/* 关闭按钮 */}
            <button
              onClick={() => setPlayingBvid(null)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "rgba(0,0,0,0.5)",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                fontSize: "24px",
                cursor: "pointer",
                zIndex: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              ×
            </button>

            {/* B站播放器 */}
            <iframe
              src={`//player.bilibili.com/player.html?bvid=${playingBvid}&page=1&high_quality=1&danmaku=1&autoplay=1`} // 打开时自动播放
              allowFullScreen={true}
              scrolling="no"
              frameBorder="0"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}