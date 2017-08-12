import config from "../engine/config.js";

let ctx;

function prepare() {
    console.log("[render/index.js]: preparing canvas ...");

    let canvas = document.getElementById("canvas");

    canvas.width = config.canvas.width;
    canvas.height = config.canvas.height;

    ctx = canvas.getContext("2d");
}

function draw() {
    console.log("[render/index.js]: redrawing canvas ...");

    ctx.fillStyle = "#F00";
    ctx.fillRect(10, 10, 100, 100);
}

const render = { prepare, draw };
export default render;
