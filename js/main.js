let Theme = new Themes ({
    themeName: "dark",
    interfaceColor: ORANGE_COLOR
});

let TimeCounter = new Time ({
    startMin: 0,
    startSec: 0,
    timerType: "stopwatch"
});

let Team1 = new Team ({
    name: "Команда1 ",
    nameSelector: "#team_name_1",
    canvasContext: [
        CONTEXT_TEAM1_FIRST_DIGIT,
        CONTEXT_TEAM1_SECOND_DIGIT
    ]
});

let Team2 = new Team ({
    name: "Команда 2",
    nameSelector: "#team_name_2",
    canvasContext: [
        CONTEXT_TEAM2_FIRST_DIGIT,
        CONTEXT_TEAM2_SECOND_DIGIT
    ]
});

let Period = new PeriodCounter({
    score: 0
});

let teamForm = new Form;

document.querySelector("button.tButton.play").addEventListener(
    "click", () => TimeCounter.play()
);

document.querySelector("button.tButton.pause").addEventListener(
    "click", () => TimeCounter.pause()
);

document.querySelector("button.tButton.reset").addEventListener(
    "click", () => TimeCounter.reset()
);

document.querySelector("button.setWindow.settings").addEventListener(
    "click", () => document.querySelector(".modalWindow").classList.toggle("open")
);

document.querySelector("#save").addEventListener(
    "click", () => {
        teamForm.collectAllData();
        changeFormParameters();
        document.querySelector(".modalWindow").classList.toggle("open");
    }
);

document.querySelector("#cancel").addEventListener(
    "click", () => {
        document.querySelector(".modalWindow").classList.toggle("open");
    }
);

function teamButtonPressed(sign, team) {
    if (team == 1) {
        sign == "+" ? Team1.inc() : Team1.dec();
    } else {
        sign == "+" ? Team2.inc() : Team2.dec();
    }
    return false;
}

function periodPressed(sign) {
    sign == "+" ? Period.inc() : Period.dec();
    return false;
}

function changeFormParameters() {
    Theme.themeName = teamForm.theme;
    Theme.update();
    Team1.color = Theme.interfaceColor;
    Team2.color = Theme.interfaceColor;
    Period.color = Theme.interfaceColor;
    TimeCounter.color = Theme.interfaceColor;
    
    TimeCounter.startMin = teamForm.minutes;
    TimeCounter.startSec = teamForm.seconds;
    TimeCounter.timerType = teamForm.timerType;
    TimeCounter.reset();

    Team1.name = teamForm.firstTeamName;
    Team1.score = teamForm.firstTeamScore;
    Team1.addToScore = teamForm.addToScore;
    Team1.update();

    Team2.name = teamForm.secondTeamName;
    Team2.score = teamForm.secondTeamScore;
    Team2.addToScore = teamForm.addToScore;
    Team2.update();

    Period.update();
}