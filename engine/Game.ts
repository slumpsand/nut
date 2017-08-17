import { Config } from "./Config.js";
import { Render } from "./Render.js";
import { Assets } from "./Assets.js";

export class Game {
    startCallback: (Game) => void;
    tickCallback: (Game) => void;
    renderCallback: (Layers) => void;

    config: Config;
    render: Render;
    assets: Assets;

    private tickIntervalId: number;

    constructor(config: Config) {
        this.config = config;
        this.render = new Render(config);
        this.assets = new Assets(config);
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
            ref.tickCallback(this);
            ref.renderCallback(ref.render.layers);

            ref.render.layers.apply();
        }
    }
}
