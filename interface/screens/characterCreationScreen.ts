class CharacterCreationScreen implements InterfaceScreen {
    root: Model;

    constructor(root: Model) {
        this.root = root;
    }

    display(): string {
        return this.root.display();
    }

    handle(key: string): void {
        let something: boolean = false;
        if (something) {
            console.log(key);
        } else {
            this.root.handle(key, "CharacterCreationScreen");
        }
        screenManager.display();
    }
}