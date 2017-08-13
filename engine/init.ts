import { config, render, events } from "./engine";
import * as app from "../app/main";

app.start();

let tickIntervalId = setInterval(tick, 1000 / config.fps);
function tick() {
    app.tick();

    render.draw();
}
