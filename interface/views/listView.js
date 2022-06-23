var ListView = /** @class */ (function () {
    function ListView(model) {
        this.model = model;
    }
    ListView.prototype.display = function () {
        var result = "";
        result += "<div id='list-" + this.model.name + "'>";
        for (var i = 0; i < this.model.size(); i++) {
            result += this.model.get(i).display();
        }
        result += "</div>";
        return result;
    };
    return ListView;
}());
