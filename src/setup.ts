import { Game } from "../engine/Game.js";

let instance = new Game({
        canvas: <HTMLCanvasElement> document.getElementById("canvas"),
        
        width: 800,
        height: 480,
    
        fps: 30,
        backgroundColor: "#424447",

        layerCount: 2
});

export const ui = instance.layer(1);
export const game = instance.layer(0);
export const setup = instance.run;
