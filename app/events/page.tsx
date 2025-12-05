"use client";

import Link from "next/link";

export default function EventsPage() {
  return (
    <div
      style={{
        paddingTop: "160px",
        minHeight: "100vh",
        background: "#2e2828ff",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "40px" }}>赛事列表</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        {/* ⭐⭐⭐ POS1 —— 换成你的图片按钮 ⭐⭐⭐ */}
        <Link href="/events/pos1" style={{ display: "block" }}>
          <img
            src="/pos1_event_button.jpg"   // ← 这就是你的按钮图片路径
            alt="POS1 Event"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "16px",
              cursor: "pointer",
              boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
              transition: "0.25s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1.0)")
            }
          />
        </Link>

        {/* ⭐ POS2（未开放） */}
        <div
          style={{
            background: "rgba(255,255,255,0.15)",
            padding: "20px",
            borderRadius: "14px",
            fontSize: "26px",
            opacity: 0.5,
            pointerEvents: "none",
          }}
        >
          力之证第二届单挑赛（敬请期待）
        </div>

        {/* ⭐ POS3（未开放） */}
        <div
          style={{
            background: "rgba(255,255,255,0.15)",
            padding: "20px",
            borderRadius: "14px",
            fontSize: "26px",
            opacity: 0.5,
            pointerEvents: "none",
          }}
        >
          力之证第三届单挑赛（敬请期待）
        </div>
      </div>
    </div>
  );
}
