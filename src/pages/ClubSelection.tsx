import { Button } from "frog";

export const ClubSelection = (c) => {
  const { buttonValue, status } = c;
  const club = buttonValue || "No club selected";

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
          {status === "response" ? `You selected: ${club}` : "Select a Club"}
        </div>
        {status === "response" && (
          <div
            style={{
              color: "white",
              fontSize: 20,
              marginTop: 20,
            }}
          >
            Want to choose another club?
          </div>
        )}
      </div>
    ),
    intents: [
      <Button value="Club A">Club A</Button>,
      <Button value="Club B">Club B</Button>,
      <Button value="Club C">Club C</Button>,
      status === "response" && <Button.Reset>Reset</Button.Reset>,
    ],
  });
};
