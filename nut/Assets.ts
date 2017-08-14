import { Config } from "./Config.js";

class Action {
    private isOk: boolean;

    constructor(isOk: boolean) {
        this.isOk = isOk;
    }

    static accept(): Action {
        return new Action(true);
    }

    static deny(): Action {
        return new Action(false);
    }
}

function check(path: string, hasExtension: boolean): Promise<T> {
    if(hasExtension && path.match(/[a-zA-Z_](?:[a-zA-Z0-9_])+(?:\.[a-z]+)?/).length > 0)
        return Promise.resolve(undefined);

    if(hasExtension) {
        return ;
    } else {
        return path.match(/[a-zA-Z_](?:[a-zA-Z0-9_])+/).length > 0;
    }
}

export class Assets {

    private config: Config;

    private imageFiles: { [id: string]: Promise<HTMLImageElement> };
    private jsonFiles: { [id: string]: Promise<any> };
    private textFiles: { [id: string]: Promise<string> };

    constructor(config: Config) {
        this.imageFiles = {};
        this.jsonFiles = {};
        this.textFiles = {};

        this.config = config;
    }

    private checkPath(path: string, hasExtension: boolean = false): boolean {
        if(hasExtension) {
            return path.match(/[a-zA-Z_](?:[a-zA-Z0-9_])+(?:\.[a-z]+)?/).length > 0;
        } else {
            return path.match(/[a-zA-Z_](?:[a-zA-Z0-9_])+/).length > 0;
        }
    }

    getImage(ident: string): Promise<HTMLImageElement> {
        if (!this.checkPath(ident)) {
            return Promise.reject(`invalid image identifier '${ident}'`);
        }

        if(!(ident in this.imageFiles)) {
            this.fetchImage(ident);
        }

        return this.imageFiles[ident];
    }

    private fetchImage(ident: string): void {
        let path = `data/img/${ident}.png`;
        console.log(`[Assets.ts]: fetching image file: '${path}'`);

        this.imageFiles[ident] = fetch(path)
            .then((resp: Body) => resp.blob())
            .then((blob: Blob) => {
                let img = new Image();
                img.src = URL.createObjectURL(blob);

                return img;
            });
    }

    getJSON(ident: string): Promise<any> {
        if (!this.checkPath(ident)) {
            return Promise.reject(`invalid json identifier '${ident}'`);
        }

        if(!(ident in this.jsonFiles)) {
            this.fetchJSON(ident);
        }

        return this.jsonFiles[ident];
    }

    private fetchJSON(ident: string): void {
        let path = `data/json/${ident}.json`;
        console.log(`[Assets.ts]: fetching json file: '${path}'`);

        this.jsonFiles[ident] = fetch(path)
            .then((resp: Body) =>  resp.json());
    }

    getText(ident: string): Promise<string> {
        if(!this.checkPath(ident, true)) {
            return Promise.reject(`invalid json identifier '${ident}'`);
        }

        if(!(ident in this.textFiles)) {
            this.fetchText(ident);
        }

        return this.textFiles[ident];
    }

    private fetchText(ident: string): void {
        let path = `data/any/${ident}`;
        console.log(`[Assets.ts]: fetching text file: '${path}'`);

        this.textFiles[ident] = fetch(path)
            .then((resp: Body) => resp.text());
    }

}
