"use client";

import { players } from "@/app/lib/data";
import { useParams } from "next/navigation";

export default function InfoPage() {
  const { id } = useParams();
  const player = players.find((p) => p.id === id);

  if (!player) return <div>未找到选手。</div>;

  return (
    <div
      style={{
        background: "white",
        padding: "30px",
        borderRadius: "16px",
        boxShadow: "0 3px 14px rgba(0,0,0,0.08)",
        maxWidth: "750px",
        margin: "0 auto",
        lineHeight: 1.8,
      }}
    >
      {/* 标题 */}
      <h2
        style={{
          fontSize: "24px",
          marginBottom: "20px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        选手基本信息
      </h2>

      {/* 信息列表（纯净无 emoji） */}
      <div style={{ fontSize: "18px", paddingLeft: "5px" }}>
        <p>姓名：{player.name}</p>
        <p>国家：{player.country}</p>
      </div>
    </div>
  );
}
