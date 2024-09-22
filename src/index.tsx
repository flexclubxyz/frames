import { serveStatic } from "@hono/node-server/serve-static";
import { Frog } from "frog";
import { devtools } from "frog/dev";
import { Welcome } from "./pages/Welcome";
import { ClubSelection } from "./pages/ClubSelection";

export const app = new Frog({
  title: "FlexClub Frame",
});

app.use("/*", serveStatic({ root: "./public" }));

// Welcome Screen route
app.frame("/", Welcome);

// Club Selection Screen route
app.frame("/select-club", ClubSelection);

devtools(app, { serveStatic });
