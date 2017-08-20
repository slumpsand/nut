import { Config } from "./Config.js";

export class Assets {
    complete: Promise<any> = Promise.resolve(undefined);
    private images: { [id: string]: HTMLImageElement } = {};

    asset(ident: string): HTMLImageElement {
        return this.images[ident];
    }

    getImage(ident: string) {
        if(ident in this.images) return;
        if(!this.checkPath(ident)) throw new Error(`invalid image identifier '${ident}'`);

        this.complete = Promise.all([
            this.complete,
            fetch(`../data/img/${ident}.png`)
                .then((resp: Body) => resp.blob())
                .then((blob: Blob) => {
                    let img = new Image();
                    img.src = URL.createObjectURL(blob);

                    this.images[ident] = img;
                    return img;
                })
        ]);
    }

    getImages(idents: string[]) {
        idents.forEach(ident => this.getImage(ident));
    }

    private checkPath(path: string, hasExtension: boolean = false): boolean {
        if(hasExtension) {
            return path.match(/[a-zA-Z_](?:[a-zA-Z0-9_])+(?:\.[a-z]+)?/).length > 0;
        } else {
            return path.match(/[a-zA-Z_](?:[a-zA-Z0-9_])+/).length > 0;
        }
    }
}
