import { Game } from "./engine/Game.js";
import { Layers } from "./engine/Layers.js";

let game = new Game({
        canvas: <HTMLCanvasElement> document.getElementById("canvas"),
        
        width: 800,
        height: 480,
    
        fps: 30,
        backgroundColor: "#424447"
});

function start(game: Game): void {
    
}

function tick(game: Game): void {

}

function render(layers: Layers): void {

}

game.run(start, tick, render);
