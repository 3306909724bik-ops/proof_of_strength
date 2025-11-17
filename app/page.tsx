export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#ff0000",   // 红色背景（全屏）
        minHeight: "80vh",           // ← 全屏高度
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="/HomeBanner.jpg"
        alt="Arm Wrestling Logo"
        style={{
          maxWidth: "90%",
          height: "auto",
          objectFit: "contain",
        }}
      />
    </div>
  );
}
