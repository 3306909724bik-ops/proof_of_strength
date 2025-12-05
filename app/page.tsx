"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  // --------------------------
  // ⏳ 倒计时逻辑
  // --------------------------
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    function updateCountdown() {
      const target = new Date("2025-12-13T13:00:00+08:00").getTime(); // 北京时间
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft("赛事已开始！");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`);
    }

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  // --------------------------
  // 页面布局
  // --------------------------
  return (
    <div
      style={{
        backgroundColor: "#2e2828ff",
        height: "100vh",
        width: "100vw",
        position: "relative",
        overflow: "hidden",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* ⭐ Event 按钮 图片卡片 */}
      <Link href="/events/pos1">
        <img
          src="/pos1_event_button.jpg"
          alt="Event Button"
          style={{
            width: "1000px",
            height: "auto",
            borderRadius: "16px",
            cursor: "pointer",
            boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
            transition: "0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
        />
      </Link>

      {/* ⭐ 倒计时 */}
      <div
        style={{
          marginTop: "20px",
          fontSize: "50px",
          fontWeight: 600,
          color: "#ffffffff",
          textShadow: "0px 0px 6px rgba(0,0,0,0.4)",
        }}
      >
        {timeLeft === "" ? "加载中…" : `${timeLeft}`}
      </div>

      {/* ⭐ HomeBanner 右下角固定显示 */}
      <img
        src="/HomeBanner.jpg"
        alt="Banner"
        style={{
          position: "absolute",
          right: "20px",
          bottom: "20px",
          width: "250px", // 可调
          height: "auto",
          opacity: 1,
          pointerEvents: "none", // 避免挡住按钮
        }}
      />
    </div>
  );
}
