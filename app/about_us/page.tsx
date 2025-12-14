"use client";

import React from "react";

export default function AboutPage() {
  return (
    <div
      style={{
        // ⭐ 修改点：增加顶部内边距到 200px，防止被导航栏遮挡
        paddingTop: "200px", 
        paddingBottom: "80px",
        minHeight: "100vh",
        background: "#111", // 深黑背景
        color: "#fff",
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
      }}
    >
      {/* 🔴 头部标题区 */}
      <div style={{ textAlign: "center", marginBottom: "60px", padding: "0 20px" }}>
        <h1
          style={{
            fontSize: "42px",
            fontWeight: 900,
            marginBottom: "10px",
            // 银白色渐变标题
            background: "linear-gradient(180deg, #fff 0%, #aaa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-1px",
          }}
        >
          关于我们
        </h1>
        <div
          style={{
            fontSize: "14px",
            color: "#ff0004", // 品牌红
            fontWeight: 800,
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          PROOF OF STRENGTH
        </div>
      </div>

      {/* 📄 核心内容容器 */}
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 25px",
        }}
      >
        {/* 1. 介绍段落 */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={sectionTitleStyle}>我们的初心</h2>
          <p style={paragraphStyle}>
            <strong style={{ color: "#fff" }}>力之证腕力联盟（Proof of Strength Armwrestling League）</strong>
            是一个专注于单挑赛的腕力组织，致力于为腕力爱好者提供更高品质、更加专业的竞技体验。
          </p>
          <p style={paragraphStyle}>
            我们成立的初心，是为了解决当前国内腕力运动中组织性不足、娱乐体验有限等问题。为此我们搭建了独立的官方网站，建立了完善的排名体系，设立了官方奖杯，以全面提升赛事的组织性、规格以及参与者的整体体验。
          </p>
        </section>

        {/* 2. 愿景段落 */}
        <section style={{ marginBottom: "60px" }}>
          <h2 style={sectionTitleStyle}>竞技与成长</h2>
          <p style={paragraphStyle}>
            联盟定期举办规范化的单挑赛，让广大普通腕力爱好者也能体验到高水平的赛事流程与竞技氛围。
          </p>
          <p style={paragraphStyle}>
            我们坚持打造一个公开、公平、专业且富有活力的腕力交流平台，使参与者不仅能享受比赛的乐趣，也能在持续参与中获得成就感、目标感与长期成长。
          </p>
        </section>

        {/* 3. 功能特性 (卡片展示) */}
        <section style={{ marginBottom: "80px" }}>
          <h2 style={{ ...sectionTitleStyle, textAlign: "center", marginBottom: "40px", borderLeft: "none" }}>
            官方网站功能
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", // 响应式网格
              gap: "20px",
            }}
          >
            <FeatureCard title="🏆 各级别排名" desc="实时更新，实力排位一目了然" />
            <FeatureCard title="👤 选手个人面板" desc="专属主页，展示你的生涯数据" />
            <FeatureCard title="⚔️ 历史对战记录" desc="每一次交锋，都被永久铭记" />
            <FeatureCard title="🎬 比赛录像回放" desc="精彩瞬间，随时随地回顾" />
          </div>
        </section>

        {/* 4. 结尾 Slogan (高亮) */}
        <section
          style={{
            textAlign: "center",
            padding: "60px 20px",
            background: "linear-gradient(145deg, #1a1a1a, #0d0d0d)",
            borderRadius: "20px",
            border: "1px solid #333",
            boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
          }}
        >
          <div style={{ marginBottom: "30px", color: "#aaa", fontSize: "16px", lineHeight: "1.8" }}>
            在这里，<br />
            你的每一次挑战，都会被记录<br />
            你的每一次进步，都会被看见
          </div>

          <div
            style={{
              fontSize: "28px",
              fontWeight: 900,
              color: "#fff",
              fontStyle: "italic",
              lineHeight: "1.4",
            }}
          >
            加入力之证，<br />
            让你的实力，<span style={{ color: "#ff0004" }}>被验证</span><br />
            让你的名字，<span style={{ color: "#FFD700" }}>被记住</span>
          </div>
        </section>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------
// 🧩 样式组件与常量
// ----------------------------------------------------------------

const sectionTitleStyle: React.CSSProperties = {
  fontSize: "24px",
  fontWeight: 800,
  color: "#fff",
  marginBottom: "20px",
  borderLeft: "4px solid #ff0004", // 左侧红线装饰
  paddingLeft: "15px",
  letterSpacing: "1px",
};

const paragraphStyle: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: "1.8",
  color: "#bbb", // 稍微灰一点，阅读更舒服
  marginBottom: "15px",
  textAlign: "justify", // 两端对齐
};

// 功能卡片组件
function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div
      style={{
        background: "#1f1f1f",
        padding: "25px",
        borderRadius: "12px",
        border: "1px solid #333",
        textAlign: "center",
        transition: "transform 0.2s ease",
      }}
    >
      <div style={{ fontSize: "18px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>
        {title}
      </div>
      <div style={{ fontSize: "13px", color: "#666" }}>{desc}</div>
    </div>
  );
}