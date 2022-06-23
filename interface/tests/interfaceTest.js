var screenManager = new ScreenManager('game');
function characterCreationScreenTest() {
    var strength = new Slider(1, 10, 1, "strength", true);
    var intelligence = new Slider(1, 10, 1, "intelligence", false);
    var agility = new Slider(1, 10, 1, "agility", false);
    var charisma = new Slider(1, 10, 1, "charisma", false);
    var statsList = new List("stats", true);
    statsList.push(strength);
    statsList.push(intelligence);
    statsList.push(agility);
    statsList.push(charisma);
    var characterCreationScreen = new CharacterCreationScreen(statsList);
    screenManager.push(characterCreationScreen);
    var statsContainer = document.createElement('div');
    statsContainer.id = 'stats-container';
    statsContainer.innerHTML = statsList.display();
    document.getElementById('game').appendChild(statsContainer);
}
document.addEventListener('keydown', handleKeypress);
characterCreationScreenTest();
