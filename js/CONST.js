function div(val, by) {
    return (val - (val % by)) / 10;
}

function clearCanvas(context, width, height) {
    context.clearRect(0, 0, width, height);
}

function isInteger (value) {
    return typeof value === 'number' &&
        isFinite(value) &&
        Math.floor(value) === value;
};

/*Colors*/
const ORANGE_COLOR = "#FFA500";
const BLACK_COLOR = "#000000";
const WHITE_COLOR = "#FFFFFF";
const BLUE_COLOR = "#367fc5";
const LIGHT_BLUE_COLOR = "rgba(0, 118, 200, 1)";
const GRAY_COLOR = "#8f8f8f";

/*Drawing canvas numbers*/
let drawDigit = [
    function (canvasContext, length, color) {
        drawNumberPart('a', canvasContext, length, color);
        drawNumberPart('b', canvasContext, length, color);
        drawNumberPart('c', canvasContext, length, color);
        drawNumberPart('d', canvasContext, length, color);
        drawNumberPart('e', canvasContext, length, color);
        drawNumberPart('f', canvasContext, length, color);
    },

    function (canvasContext, length, color) {
        drawNumberPart('b', canvasContext, length, color);
        drawNumberPart('c', canvasContext, length, color);
    },

    function (canvasContext, length, color) {
        drawNumberPart('a', canvasContext, length, color);
        drawNumberPart('b', canvasContext, length, color);
        drawNumberPart('d', canvasContext, length, color);
        drawNumberPart('e', canvasContext, length, color);
        drawNumberPart('g', canvasContext, length, color);
    },

    function (canvasContext, length, color) {
        drawNumberPart('a', canvasContext, length, color);
        drawNumberPart('b', canvasContext, length, color);
        drawNumberPart('c', canvasContext, length, color);
        drawNumberPart('d', canvasContext, length, color);
        drawNumberPart('g', canvasContext, length, color);
    },

    function (canvasContext, length, color) {
        drawNumberPart('b', canvasContext, length, color);
        drawNumberPart('c', canvasContext, length, color);
        drawNumberPart('f', canvasContext, length, color);
        drawNumberPart('g', canvasContext, length, color);
    },

    function (canvasContext, length, color) {
        drawNumberPart('a', canvasContext, length, color);
        drawNumberPart('c', canvasContext, length, color);
        drawNumberPart('d', canvasContext, length, color);
        drawNumberPart('f', canvasContext, length, color);
        drawNumberPart('g', canvasContext, length, color);
    },

    function (canvasContext, length, color) {
        drawNumberPart('a', canvasContext, length, color);
        drawNumberPart('c', canvasContext, length, color);
        drawNumberPart('d', canvasContext, length, color);
        drawNumberPart('e', canvasContext, length, color);
        drawNumberPart('f', canvasContext, length, color);
        drawNumberPart('g', canvasContext, length, color);
    },

    function (canvasContext, length, color) {
        drawNumberPart('a', canvasContext, length, color);
        drawNumberPart('b', canvasContext, length, color);
        drawNumberPart('c', canvasContext, length, color);
    },

    function (canvasContext, length, color) {
        drawNumberPart('a', canvasContext, length, color);
        drawNumberPart('b', canvasContext, length, color);
        drawNumberPart('c', canvasContext, length, color);
        drawNumberPart('d', canvasContext, length, color);
        drawNumberPart('e', canvasContext, length, color);
        drawNumberPart('f', canvasContext, length, color);
        drawNumberPart('g', canvasContext, length, color);
    },

    function (canvasContext, length, color) {
        drawNumberPart('a', canvasContext, length, color);
        drawNumberPart('b', canvasContext, length, color);
        drawNumberPart('c', canvasContext, length, color);
        drawNumberPart('d', canvasContext, length, color);
        drawNumberPart('f', canvasContext, length, color);
        drawNumberPart('g', canvasContext, length, color);
    }
];

function drawNumberPart(place, canvasContext, length, color) {
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
        canvasContext.fillStyle = color;
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
        canvasContext.fillStyle = color;
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

/*Canvas initialization*/
const TEAM1_COUNTER_FIRST_DIGIT = document.getElementById("team1_1");
const TEAM1_COUNTER_SECOND_DIGIT = document.getElementById("team1_2");
const TEAM2_COUNTER_FIRST_DIGIT = document.getElementById("team2_1");
const TEAM2_COUNTER_SECOND_DIGIT = document.getElementById("team2_2");

const CONTEXT_TEAM1_FIRST_DIGIT = TEAM1_COUNTER_FIRST_DIGIT.getContext("2d");
const CONTEXT_TEAM1_SECOND_DIGIT = TEAM1_COUNTER_SECOND_DIGIT.getContext("2d");
const CONTEXT_TEAM2_FIRST_DIGIT = TEAM2_COUNTER_FIRST_DIGIT.getContext("2d");
const CONTEXT_TEAM2_SECOND_DIGIT = TEAM2_COUNTER_SECOND_DIGIT.getContext("2d");

const MINUTES_FIRST_DIGIT = document.getElementById("min1");
const MINUTES_SECOND_DIGIT = document.getElementById("min2");
const SECONDS_FIRST_DIGIT = document.getElementById("sec1");
const SECONDS_SECOND_DIGIT = document.getElementById("sec2");

const CONTEXT_MINUTES_FIRST_DIGIT = MINUTES_FIRST_DIGIT.getContext("2d");
const CONTEXT_MINUTES_SECOND_DIGIT = MINUTES_SECOND_DIGIT.getContext("2d");
const CONTEXT_SECONDS_FIRST_DIGIT = SECONDS_FIRST_DIGIT.getContext("2d");
const CONTEXT_SECONDS_SECOND_DIGIT = SECONDS_SECOND_DIGIT.getContext("2d");

const PERIOD_COUNTER = document.getElementById("periodCanvas");
const CONTEXT_PERIOD_COUNTER = PERIOD_COUNTER.getContext("2d");

/*Canvas size*/
const MAIN_DIGIT_HEIGHT = 380;
const MAIN_DIGIT_WIDTH = 190;

const PERIOD_DIGIT_WIDTH = 125.4;
const PERIOD_DIGIT_HEIGHT = 270;