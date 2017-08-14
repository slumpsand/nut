export class Action<T> {
    private complete: boolean;
    private accepted: boolean;

    private success: (T) => void;
    private failure: (any) => void;

    private constructor(promise: Promise<T>) {
        this.accepted = this.complete = false;
        this.success = (_) => {};
        this.failure = (_) => {};

        promise.then((value: T) => {
            this.accepted = this.complete = true;

            this.success(value);
        }).catch((reason: any) => {
            this.accepted = false;
            this.complete = true;

            this.failure(reason);
        });
    }

    and<B>(func: (T) => Action<B>): Action<B> {
        let promise = new Promise((resolve, reject) => {
            
        });

        this.success = (T) => {

        }
    }

    static accept<T>(value: T): Action<T> {
        return new Action(Promise.resolve(value));
    }

    static deny<T>(reason: any): Action<T> {
        return new Action(Promise.reject(reason));
    }
}
