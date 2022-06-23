class ListView implements View {
    model: List;

    constructor(model: List) {
        this.model = model;
    }

    display(): string {
        let result = "";
        result += "<div id='list-" + this.model.name + "'>";
        for (var i = 0; i < this.model.size(); i++) {
            result += this.model.get(i).display();
        }
        result += "</div>";
        return result;
    }
}