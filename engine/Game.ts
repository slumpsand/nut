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

    constructor(config: Config) {
        this.config = config;
        this.render = new Render(config);
        this.assets = new Assets(config);
    }

    run(start: () => void = this.start, tick: () => void = this.tick) {
        this.start = start;
        this.tick = tick;

        this.start();

        this.tickIntervalId = setInterval(this.next(), 1000 / this.config.fps);
    }

    stop() {
        clearInterval(this.tickIntervalId);
    }

    private next() {
        let ref = this;
        return () => {
            ref.tick;
            ref.render.draw();
        }
    }
}

export class GameInfo {
    game: Game;
    config: Config;
    render: Render;
    assets: Assets;
}

export function CreateGame(config: Config): GameInfo {
    let game = new Game(config);

    return {
        game,
        config: game.config,
        render: game.render,
        assets: game.assets
    };
}
