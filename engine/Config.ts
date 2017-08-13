export class ConfigCanvas {
    width: number;
    height: number;
}

export class Config {
    fps: number;
    canvas: ConfigCanvas;

    constructor(filename: string) {
        // do some ajax here

        this.fps = 1;
        this.canvas = { width: 800, height: 480 };
    }
}
