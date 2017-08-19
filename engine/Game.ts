import { Config } from "./Config.js";
import { Assets } from "./Assets.js";
import { Layers } from "./Layers.js";

export class Game {
    startCallback: (Game) => void;
    tickCallback: (Game) => void;
    renderCallback: (Layers) => void;

    config: Config;
    assets: Assets;
    layers: Layers;

    private tickIntervalId: number;

    constructor(config: Config) {
        this.assets = new Assets(config);
        this.layers = new Layers(config);

        this.config = config;        
    }

    run(start: (Game) => void = this.startCallback, tick: (Game) => void = this.tickCallback, render: (Layers) => void = this.renderCallback) {
        this.startCallback = start;
        this.tickCallback = tick;
        this.renderCallback = render;

        this.startCallback(this);

        this.tickIntervalId = setInterval(this.next(), 1000 / this.config.fps);
    }

    stop() {
        clearInterval(this.tickIntervalId);
    }

    private next() {
        let ref = this;
        return () => {
            ref.tickCallback(ref);
            ref.renderCallback(ref.layers);

            ref.layers.apply();
        }
    }
}
