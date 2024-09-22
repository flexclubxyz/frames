import { Button } from "frog";

export const ClubSelection = (c) => {
  const { buttonValue } = c;

  // Flexclub 001: Devcon Bangkok Trip Info
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
          <p style={{ color: "white", fontSize: 28 }}>
            Target: $800.00 USDC 🎯
          </p>
          <p style={{ color: "white", fontSize: 28 }}>
            Pooled: $18.9856 USDC 💰
          </p>
          <p style={{ color: "white", fontSize: 28 }}>Members: 7 🤝</p>
          <p style={{ color: "white", fontSize: 28 }}>APY: 4.41% 📈</p>
        </div>
      ),
      intents: [
        <Button.Reset>Back</Button.Reset>,
        <Button.Link href="https://app.flexclub.xyz/0xFlex001">
          Deposit USDC
        </Button.Link>,
      ],
    });
  }

  // Flexclub 2: Farcon 2025 Info
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
          <p style={{ color: "white", fontSize: 28 }}>
            Target: $5,000.00 USDC 🎯
          </p>
          <p style={{ color: "white", fontSize: 28 }}>
            Pooled: $233.5218 USDC 💰
          </p>
          <p style={{ color: "white", fontSize: 28 }}>Members: 4 🤝</p>
          <p style={{ color: "white", fontSize: 28 }}>APY: 4.41% 📈</p>
        </div>
      ),
      intents: [
        <Button.Reset>Back to Club Selection</Button.Reset>,
        <Button.Link href="https://app.flexclub.xyz/0xFlex002">
          Deposit USDC
        </Button.Link>,
      ],
    });
  }

  // Club Selection Screen
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
          Select a Club
        </div>
      </div>
    ),
    intents: [
      <Button value="flexclub001">Flexclub 1: Devcon Bangkok Trip</Button>,
      <Button value="flexclub002">Flexclub 2: Farcon 2025</Button>,
    ],
  });
};
