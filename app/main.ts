import { Game } from "../nut/Game.js";

const game = new Game();

game.start = () => {

};

game.tick = () => {

};

game.config = {
    canvas: <HTMLCanvasElement> document.getElementById("canvas"),

    width: 800,
    height: 480,

    fps: 1
};

game.run();
