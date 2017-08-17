import { Config } from "./Config.js";
import { Layers } from "./Layers.js";

export class Render {

    layers: Layers;

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

        this.layers = new Layers(this.ctx, config);

        this.config = config;
    }

}
