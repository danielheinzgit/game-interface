class MultipanelController implements Controller {
    model: Multipanel;

    constructor(model: Multipanel) {
        this.model = model;
    }

    handle(key: string, chain: string): void {
        throw new Error("Method not implemented.");
    }
    
}