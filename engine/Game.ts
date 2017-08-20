import { Config } from "./Config.js";
import { Assets } from "./Assets.js";
import { Layers } from "./Layers.js";

type Action = () => void;

export class Game {
    config: Config;
    assets: Assets;
    layers: Layers;

    private tickIntervalId: number;

    constructor(config: Config) {
        this.assets = new Assets();
        this.layers = new Layers(config);

        this.config = config;        
    }

    run(start: Action, tick: Action, render: Action) {
        let apply = this.layers.apply;

        this.assets.complete.then(() => {
            start();
            
            this.tickIntervalId = setInterval(() => {
                tick();
                render();
                apply();
    
            }, 1000 / this.config.fps);            
        });
    }

    stop() {
        clearInterval(this.tickIntervalId);
    }

    layer(index: number): CanvasRenderingContext2D {
        return this.layers.layers[index].ctx;
    }
}
