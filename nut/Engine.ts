import { Config } from "./Config.js";
import { EngineHelper } from "./EngineHelper.js";

export class Engine {
    helper: EngineHelper;
    config: Config;

    constructor(config: Config) {
        this.config = config;
        this.helper = config.helper;

        config.start();
    }
}
