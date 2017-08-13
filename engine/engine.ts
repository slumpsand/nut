import { Registry } from "engine/Registry";
import { Config } from "engine/Config";
import { Render } from "engine/Render";

export class Engine {
    config: Config;
    registry: Registry;
    render: Render;

    private tickIntervalId: number;

    constructor(canvas: HTMLCanvasElement, configfile: string) {
        this.config = new Config(configfile);
        this.registry = new Registry();
        this.render = new Render(canvas, this);
    }

    run() {
        this.registry.game.callStart();

        this.tickIntervalId = setInterval(() => {
            this.registry.game.callTick();
            this.render.draw();
        }, 1000 / this.config.fps);
    }
}
