interface Model {
    name: string;
    view: View;
    controller: Controller;
    focused: boolean;

    display(): string;
    handle(key: string, chain: string): void;
    toString(): string;
}