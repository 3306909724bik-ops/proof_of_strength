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
  const weights = ["65kg", "75kg", "85kg", "open"];  // 注意：路由全英文

  // 当前 URL，例如 /right/75kg
  const parts = pathname.split("/").filter(Boolean);

  const currentHand = parts[0] || "right";
  const currentWeight = parts[1] || "open";

  return (
    <nav
      style={{
        width: "100%",
        background: "#111",
        color: "white",
        padding: "8px 0",
        borderBottom: "1px solid #333",
        fontSize: "18px",
        display: "flex",
        justifyContent: "center",
        gap: "25px",
      }}
    >
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

      {/* 体重级（中文显示） */}
      {weights.map((w) => {
        const active = w === currentWeight;
        return (
          <Link
            key={w}
            href={`/${currentHand}/${w}`} // 路由使用英文
            style={{
              color: active ? "#d4af37" : "white",
              fontWeight: active ? "bold" : "normal",
              borderBottom: active ? "3px solid #d4af37" : "3px solid transparent",
              paddingBottom: "4px",
              textDecoration: "none",
            }}
          >
            {weightDisplay[w]}   {/* 中文显示 */}
          </Link>
        );
      })}
    </nav>
  );
}
