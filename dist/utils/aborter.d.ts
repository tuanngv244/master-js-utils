declare class Aborter {
    private controllers;
    constructor();
    newSignal(key: string): AbortSignal;
    abort(key: string): void;
}
export default Aborter;
