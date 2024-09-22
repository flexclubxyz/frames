/** @jsxImportSource react */

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(to right, #432889, #17101F)",
      }}
    >
      <h1 style={{ color: "white", fontSize: 50 }}>Welcome to Flexclub</h1>
      <p style={{ color: "white", fontSize: 20 }}>
        Please visit the API to interact with the frame.
      </p>
    </div>
  );
};

export default HomePage;
