import { Config } from "./Config.js";

export class Layer {
    ctx: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;

    private config: Config;

    constructor(config: Config) {
        this.canvas = <HTMLCanvasElement> document.createElement("canvas");
        this.canvas.width = config.width;
        this.canvas.height = config.height;
        this.ctx = this.canvas.getContext("2d");

        this.config = config;
    }
}

export class Layers {
    layers: Layer[];

    private config: Config;
    private ctx: CanvasRenderingContext2D;

    constructor(config: Config) {
        this.layers = [];
        for(let i=0; i<config.layerCount; i++) {
            this.layers.push(new Layer(config));
        }

        config.canvas.width = config.width;
        config.canvas.height = config.height;

        this.ctx = config.canvas.getContext("2d");

        this.config = config;
    }

    apply(): void {
        for(let i=0; i<this.layers.length; i++) {
            this.ctx.drawImage(this.layers[i].canvas, 0, 0);
        }
    }
}
