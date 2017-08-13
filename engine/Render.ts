import { Engine } from "engine/Engine";

export class Render {
    ctx: CanvasRenderingContext2D;
    engine: Engine;
    canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement, engine: Engine) {
        this.engine = engine;
        this.canvas = canvas;

        canvas.width = this.engine.config.canvas.width;
        canvas.height = this.engine.config.canvas.height;

        this.ctx = canvas.getContext("2d");
    }

    draw() {
        console.log("[Render.ts]: drawing canvas ...");
    }
}
