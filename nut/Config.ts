import { EngineHelper } from "./EngineHelper.js";

export class Config {
    start: () => void;
    tick: () => void;

    canvas: HTMLCanvasElement;
    helper: EngineHelper;
}
