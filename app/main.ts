import { Engine } from "../nut/Engine.js";
import { EngineHelper } from "../nut/EngineHelper.js";

const engine = new EngineHelper();

function start() {
    
}

function tick() {

}

new Engine({
    helper: engine,

    start,
    tick,

    canvas: <HTMLCanvasElement> document.getElementById("canvas")
});
