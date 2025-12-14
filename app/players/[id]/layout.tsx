"use client";

import Link from "next/link";
import { players, rankings } from "@/app/lib/data";
import { useSearchParams, useParams, usePathname, useRouter } from "next/navigation";

// 排名颜色映射
const rankColors: Record<number, string> = {
  1: "#ff0004ff",
  2: "#FFD700",
  3: "#C0C0C0",
  4: "#cd7f32",
};

// 计算选手最高排名
function getBestRank(playerId: string) {
  let best = Infinity;
  for (const hand of ["left", "right"] as const) {
    for (const weight of ["65kg", "75kg", "85kg", "open"] as const) {
      const order = rankings[hand][weight];
      const idx = order.indexOf(playerId);
      if (idx !== -1 && idx + 1 < best) best = idx + 1;
    }
  }
  return best;
}

export default function PlayerLayout({ children }: { children: React.ReactNode }) {
  const { id } = useParams();
  const search = useSearchParams();
  const pathname = usePathname();
  // ⭐ 引入 router
  const router = useRouter();

  const hand = search.get("hand") ?? "right";
  const weight = search.get("weight") ?? "open";

  const player = players.find((p) => p.id === id);
  if (!player) return <div>未找到选手。</div>;

  const bestRank = getBestRank(player.id);
  const nameBg = bestRank <= 4 ? rankColors[bestRank] : "#fde8c8";

  // ⭐ 新的返回逻辑：直接调用浏览器的后退
  const handleBack = () => {
    router.back();
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "10px auto 0 auto",
        background: "white",
        borderRadius: "20px",
        boxShadow: "0 5px 25px rgba(0,0,0,0.12)",
        padding: "25px",
        minHeight: "92vh",
        position: "relative",
      }}
    >

      {/* ← 返回按钮 */}
      <button
        onClick={handleBack}
        style={{
          padding: "8px 16px",
          fontSize: "15px",
          background: "#222",
          color: "white",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          marginBottom: "20px",
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = "0.8"}
        onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
      >
        ← 返回
      </button>

      {/* 顶部名字条 */}
      <div
        style={{
          width: "100%",
          height: "120px",
          background: nameBg,
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "38px",
          fontWeight: "bold",
          letterSpacing: "2px",
          color: "#111",
          marginBottom: "18px",
        }}
      >
        {player.name}
      </div>

      {/* Tabs */}
      <nav
        style={{
          position: "sticky",
          top: "0",
          zIndex: 50,
          background: "white",
          padding: "12px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          marginBottom: "25px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {[
            { key: "info", label: "个人信息" },
            { key: "matches", label: "战绩查询" },
            { key: "videos", label: "比赛回放" },
          ].map((t) => {
            const active = pathname.includes(t.key);
            return (
              <Link
                key={t.key}
                // ⭐ 关键修改：添加 replace 属性
                // 这意味着点击 Tab 不会增加历史记录栈
                // 点击“返回”时会直接跳出选手页面，而不是回到上一个 Tab
                replace 
                href={`/players/${id}/${t.key}?hand=${hand}&weight=${weight}`}
                style={{
                  padding: "8px 14px",
                  borderRadius: "8px",
                  fontWeight: active ? "bold" : "normal",
                  textDecoration: "none",
                  color: active ? "#d35400" : "#555",
                  background: active ? "#ffe7d3" : "transparent",
                  boxShadow: active ? "0 0 4px rgba(0,0,0,0.12)" : "none",
                }}
              >
                {t.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* 内容区域 */}
      <div style={{ paddingBottom: "40px" }}>{children}</div>
    </div>
  );
}