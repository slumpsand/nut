import { config, render, events } from "./init.js";
import * as app from "../app/main.js";

app.start();

let tickIntervalId = setInterval(tick, 1000 / config.fps);
function tick() {
    app.tick();

    render.draw();
}
