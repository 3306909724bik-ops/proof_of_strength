"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/app/context/LanguageContext"; // 1. 引入

const weightDisplay: Record<string, string> = {
  "65kg": "65kg",
  "75kg": "75kg",
  "85kg": "85kg",
  open: "无差别",
};

export default function Navbar() {
  const pathname = usePathname();
  const { t, lang, toggleLanguage } = useLanguage(); // 2. 获取上下文

  const hands = ["left", "right"];
  const weights = ["65kg", "75kg", "85kg", "open"];

  // 解析当前 URL 状态
  const parts = pathname.split("/").filter(Boolean);
  const currentHand = parts[0] || "";
  const currentWeight = parts[1] || "open";
  const safeHand = currentHand === "left" || currentHand === "right" ? currentHand : "right";

  return (
    <nav
      style={{
        width: "100%",
        background: "#111",
        color: "#fff",
        borderBottom: "1px solid #333",
        fontSize: "18px",
        paddingTop: "10px",
        paddingBottom: "10px",
        overflowX: "auto",
        whiteSpace: "nowrap",
        WebkitOverflowScrolling: "touch",
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
            borderBottom: pathname === "/" ? "3px solid #d4af37" : "3px solid transparent",
            paddingBottom: "4px",
          }}
        >
          {t("nav_home")} {/* 替换文字 */}
        </Link>

        <span style={{ color: "#444" }}>|</span>

        {/* 左手 / 右手 */}
        {hands.map((hand) => {
          const active = hand === currentHand && !pathname.startsWith("/events") && !pathname.startsWith("/about_us");
          return (
            <Link
              key={hand}
              href={`/${hand}/${currentWeight}`}
              style={{
                color: active ? "#d4af37" : "white",
                fontWeight: active ? "bold" : "normal",
                textDecoration: "none",
                paddingBottom: "4px",
                borderBottom: active ? "3px solid #d4af37" : "3px solid transparent",
              }}
            >
              {/* 根据当前语言显示 "左手" 或 "LEFT ARM" */}
              {lang === 'zh' 
                ? (hand === "left" ? "左手" : "右手") 
                : (hand === "left" ? "LEFT" : "RIGHT")}
            </Link>
          );
        })}

        <span style={{ color: "#444" }}>|</span>

        {/* 体重级 */}
        {weights.map((w) => {
          const active = w === currentWeight && !pathname.startsWith("/events") && !pathname.startsWith("/about_us");
          return (
            <Link
              key={w}
              href={`/${safeHand}/${w}`}
              style={{
                color: active ? "#d4af37" : "white",
                fontWeight: active ? "bold" : "normal",
                textDecoration: "none",
                paddingBottom: "4px",
                borderBottom: active ? "3px solid #d4af37" : "3px solid transparent",
              }}
            >
              {/* 体重显示逻辑：Open显示无差别/OPEN，数字保持不变 */}
              {w === 'open' 
                 ? t('nav_open') 
                 : w}
            </Link>
          );
        })}

        <span style={{ color: "#444" }}>|</span>

        {/* 赛事按钮 */}
        <Link
          href="/events"
          style={{
            color: pathname.startsWith("/events") ? "#d4af37" : "white",
            fontWeight: pathname.startsWith("/events") ? "bold" : "normal",
            textDecoration: "none",
            borderBottom: pathname.startsWith("/events") ? "3px solid #d4af37" : "3px solid transparent",
            paddingBottom: "4px",
          }}
        >
          {t("nav_match")}
        </Link>

        {/* 关于我们 */}
        <Link
          href="/about_us"
          style={{
            color: pathname.startsWith("/about_us") ? "#ff0004" : "white",
            fontWeight: pathname.startsWith("/about_us") ? "bold" : "normal",
            textDecoration: "none",
            borderBottom: pathname.startsWith("/about_us") ? "3px solid #ff0004" : "3px solid transparent",
            paddingBottom: "4px",
          }}
        >
          {t("nav_about")}
        </Link>

        {/* 🌍 语言切换按钮 (新增) */}
        <button
          onClick={toggleLanguage}
          style={{
            marginLeft: "10px",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.3)",
            color: "#fff",
            padding: "2px 8px",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "12px",
            fontWeight: "bold",
            transition: "0.2s"
          }}
        >
          {t("nav_switch_lang")}
        </button>

      </div>
    </nav>
  );
}