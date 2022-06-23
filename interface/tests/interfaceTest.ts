let screenManager: ScreenManager = new ScreenManager('game');

function characterCreationScreenTest(): void {
    let strength: Slider = new Slider(1, 10, 1, "strength", true);
    let intelligence: Slider = new Slider(1, 10, 1, "intelligence", false);
    let agility: Slider = new Slider(1, 10, 1, "agility", false);
    let charisma: Slider = new Slider(1, 10, 1, "charisma", false);
    let statsList: List = new List("stats", true);
    statsList.push(strength);
    statsList.push(intelligence);
    statsList.push(agility);
    statsList.push(charisma);

    let characterCreationScreen: CharacterCreationScreen = new CharacterCreationScreen(statsList);
    screenManager.push(characterCreationScreen);

    let statsContainer = document.createElement('div');
    statsContainer.id = 'stats-container';
    statsContainer.innerHTML = statsList.display();
    document.getElementById('game').appendChild(statsContainer);
}

document.addEventListener('keydown', handleKeypress);

characterCreationScreenTest();