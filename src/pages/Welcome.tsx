import { Button } from "frog";

export const Welcome = (c) => {
  const { buttonValue, status } = c;

  // If "Proceed" button is clicked, render the Club Selection screen
  if (buttonValue === "proceed") {
    return c.res({
      image: (
        <div
          style={{
            alignItems: "center",
            background: "black",
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
        <Button value="Club A">Club A</Button>,
        <Button value="Club B">Club B</Button>,
        <Button value="Club C">Club C</Button>,
      ],
    });
  }

  // Otherwise, render the Welcome screen
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
          Welcome to FlexClub!
        </div>
      </div>
    ),
    intents: [<Button value="proceed">Proceed to Club Selection</Button>],
  });
};
