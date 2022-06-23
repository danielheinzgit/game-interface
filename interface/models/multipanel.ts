class Multipanel extends Layout {
    panels: Array<Panel>;
    view: MultipanelView;
    controller: MultipanelController;


    constructor(name: string) {
        super(name);
        this.panels = [];
        this.view = new MultipanelView(this);
        this.controller = new MultipanelController(this);
    }

    display(): string {
        return this.view.display();
    }

    push(panel: Model) {
        
    }

    numberOfPanels(): number {
        return this.panels.length;
    }

    handle(key: string, chain: string) {
        this.controller.handle(key, chain);
    }

    toString(): string {
        return "Multipanel <" + this.name + ">" + this.panels.toString();
    }
}