import { Config } from "./Config.js";
import { Assets } from "./Assets.js";
import { Layers } from "./Layers.js";

export class Game {
    start: (Game) => void;
    tick: (Game) => void;
    render: (Layers) => void;

    config: Config;
    assets: Assets;
    layers: Layers;

    private tickIntervalId: number;

    constructor(config: Config) {
        this.assets = new Assets(config);
        this.layers = new Layers(config);

        this.config = config;        
    }

    run(start: (Game) => void = this.start, tick: (Game) => void = this.tick, render: (Layers) => void = this.render) {
        this.start = start;
        this.tick = tick;
        this.render = render;

        this.start(this);

        this.tickIntervalId = setInterval(this.next(), 1000 / this.config.fps);
    }

    stop() {
        clearInterval(this.tickIntervalId);
    }

    private next() {
        let ref = this;
        return () => {
            ref.tick(ref);
            ref.render(ref.layers);

            ref.layers.apply();
        }
    }
}
