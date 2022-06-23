/**
 * Implements a stack of screens
 * 
 * The screen manager has two variables
 * @param screen  - the currently active screen, may be either fullscreen or an overlay
 * @param scrrens - the array containing the stack of screens, much like the stack of webpages in a web browser
 * 
 * The main screen is the first screen in the stack (this.screens[0]);
 * The game screen is the main screen most of the time during the process of playing.
 * Other than that, the character creation screen and the loading screen are main screens.
 * 
 * The stack is never empty, except for the moment of its creation,
 * therefore there's no need to check for an empty array during runtime when a screen is popped from the stack.
 */
class ScreenManager {
    gameScreenId: string;
    container;
    screen: InterfaceScreen;
    screens: Array<InterfaceScreen>;

    constructor(gameScreenId: string) {
        this.gameScreenId = gameScreenId;
        this.container = document.getElementById(this.gameScreenId);
        this.screens = new Array<InterfaceScreen>;
    }

    push(newScreen: InterfaceScreen): void {
        this.screens.push(newScreen);
        this.screen = this.screens[this.screens.length - 1];
    }

    pop(): void {
        this.screens.pop();
        this.screen = this.screens[this.screens.length - 1];
    }

    /**
     * Passes the argument down the line of controllers, until a controller can handle the key
     * If the screen doesn't react to the specified key, does nothing
     * 
     * @param key keyCode returned by the event
     */
    handle(key: string): void {
        this.screen.handle(key);
    }

    /**
     * Unlike the display() method on any Object down the line, this method doesn't return any value.
     * Instead, it appends the value returned by the current InterfaceScreen (this.screen) to the game screen
     */
    display(): void {
        this.container.innerHTML = this.screen.display();
    }
}