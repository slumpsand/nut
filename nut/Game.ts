import { Config } from "./Config.js";
import { Render } from "./Render.js";

export class Game {
    start: () => void;
    tick: () => void;

    config: Config;
    render: Render;

    run() {
        this.render = new Render(this.config);

        this.init();
        this.start();

        setInterval(this.next(), 1000 / this.config.fps)
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
