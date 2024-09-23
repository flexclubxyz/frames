/** @jsxImportSource frog/jsx */
import { Button, Frog } from "frog";
import { handle } from "frog/next";
import { parseUnits } from "ethers";
import { serveStatic } from "frog/serve-static";
import { devtools } from "frog/dev";
import { contractABI001 } from "../../utils/flexclub001abi";
import { contractABI002 } from "../../utils/flexclub002abi";
import { usdcABI, usdcAddress } from "../../utils/usdcabi"; // Import the USDC ABI and address

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
        <Button.Transaction target="/approve-club1">
          Approve USDC
        </Button.Transaction>,
        <Button.Transaction target="/deposit-club1">
          Deposit USDC
        </Button.Transaction>,
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
        <Button.Transaction target="/approve-club2">
          Approve USDC
        </Button.Transaction>,
        <Button.Transaction target="/deposit-club2">
          Deposit USDC
        </Button.Transaction>,
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
          <div
            style={{
              color: "white",
              fontSize: 32,
              marginBottom: 20,
            }}
          >
            If it's the 1st time making a deposit,
          </div>
          <div
            style={{
              color: "white",
              fontSize: 32,
              marginBottom: 20,
            }}
          >
            first click approve before clicking deposit.
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

// Transaction Route for Flexclub 1 Approval
app.transaction("/approve-club1", (c) => {
  return c.contract({
    abi: usdcABI,
    chainId: "eip155:8453", // Base L2 chainId
    functionName: "approve",
    args: ["0x63Be961F1A2985a4596a39DB6DCcfEBee0Feae88", parseUnits("10", 6)], // Approve 10 USDC
    to: usdcAddress,
  });
});

// Transaction Route for Flexclub 2 Approval
app.transaction("/approve-club2", (c) => {
  return c.contract({
    abi: usdcABI,
    chainId: "eip155:8453", // Base L2 chainId
    functionName: "approve",
    args: ["0xcE51BE974FBE7e642072cAdb87F3F63b80cD7c8E", parseUnits("10", 6)], // Approve 10 USDC
    to: usdcAddress,
  });
});

// Transaction Route for Flexclub 1 Deposit
app.transaction("/deposit-club1", (c) => {
  return c.contract({
    abi: contractABI001,
    chainId: "eip155:8453", // Base L2 chainId
    functionName: "deposit",
    args: [parseUnits("5", 6)], // Deposit 5 USDC
    to: "0x63Be961F1A2985a4596a39DB6DCcfEBee0Feae88",
  });
});

// Transaction Route for Flexclub 2 Deposit
app.transaction("/deposit-club2", (c) => {
  return c.contract({
    abi: contractABI002,
    chainId: "eip155:8453", // Base L2 chainId
    functionName: "deposit",
    args: [parseUnits("5", 6)], // Deposit 5 USDC
    to: "0xcE51BE974FBE7e642072cAdb87F3F63b80cD7c8E",
  });
});

// Enable Devtools
devtools(app, { serveStatic });

// Export Frog app for Next.js API
export const GET = handle(app);
export const POST = handle(app);
