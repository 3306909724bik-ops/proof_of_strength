"use client";

import React from "react";
import { useLanguage } from "@/app/context/LanguageContext"; // 引入

export default function AboutPage() {
  const { lang } = useLanguage(); // 获取语言

  // 这里为了简单，我直接把中英文案写在这里判断，而不是全部放字典
  // 如果你想放字典，可以把这些大段文字移到 dictionary.ts
  const content = {
    zh: {
       title: "关于我们",
       subtitle: "PROOF OF STRENGTH",
       section1_title: "我们的初心",
       section1_p1: "力之证腕力联盟（Proof of Strength Armwrestling League）是一个专注于单挑赛的腕力组织，致力于为腕力爱好者提供更高品质、更加专业的竞技体验。",
       section1_p2: "我们成立的初心，是为了解决当前国内腕力运动中组织性不足、娱乐体验有限等问题。为此我们搭建了独立的官方网站，建立了完善的排名体系，设立了官方奖杯，以全面提升赛事的组织性、规格以及参与者的整体体验。",
       section2_title: "竞技与成长",
       section2_p1: "联盟定期举办规范化的单挑赛，让广大普通腕力爱好者也能体验到高水平的赛事流程与竞技氛围。",
       section2_p2: "我们坚持打造一个公开、公平、专业且富有活力的腕力交流平台，使参与者不仅能享受比赛的乐趣，也能在持续参与中获得成就感、目标感与长期成长。",
       section3_title: "官方网站功能",
       features: [
         { title: "🏆 各级别排名", desc: "实时更新，实力排位一目了然" },
         { title: "👤 选手个人面板", desc: "专属主页，展示你的生涯数据" },
         { title: "⚔️ 历史对战记录", desc: "每一次交锋，都被永久铭记" },
         { title: "🎬 比赛录像回放", desc: "精彩瞬间，随时随地回顾" },
       ],
       slogan1: <>在这里，<br />你的每一次挑战，都会被记录<br />你的每一次进步，都会被看见</>,
       slogan2: <>加入力之证，<br />让你的实力，<span style={{ color: "#ff0004" }}>被验证</span><br />让你的名字，<span style={{ color: "#FFD700" }}>被记住</span></>
    },
    en: {
       title: "ABOUT US",
       subtitle: "PROOF OF STRENGTH",
       section1_title: "OUR MISSION",
       section1_p1: "Proof of Strength Armwrestling League is an organization focused on armwrestling supermatches, dedicated to providing a higher quality and more professional competitive experience for enthusiasts.",
       section1_p2: "We were founded to address the lack of organization and limited entertainment experience in current domestic armwrestling. We built an independent official website, established a comprehensive ranking system, and set up official trophies to fully enhance the organization, specifications, and overall participant experience.",
       section2_title: "COMPETITION & GROWTH",
       section2_p1: "The league regularly holds standardized supermatches, allowing ordinary armwrestling enthusiasts to experience high-level event processes and competitive atmosphere.",
       section2_p2: "We insist on building an open, fair, professional, and vibrant platform where participants can not only enjoy the competition but also gain a sense of achievement, purpose, and long-term growth.",
       section3_title: "WEBSITE FEATURES",
       features: [
         { title: "🏆 RANKINGS", desc: "Real-time updates, see where you stand" },
         { title: "👤 PLAYER PROFILE", desc: "Exclusive page showing your career stats" },
         { title: "⚔️ MATCH RECORDS", desc: "Every battle is permanently recorded" },
         { title: "🎬 REPLAYS", desc: "Review exciting moments anytime" },
       ],
       slogan1: <>Here,<br />Every challenge is recorded<br />Every progress is seen</>,
       slogan2: <>Join Proof of Strength,<br />Let your strength be <span style={{ color: "#ff0004" }}>PROVEN</span><br />Let your name be <span style={{ color: "#FFD700" }}>REMEMBERED</span></>
    }
  };

  const t = content[lang]; // 根据当前语言选择内容包

  return (
    <div
      style={{
        paddingTop: "200px",
        paddingBottom: "80px",
        minHeight: "100vh",
        background: "#111",
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
            background: "linear-gradient(180deg, #fff 0%, #aaa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-1px",
          }}
        >
          {t.title}
        </h1>
        <div
          style={{
            fontSize: "14px",
            color: "#ff0004",
            fontWeight: 800,
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          {t.subtitle}
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
          <h2 style={sectionTitleStyle}>{t.section1_title}</h2>
          <p style={paragraphStyle}>
            <strong style={{ color: "#fff" }}>Proof of Strength (力之证)</strong> {lang === 'zh' ? "" : ""}
            {t.section1_p1.replace("力之证腕力联盟（Proof of Strength Armwrestling League）", "")} 
            {/* 上面这一行是为了简单替换，实际英文版直接显示整段即可 */}
          </p>
          <p style={paragraphStyle}>
            {t.section1_p2}
          </p>
        </section>

        {/* 2. 愿景段落 */}
        <section style={{ marginBottom: "60px" }}>
          <h2 style={sectionTitleStyle}>{t.section2_title}</h2>
          <p style={paragraphStyle}>
            {t.section2_p1}
          </p>
          <p style={paragraphStyle}>
             {t.section2_p2}
          </p>
        </section>

        {/* 3. 功能特性 */}
        <section style={{ marginBottom: "80px" }}>
          <h2 style={{ ...sectionTitleStyle, textAlign: "center", marginBottom: "40px", borderLeft: "none" }}>
            {t.section3_title}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {t.features.map((f, i) => (
               <FeatureCard key={i} title={f.title} desc={f.desc} />
            ))}
          </div>
        </section>

        {/* 4. 结尾 Slogan */}
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
            {t.slogan1}
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
            {t.slogan2}
          </div>
        </section>
      </div>
    </div>
  );
}

// ... 样式组件保持不变 ...
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