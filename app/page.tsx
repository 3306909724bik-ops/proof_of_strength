export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#ff0000",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        padding: 0,
      }}
    >
      <img
        src="/HomeBanner.jpg"
        alt="Arm Wrestling Logo"
        style={{
          maxWidth: "100%",
          height: "auto",
          objectFit: "contain",
        }}
      />
    </div>
  );
}
