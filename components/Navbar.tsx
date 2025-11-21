"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const weightDisplay: Record<string, string> = {
  "65kg": "65kg",
  "75kg": "75kg",
  "85kg": "85kg",
  open: "无差别",
};

export default function Navbar() {
  const pathname = usePathname();

  const hands = ["left", "right"];
  const weights = ["65kg", "75kg", "85kg", "open"];

  const parts = pathname.split("/").filter(Boolean);
  const currentHand = parts[0] || "";
  const currentWeight = parts[1] || "open";

  const safeHand =
    currentHand === "left" || currentHand === "right"
      ? currentHand
      : "right";

  return (
    <nav
      style={{
        width: "100%",
        background: "#111",
        color: "#fff",
        borderBottom: "1px solid #333",
        fontSize: "18px",

        // ⭐ 分开写 padding，不用 shorthand
        paddingTop: "10px",
        paddingBottom: "10px",

        // ⭐ 横向滚动
        overflowX: "auto",
        whiteSpace: "nowrap",
        WebkitOverflowScrolling: "touch",

        // 隐藏滚动条
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
      className="hide-scrollbar"
    >
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "25px",

          // ⭐ 改用 paddingLeft/right，不与 nav 冲突
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        {/* 首页 */}
        <Link
          href="/"
          style={{
            color: pathname === "/" ? "#d4af37" : "white",
            fontWeight: pathname === "/" ? "bold" : "normal",
            textDecoration: "none",
            borderBottom:
              pathname === "/"
                ? "3px solid #d4af37"
                : "3px solid transparent",
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
                textDecoration: "none",
                paddingBottom: "4px",
                borderBottom: active
                  ? "3px solid #d4af37"
                  : "3px solid transparent",
              }}
            >
              {hand === "left" ? "左手" : "右手"}
            </Link>
          );
        })}

        <span style={{ color: "#444" }}>|</span>

        {/* 体重级 */}
        {weights.map((w) => {
          const active = w === currentWeight;
          return (
            <Link
              key={w}
              href={`/${safeHand}/${w}`}
              style={{
                color: active ? "#d4af37" : "white",
                fontWeight: active ? "bold" : "normal",
                textDecoration: "none",
                paddingBottom: "4px",
                borderBottom: active
                  ? "3px solid #d4af37"
                  : "3px solid transparent",
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
