/** @jsxImportSource frog/jsx */
import { Button, Frog } from "frog";
import { handle } from "frog/next";
import { devtools } from "frog/dev";
import { serveStatic } from "frog/serve-static";

// Initialize Frog App
const app = new Frog({
  basePath: "/api",
  title: "FlexClub Frame",
});

// Serve static files
app.use("/*", serveStatic({ root: "./public" }));

// Define the Welcome Screen
app.frame("/", (c) => {
  const { buttonValue } = c;

  // Flexclub 001 info
  if (buttonValue === "flexclub001") {
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
              fontSize: 40,
              marginBottom: 20,
            }}
          >
            Flexclub 1: Devcon Bangkok Trip
          </div>
          <p style={{ color: "white", fontSize: 32 }}>
            Saving to attend DevCon 2024 in Bangkok
          </p>
          <p style={{ color: "white", fontSize: 32 }}>
            Target: $800.00 USDC 🎯
          </p>
          <p style={{ color: "white", fontSize: 32 }}>
            Pooled: $18.9856 USDC 💰
          </p>
          <p style={{ color: "white", fontSize: 32 }}>Members: 7 🤝</p>
          <p style={{ color: "white", fontSize: 32 }}>APY: 4.41% 📈</p>
        </div>
      ),
      intents: [
        <Button.Reset>Back </Button.Reset>,
        <Button.Link href="https://app.flexclub.xyz/0xFlex001">
          Deposit USDC
        </Button.Link>,
      ],
    });
  }

  // Flexclub 2 info
  if (buttonValue === "flexclub002") {
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
              fontSize: 40,
              marginBottom: 20,
            }}
          >
            Flexclub 2: Farcon 2025
          </div>
          <p style={{ color: "white", fontSize: 32 }}>
            Save to attend Farcon 2025
          </p>
          <p style={{ color: "white", fontSize: 32 }}>
            Target: $5,000.00 USDC 🎯
          </p>
          <p style={{ color: "white", fontSize: 32 }}>
            Pooled: $233.5218 USDC 💰
          </p>
          <p style={{ color: "white", fontSize: 32 }}>Members: 4 🤝</p>
          <p style={{ color: "white", fontSize: 32 }}>APY: 4.41% 📈</p>
        </div>
      ),
      intents: [
        <Button.Reset>Back</Button.Reset>,
        <Button.Link href="https://app.flexclub.xyz/0xFlex002">
          Deposit USDC
        </Button.Link>,
      ],
    });
  }

  // Club Selection Screen
  if (buttonValue === "proceed") {
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
              fontSize: 40,
              marginBottom: 20,
            }}
          >
            Select a club to join 👇
          </div>
        </div>
      ),
      intents: [
        <Button value="flexclub001">Flexclub 1: Devcon Bangkok</Button>,
        <Button value="flexclub002">Flexclub 2: Farcon 2025</Button>,
      ],
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
        <div
          style={{
            color: "white",
            fontSize: 40,
            lineHeight: 1.4,
            padding: "0 120px",
          }}
        >
          Onchain goal-based savings 💰
        </div>
      </div>
    ),
    intents: [<Button value="proceed">Get started</Button>],
  });
});

// Club Selection Route
app.frame("/select-club", (c) => {
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
            fontSize: 40,
            marginBottom: 20,
          }}
        >
          Select a Club 👇
        </div>
      </div>
    ),
    intents: [
      <Button value="flexclub001">Flexclub 1: Devcon Bangkok Trip</Button>,
      <Button value="flexclub002">Flexclub 2: Farcon 2025</Button>,
    ],
  });
});

// Enable Devtools
devtools(app, { serveStatic });

// Export Frog app for Next.js API
export const GET = handle(app);
export const POST = handle(app);
