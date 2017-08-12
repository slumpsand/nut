import config from "./config.js";

import render from "./render/index.js";
import keyboard from "./keyboard/index.js";
import app from "../app/main.js";

render.prepare();

console.log("[engine/index.js]: starting user-application ...");
app.start();

let tickIntervalId = setInterval(tick, 1000 / config.fps);
window.addEventListener("keyup", keyup);

function tick() {
    console.log("[engine/index.js]: calling users tick function ...")
    app.tick();

    render.draw();
}

function keyup(evt) {
    evt.preventDefault();
    if(evt.keyCode == 27) {
        clearInterval(tickIntervalId);
        console.log("[engine/index.js]: cleared tick interval ...");
    } else {
        keyboard.keyup(evt.keyCode);
    }
}
