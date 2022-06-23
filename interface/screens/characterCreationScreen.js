var CharacterCreationScreen = /** @class */ (function () {
    function CharacterCreationScreen(root) {
        this.root = root;
    }
    CharacterCreationScreen.prototype.display = function () {
        return this.root.display();
    };
    CharacterCreationScreen.prototype.handle = function (key) {
        var something = false;
        if (something) {
            console.log(key);
        }
        else {
            this.root.handle(key, "CharacterCreationScreen");
        }
        screenManager.display();
    };
    return CharacterCreationScreen;
}());
