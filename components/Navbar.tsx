"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();  // 获取当前路径

  const hands = ["left", "right"];
  const weights = ["65kg", "75kg", "85kg", "open"];

  // 当前 URL，例如 /left/75kg
  const parts = pathname.split("/").filter(Boolean);

  const currentHand = parts[0] || "right";   // 默认右手
  const currentWeight = parts[1] || "open";  // 默认 open

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
            href={`/${hand}/${currentWeight}`} // 切换手别但保持体重级
            style={{
              color: active ? "#d4af37" : "white",
              fontWeight: active ? "bold" : "normal",
              textDecoration: "none",
              borderBottom: active ? "3px solid #d4af37" : "3px solid transparent",
              paddingBottom: "4px",
            }}
          >
            {hand === "left" ? "左手" : "右手"}
          </Link>
        );
      })}

      {/* 分隔线 */}
      <span style={{ color: "#444" }}>|</span>

      {/* 65kg / 75kg / 85kg / open */}
      {weights.map((w) => {
        const active = w === currentWeight;
        return (
          <Link
            key={w}
            href={`/${currentHand}/${w}`} // 切换体重级但保持当前手
            style={{
              color: active ? "#d4af37" : "white",
              fontWeight: active ? "bold" : "normal",
              textDecoration: "none",
              borderBottom: active ? "3px solid #d4af37" : "3px solid transparent",
              paddingBottom: "4px",
            }}
          >
            {w}
          </Link>
        );
      })}
    </nav>
  );
}
