import { Config } from "./Config.js";
import { Assets } from "./Assets.js";
import { Layers } from "./Layers.js";

type Action = () => void;

export class Game {
    start: Action;
    tick: Action;
    render: Action;

    config: Config;
    assets: Assets;
    layers: Layers;

    private tickIntervalId: number;

    constructor(config: Config) {
        this.assets = new Assets(config);
        this.layers = new Layers(config);

        this.config = config;        
    }

    run(start: Action, tick: Action, render: Action) {
        this.start = start;
        this.tick = tick;
        this.render = render;

        this.start();

        this.tickIntervalId = setInterval(this.next(), 1000 / this.config.fps);
    }

    stop() {
        clearInterval(this.tickIntervalId);
    }

    layer(index: number): CanvasRenderingContext2D {
        return this.layers.layers[index].ctx;
    }

    private next() {
        let ref = this;
        return () => {
            ref.tick();
            ref.render();

            ref.layers.apply();
        }
    }
}
