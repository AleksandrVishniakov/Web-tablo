let teamC1_1 = document.getElementById("team1_1");
let teamC1_2 = document.getElementById("team1_2");
let teamC2_1 = document.getElementById("team2_1");
let teamC2_2 = document.getElementById("team2_2");

let teamCanvas1_1 = teamC1_1.getContext("2d");
let teamCanvas1_2 = teamC1_2.getContext("2d");
let teamCanvas2_1 = teamC2_1.getContext("2d");
let teamCanvas2_2 = teamC2_2.getContext("2d");

teamC1_1.width = 190;
teamC1_1.height = 380;
teamC1_2.width = 190;
teamC1_2.height = 380;
teamC2_1.width = 190;
teamC2_1.height = 380;
teamC2_2.width = 190;
teamC2_2.height = 380;

let min1 = document.getElementById("min1");
let min2 = document.getElementById("min2");
let sec1 = document.getElementById("sec1");
let sec2 = document.getElementById("sec2");

let minC1 = min1.getContext("2d");
let minC2 = min2.getContext("2d");
let secC1 = sec1.getContext("2d");
let secC2 = sec2.getContext("2d");

min1.width = 190;
min1.height = 380;
min2.width = 190;
min2.height = 380;
sec1.width = 190;
sec1.height = 380;
sec2.width = 190;
sec2.height = 380;

let min = 0;
let sec = 0;
let period = 0;

let periodCanvas = document.getElementById("periodCanvas");
let periodContext = periodCanvas.getContext("2d");

periodCanvas.width = 190 * 0.66;
periodCanvas.height = 270;

let timer;
let timerStarted = false;

let drawDigit = [
    function (canvasContext, length) {
        drawNumberPart('a', canvasContext, length);
        drawNumberPart('b', canvasContext, length);
        drawNumberPart('c', canvasContext, length);
        drawNumberPart('d', canvasContext, length);
        drawNumberPart('e', canvasContext, length);
        drawNumberPart('f', canvasContext, length);
    },

    function (canvasContext, length) {
        drawNumberPart('b', canvasContext, length);
        drawNumberPart('c', canvasContext, length);
    },

    function (canvasContext, length) {
        drawNumberPart('a', canvasContext, length);
        drawNumberPart('b', canvasContext, length);
        drawNumberPart('d', canvasContext, length);
        drawNumberPart('e', canvasContext, length);
        drawNumberPart('g', canvasContext, length);
    },

    function (canvasContext, length) {
        drawNumberPart('a', canvasContext, length);
        drawNumberPart('b', canvasContext, length);
        drawNumberPart('c', canvasContext, length);
        drawNumberPart('d', canvasContext, length);
        drawNumberPart('g', canvasContext, length);
    },

    function (canvasContext, length) {
        drawNumberPart('b', canvasContext, length);
        drawNumberPart('c', canvasContext, length);
        drawNumberPart('f', canvasContext, length);
        drawNumberPart('g', canvasContext, length);
    },

    function (canvasContext, length) {
        drawNumberPart('a', canvasContext, length);
        drawNumberPart('c', canvasContext, length);
        drawNumberPart('d', canvasContext, length);
        drawNumberPart('f', canvasContext, length);
        drawNumberPart('g', canvasContext, length);
    },

    function (canvasContext, length) {
        drawNumberPart('a', canvasContext, length);
        drawNumberPart('c', canvasContext, length);
        drawNumberPart('d', canvasContext, length);
        drawNumberPart('e', canvasContext, length);
        drawNumberPart('f', canvasContext, length);
        drawNumberPart('g', canvasContext, length);
    },

    function (canvasContext, length) {
        drawNumberPart('a', canvasContext, length);
        drawNumberPart('b', canvasContext, length);
        drawNumberPart('c', canvasContext, length);
    },

    function (canvasContext, length) {
        drawNumberPart('a', canvasContext, length);
        drawNumberPart('b', canvasContext, length);
        drawNumberPart('c', canvasContext, length);
        drawNumberPart('d', canvasContext, length);
        drawNumberPart('e', canvasContext, length);
        drawNumberPart('f', canvasContext, length);
        drawNumberPart('g', canvasContext, length);
    },

    function (canvasContext, length) {
        drawNumberPart('a', canvasContext, length);
        drawNumberPart('b', canvasContext, length);
        drawNumberPart('c', canvasContext, length);
        drawNumberPart('d', canvasContext, length);
        drawNumberPart('f', canvasContext, length);
        drawNumberPart('g', canvasContext, length);
    }
];

