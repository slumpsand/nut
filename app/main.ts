import { Engine } from "../engine/Engine";
const engine = new Engine(<HTMLCanvasElement>document.getElementById("canvas"), "config.json");

engine.registry.game.registerStart(() => {
    console.log("start call received");
});

engine.registry.game.registerTick(() => {
    console.log("tick call received");
});

engine.run();
