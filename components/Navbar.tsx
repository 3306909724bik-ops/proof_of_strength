"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// 映射：英文路由 → 中文显示
const weightDisplay: Record<string, string> = {
  "65kg": "65kg",
  "75kg": "75kg",
  "85kg": "85kg",
  "open": "无差别",
};

export default function Navbar() {
  const pathname = usePathname();

  const hands = ["left", "right"];
  const weights = ["65kg", "75kg", "85kg", "open"];

  // 当前 URL，例如 /right/75kg
  const parts = pathname.split("/").filter(Boolean);

  const currentHand = parts[0] || "";
  const currentWeight = parts[1] || "open";

  // ⭐ 默认右手：如果当前 URL 没有有效 hand
  const safeHand =
    currentHand === "left" || currentHand === "right"
      ? currentHand
      : "right";

  return (
    <nav
      style={{
        width: "100%",
        background: "#111",
        color: "white",
        padding: "10px 0",
        borderBottom: "1px solid #333",
        fontSize: "18px",

        // ⭐ 水平滚动 + 居中
        overflowX: "auto",
        whiteSpace: "nowrap",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "25px",
          width: "100%",
        }}
      >
        {/* ⭐ 首页按钮 */}
        <Link
          href="/"
          style={{
            color: pathname === "/" ? "#d4af37" : "white",
            fontWeight: pathname === "/" ? "bold" : "normal",
            textDecoration: "none",
            borderBottom:
              pathname === "/" ? "3px solid #d4af37" : "3px solid transparent",
            paddingBottom: "4px",
          }}
        >
          首页
        </Link>

        <span style={{ color: "#444" }}>|</span>

        {/* 左手 / 右手 */}
        {hands.map((hand) => {
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

        <span style={{ color: "#444" }}>|</span>

        {/* 体重级（会自动补右手） */}
        {weights.map((w) => {
          const active = w === currentWeight;

          return (
            <Link
              key={w}
              href={`/${safeHand}/${w}`} // ⭐ 自动补右手
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
