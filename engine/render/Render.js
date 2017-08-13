import config from "../config.js";

export class Render {
    constructor(canvas) {
        canvas.width = config.canvas.width;
        canvas.height = config.canvas.height;

        this.ctx = canvas.getContext("2d");
    }

    draw() {
        this.ctx.fillStyle = "#0F0";
        this.ctx.fillRect(10, 10, 100, 100);
    }
}
