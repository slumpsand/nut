import { Config } from "./Config.js";

export class Render {

    private config: Config;    

    private ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;

    private output: CanvasRenderingContext2D;

    constructor(config: Config) {
        config.canvas.width = config.width;
        config.canvas.height = config.height;
        config.canvas.style.backgroundColor = config.backgroundColor;
        this.output = config.canvas.getContext("2d");

        this.canvas = document.createElement("canvas");
        this.canvas.width = config.width;
        this.canvas.height = config.height;
        this.ctx = this.canvas.getContext("2d");

        this.config = config;
    }

    draw() {


        this.commit();
    }

    private commit() {
        this.output.drawImage(this.canvas, 0, 0);

        this.ctx.fillStyle = this.config.backgroundColor;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

}
