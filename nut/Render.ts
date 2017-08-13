import { Config } from "./Config.js";

export class Render {
    private ctx: CanvasRenderingContext2D;
    private config: Config;

    constructor(config: Config) {
        config.canvas.width = config.width;
        config.canvas.height = config.height;

        this.ctx = config.canvas.getContext("2d");
    }

    draw() {

    }
}
