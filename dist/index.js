"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const serve_static_1 = require("@hono/node-server/serve-static");
const frog_1 = require("frog");
const dev_1 = require("frog/dev");
const Welcome_1 = require("./pages/Welcome");
const ClubSelection_1 = require("./pages/ClubSelection");
exports.app = new frog_1.Frog({
    title: "FlexClub Frame",
});
exports.app.use("/*", (0, serve_static_1.serveStatic)({ root: "./public" }));
// Welcome Screen route
exports.app.frame("/", Welcome_1.Welcome);
// Club Selection Screen route
exports.app.frame("/select-club", ClubSelection_1.ClubSelection);
(0, dev_1.devtools)(exports.app, { serveStatic: serve_static_1.serveStatic });
