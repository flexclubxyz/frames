import { serveStatic } from "@hono/node-server/serve-static";
import { Button, Frog } from "frog";
import { devtools } from "frog/dev";

export const app = new Frog({
  title: "FlexClub Frame",
});

app.use("/*", serveStatic({ root: "./public" }));

// Welcome Screen
app.frame("/", (c) => {
  const { status } = c;

  return c.res({
    image: (
      <div
        style={{
          alignItems: "center",
          background:
            status === "response"
              ? "linear-gradient(to right, #432889, #17101F)"
              : "black",
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
          {status === "response"
            ? `Let's Get Started!`
            : "Welcome to FlexClub!"}
        </div>
      </div>
    ),
    intents: [
      <Button
        value="proceed"
        onClick={() => {
          c.redirect("/select-club");
        }}
      >
        Proceed to Club Selection
      </Button>,
    ],
  });
});

// Club Selection Screen
app.frame("/select-club", (c) => {
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
});

devtools(app, { serveStatic });
