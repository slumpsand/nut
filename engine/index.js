import config from "./config.js";

import keyboard from "./keyboard/index.js";

import { Render } from "./render/index.js";
import { MainApp } from "../app/main.js";
import { EventManager } from "./keyboard/EventManager.js";

const render = new Render(document.getElementById("canvas"));
const events = new EventManager();

export { render, events };

const app = new MainApp();

let tickIntervalId = setInterval(tick, 1000 / config.fps);
function tick() {
    app.tick();

    render.draw();
}