let team1 = {
    counter: 0,
    time: 0,
    name: "Команда 1"
};

let team2 = {
    counter: 0,
    time: 0,
    name: "Команда 2"
};

updateTeamsCounter();
updateTimer();
updatePeriod();

function drawNumberPart(place, canvasContext, length) {
    let x;
    let y;
    let horizontal;
    switch (place) {
        case 'a':
            x = 15;
            y = 5;
            horizontal = true;
            break;
        case 'b':
            x = length + 10;
            y = 20;
            horizontal = false;
            break;
        case 'c':
            x = length + 10;
            y = length + 40;
            horizontal = false;
            break;
        case 'd':
            x = 15;
            y = length * 2 + 55;
            horizontal = true;
            break;
        case 'e':
            x = 0;
            y = length + 40;
            horizontal = false;
            break;
        case 'f':
            x = 0;
            y = 20;
            horizontal = false;
            break;
        case 'g':
            x = 15;
            y = length + 30;
            horizontal = true;
            break;
    }

    if (horizontal) {
        canvasContext.fillStyle = "orange";
        canvasContext.beginPath();
        canvasContext.moveTo(x, y + 10);
        canvasContext.lineTo(x + 10, y);
        canvasContext.lineTo(x + length - 10, y);
        canvasContext.lineTo(x + length, y + 10);
        canvasContext.lineTo(x + length - 10, y + 20);
        canvasContext.lineTo(x + 10, y + 20);
        canvasContext.lineTo(x, y + 10);
        canvasContext.closePath();
        canvasContext.fill();
    } else {
        canvasContext.fillStyle = "orange";
        canvasContext.beginPath();
        canvasContext.moveTo(x + 10, y);
        canvasContext.lineTo(x, y + 10);
        canvasContext.lineTo(x, y + 10 + length);
        canvasContext.lineTo(x + 10, y + 20 + length);
        canvasContext.lineTo(x + 20, y + 10 + length);
        canvasContext.lineTo(x + 20, y + 10);
        canvasContext.lineTo(x + 10, y);
        canvasContext.closePath();
        canvasContext.fill();
    }
}

function plusButtonPressed(action, teamN) {
    if (teamN == 1) {
        if (action == '+') {
            if (team1.counter < 99) {
                team1.counter++;
            }
        } else {
            if (team1.counter != 0) {
                team1.counter--;
            }
        }
    } else {
        if (action == '+') {
            if (team2.counter < 99) {
                team2.counter++;
            }
        } else {
            if (team2.counter != 0) {
                team2.counter--;
            }
        }
    }

    updateTeamsCounter();
    return false;
}

function updateTeamsCounter() {
    clearCanvas(teamCanvas1_1, 190, 380);
    clearCanvas(teamCanvas1_2, 190, 380);
    clearCanvas(teamCanvas2_1, 190, 380);
    clearCanvas(teamCanvas2_2, 190, 380);
    if (team1.counter < 10) {
        drawDigit[0](teamCanvas1_1, 150);
        drawDigit[team1.counter](teamCanvas1_2, 150);
    } else {
        drawDigit[Math.floor(team1.counter / 10)](teamCanvas1_1, 150);
        drawDigit[team1.counter % 10](teamCanvas1_2, 150);
    }

    if (team2.counter < 10) {
        drawDigit[0](teamCanvas2_1, 150);
        drawDigit[team2.counter](teamCanvas2_2, 150);
    } else {
        drawDigit[Math.floor(team2.counter / 10)](teamCanvas2_1, 150);
        drawDigit[team2.counter % 10](teamCanvas2_2, 150);
    }
}

