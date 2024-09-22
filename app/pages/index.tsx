import { Button } from "frog";

const IndexPage = (c: any) => {
  const { buttonValue } = c;

  // Handle the "Get started" intent
  if (buttonValue === "proceed") {
    return c.res({
      redirect: "/select-club", // Redirect to the club selection page
    });
  }

  // Default Welcome Screen
  return c.res({
    image: (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(to right, #432889, #17101F)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 50,
            lineHeight: 1.4,
            padding: "0 120px",
          }}
        >
          Welcome to Flexclub
        </div>
      </div>
    ),
    intents: [
      // Frog button intent-based handling
      <Button value="proceed">Get started</Button>,
    ],
  });
};

export default IndexPage;
