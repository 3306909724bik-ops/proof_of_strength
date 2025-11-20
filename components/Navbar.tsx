"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const weightDisplay: Record<string, string> = {
  "65kg": "65kg",
  "75kg": "75kg",
  "85kg": "85kg",
  "open": "无差别",
};

export default function Navbar() {
  const pathname = usePathname();

  const parts = pathname.split("/").filter(Boolean);

  const currentHand = parts[0] || "home";
  const currentWeight = parts[1] || "open";

  return (
    <nav
      style={{
        width: "100%",
        background: "#111",
        color: "white",
        padding: "8px 0",
        borderBottom: "1px solid #333",

        // ⭐ 横向滑动
        overflowX: "auto",
        whiteSpace: "nowrap",
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",   // ⭐ 默认居中
          gap: "20px",
          width: "100%",              // ⭐ 必需：浏览器会根据宽度自动决定是否滑动
          padding: "0 20px",
        }}
      >
        {/* 首页 */}
        <Link
          href="/"
          style={{
            color: currentHand === "home" ? "#d4af37" : "white",
            fontWeight: currentHand === "home" ? "bold" : "normal",
            borderBottom:
              currentHand === "home" ? "3px solid #d4af37" : "3px solid transparent",
            paddingBottom: "4px",
            textDecoration: "none",
          }}
        >
          首页
        </Link>

        <span style={{ color: "#666" }}>|</span>

        {/* 左右手 */}
        {["left", "right"].map((hand) => {
          const active = hand === currentHand;
          return (
            <Link
              key={hand}
              href={`/${hand}/${currentWeight}`}
              style={{
                color: active ? "#d4af37" : "white",
                fontWeight: active ? "bold" : "normal",
                borderBottom: active ? "3px solid #d4af37" : "3px solid transparent",
                paddingBottom: "4px",
                textDecoration: "none",
              }}
            >
              {hand === "left" ? "左手" : "右手"}
            </Link>
          );
        })}

        <span style={{ color: "#666" }}>|</span>

        {/* 体重 */}
        {["65kg", "75kg", "85kg", "open"].map((w) => {
          const active = w === currentWeight;
          return (
            <Link
              key={w}
              href={`/${currentHand}/${w}`}
              style={{
                color: active ? "#d4af37" : "white",
                fontWeight: active ? "bold" : "normal",
                borderBottom: active ? "3px solid #d4af37" : "3px solid transparent",
                paddingBottom: "4px",
                textDecoration: "none",
              }}
            >
              {weightDisplay[w]}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