function clearCanvas(context, width, height) {
    context.clearRect(0, 0, width, height);
}

function tick() {
    sec++;
    if (sec == 60) {
        sec = 0;
        min++;
    }
    updateTimer();
}

function updateTimer() {
    clearCanvas(minC1, 190, 380);

    clearCanvas(minC2, 190, 380);

    clearCanvas(secC1, 190, 380);
    clearCanvas(secC2, 190, 380);
    if (min < 10) {
        drawDigit[0](minC1, 150);
        drawDigit[min](minC2, 150);
    } else {
        drawDigit[Math.floor(min / 10)](minC1, 150);
        drawDigit[min % 10](minC2, 150);
    }

    if (sec < 10) {
        drawDigit[0](secC1, 150);
        drawDigit[sec](secC2, 150);
    } else {
        drawDigit[Math.floor(sec / 10)](secC1, 150);
        drawDigit[sec % 10](secC2, 150);
    }
}

function startTimer() {
    if (!timerStarted) {
        timerStarted = true;
        timer = setInterval(tick, 1000);
    }
    return false;
}

function pauseTimer() {

    if (timerStarted) {

        timerStarted = false;
        clearInterval(timer);
    }
    return false;
}

function resetTimer() {
    timerStarted = false;
    clearInterval(timer);
    min = 0;
    sec = 0;
    updateTimer();
    return false;
}

function periodPressed(action) {
    if (action == '+') {
        if (period < 9) {
            period++;
        }
    } else {
        if (period > 0) {
            period--;
        }
    }
    
    updatePeriod();
    return false;
}

function updatePeriod() {
    clearCanvas(periodContext, 190 * 0.66, 270);
    drawDigit[period](periodContext, 100)
}

function createSettingsWindow() {
    let setWindow = document.getElementById("settingWindow");
    
    if (setWindow.classList.contains("panel-left")) {
        setWindow.classList.remove("panel-left");
        setWindow.classList.toggle("panel-right");
    }
    
    document.getElementById("table").classList.toggle("noPointerEvent");
    return false;
}

function getFormParams() {
    //имя команды
    team1.name = document.forms["team1"].elements["name"].value;
    team2.name = document.forms["team2"].elements["name"].value;
    team1.name == "" ? team1.name = "Команда 1" : team1.name = team1.name;
    team2.name == "" ? team2.name = "Команда 2" : team2.name = team2.name;

    //стартовый счёт
    team1.counter = document.forms["team1"].elements["counter"].value;
    team2.counter = document.forms["team2"].elements["counter"].value;
    team1.counter == "" ? team1.counter = 0 : team1.counter = parseInt(team1.counter);
    team2.counter == "" ? team2.counter = 0 : team2.counter = parseInt(team2.counter);

    if (team1.counter > 99 || team1.counter < 0) {
        team1.counter = 0;
    }
    if (team2.counter > 99 || team2.counter < 0) {
        team2.counter = 0;
    }

    //тема
    let theme = document.forms["settings"].elements["theme"].value;

    switch (theme) {
        case 'light_theme':
            document.getElementById("table").style.backgroundColor = "white";
            document.getElementsByClassName("tButton").style.backgroundColor = "white";
            document.getElementsByClassName("tButton").style.borderColor = "black";
            break;
        case 'dark_theme':
            document.getElementById("table").style.backgroundColor = "black";
            document.getElementsByClassName("tButton").style.backgroundColor = "black";
            document.getElementsByClassName("tButton").style.borderColor = "none";
            break;
    }
}

function updateTableData() {
    document.getElementById("team_name_1").innerHTML = team1.name;
    document.getElementById("team_name_2").innerHTML = team2.name;
}

function closeWindow(saveParams) {
    let setWindow = document.getElementById("settingWindow");
    document.getElementById("table").classList.remove("noPointerEvent");
    if (setWindow.classList.contains("panel-right")) {
        setWindow.classList.remove("panel-right");
        setWindow.classList.toggle("panel-left");
    }

    if (saveParams) {
        getFormParams();
        updateTableData();
        updateTeamsCounter();
    }
    return false;
}