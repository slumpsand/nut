import { Config } from "./Config.js";
import { Render } from "./Render.js";
import { Assets } from "./Assets.js";

export class Game {
    start: () => void;
    tick: () => void;

    config: Config;
    render: Render;
    assets: Assets;

    private tickIntervalId: number;

    run() {
        this.render = new Render(this.config);
        this.assets = new Assets(this.config);

        this.init();
        this.start();

        this.tickIntervalId = setInterval(this.next(), 1000 / this.config.fps);
    }

    stop() {
        clearInterval(this.tickIntervalId);
    }

    private init() {

    }

    private next() {
        let ref = this;
        return () => {
            ref.tick;
            ref.render.draw();
        }
    }
}
