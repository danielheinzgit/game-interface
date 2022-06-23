/**
 * A special, simplified case of model, used for creating layouts (multipanel, etc.)
 */
abstract class Layout {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract display(): string;
    abstract handle(key: string, chain:string);
    abstract toString(): string;
}