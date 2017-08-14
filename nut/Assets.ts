import { Config } from "./Config.js";

export class Assets {

    private imageFiles: { [id: string]: HTMLImageElement };
    private jsonFiles:  { [id: string]: any };
    private textFiles:  { [id: string]: string };

    private config: Config;

    constructor(config: Config) {
        this.imageFiles = {};
        this.jsonFiles = {};
        this.textFiles = {};
    }

    private checkPath(path: string, hasExtension: boolean = false): boolean {
        if(hasExtension) {
            return path.match(/[a-zA-Z_](?:[a-zA-Z0-9_])+(?:\.[a-z]+)?/).length > 0;
        } else {
            return path.match(/[a-zA-Z_](:?[a-zA-Z0-9_])+/).length > 0;
        }
    }

    getImage(ident: string): Promise<HTMLImageElement> {
        if(!this.checkPath(ident)) {
            return Promise.reject(`invalid image identifier '${ident}'`);
        }

        if(ident in this.imageFiles) {
            return Promise.resolve(this.imageFiles[ident]);
        }

        let path = `data/img/${ident}.png`;
        console.log(`[Assets.ts]: fetching image file '${path}'`);

        return fetch(path)
            .then((resp: Body) => {
                return resp.blob();
            }).then((blob: Blob) => {
                let img = new Image();
                img.src = URL.createObjectURL(blob);

                this.imageFiles[ident] = img;
                return img;
            });
    }

    getJSON(ident: string): Promise<any> {
        if(!this.checkPath(ident)) {
            return Promise.reject(`invalid json identifier '${ident}'`);
        }

        if(ident in this.jsonFiles) {
            return Promise.resolve(this.jsonFiles[ident]);
        }

        let path = `data/json/${ident}.json`;
        console.log(`[Assets.ts]: fetching json file '${path}'`);

        return fetch(path)
            .then((resp: Body) => {
                return resp.json();
            }).then((json: any) => {
                this.jsonFiles[ident] = json;
                return json;
            });
    }

    getText(ident: string): Promise<string> {
        if(!this.checkPath(ident, true)) {
            return Promise.reject(`invalid text identifier '${ident}'`);
        }

        if(ident in this.textFiles) {
            return Promise.resolve(this.textFiles[ident]);
        }

        let path = `data/any/${ident}`;
        console.log(`[Assets.ts]: fetching text file '${path}'`);

        return fetch(path)
            .then((resp: Body) => {
                return resp.text();
            }).then((text: string) => {
                this.textFiles[ident] = text;
                return text;
            });
    }

}
