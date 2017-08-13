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

    colors: string[] = [ "red", "blue", "green", "yellow", "orange", "lime", "#F00", "#FFF", "gray", "blue", "red", "crimson" ];
    draw() {
        performance.mark("start-frame");

        for(let i=0; i<50; i++) {
            for(let j=0; j<this.colors.length; j++) {
                this.drawRandomBox(Math.random() * 150, Math.random() * 150, this.colors[j]);
            }
        }

        this.commit();

        performance.mark("end-frame");
        performance.measure("frame", "start-frame", "end-frame");
        performance.clearMarks();
    }

    private drawRandomBox(width, height, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(Math.random() * (this.canvas.width - width), Math.random() * (this.canvas.height - height), width, height);
    }

    private commit() {
        this.output.drawImage(this.canvas, 0, 0);

        this.ctx.fillStyle = this.config.backgroundColor;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
