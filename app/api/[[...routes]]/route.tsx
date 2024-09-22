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

// Serve static files from the public folder
app.use("/*", serveStatic({ root: "./public" }));

// Define the main frame with club selection logic
app.frame("/", (c) => {
  const { buttonValue } = c;
  return c.res({
    image: (
      <div style={{ color: "white", display: "flex", fontSize: 60 }}>
        {buttonValue === "flexclub001"
          ? "Flexclub 1: Devcon Bangkok Trip"
          : buttonValue === "flexclub002"
          ? "Flexclub 2: Farcon 2025"
          : "Select your club"}
      </div>
    ),
    intents: [
      <Button value="flexclub001" action="/api/select-club">
        Flexclub 1: Devcon Bangkok
      </Button>,
      <Button value="flexclub002" action="/api/select-club">
        Flexclub 2: Farcon 2025
      </Button>,
    ],
  });
});

// Enable Frog devtools for easier development
devtools(app, { serveStatic });

// Export the Frog API handlers for GET and POST requests
export const GET = handle(app);
export const POST = handle(app);
