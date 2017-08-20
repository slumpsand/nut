import { Config } from "./Config.js";

export class Assets {
    complete: Promise<any> = Promise.resolve(undefined);
    private images: { [id: string]: HTMLImageElement } = {};

    asset(ident: string): HTMLImageElement {
        return this.images[ident];
    }

    getImage(ident: string): Promise<HTMLImageElement> {
        if(!this.checkPath(ident))
            return Promise.reject(`invalid image identifier '${ident}'`);
        
        if(ident in this.images)
            return Promise.resolve(this.images[ident]);

        let promise = fetch(`data/img/${ident}.png`)
            .then((resp: Body) => resp.blob())
            .then((blob: Blob) => {
                let img = new Image();
                img.src = URL.createObjectURL(blob);

                this.images[ident] = img;
                return img;
            });

        this.complete = Promise.all([this.complete, promise]);
        return promise;
    }

    private checkPath(path: string, hasExtension: boolean = false): boolean {
        if(hasExtension) {
            return path.match(/[a-zA-Z_](?:[a-zA-Z0-9_])+(?:\.[a-z]+)?/).length > 0;
        } else {
            return path.match(/[a-zA-Z_](?:[a-zA-Z0-9_])+/).length > 0;
        }
    }
}
