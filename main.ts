import { CreateGame } from "./engine/Game.js";

let { game, config, render, assets } = CreateGame({
        canvas: <HTMLCanvasElement> document.getElementById("canvas"),
        
        width: 800,
        height: 480,
    
        fps: 30,
        backgroundColor: "#424447"
});

function start(): void {
    
}

function tick(): void {

}

game.run(start, tick);
