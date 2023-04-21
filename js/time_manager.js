class Time {
    constructor(options) {
        this.startMin = options.startMin || 0;
        this.startSec = options.startSec || 0;

        this.timerType = options.timerType || "stopwatch";

        this.minutes = this.startMin;
        this.seconds = this.startSec;

        this.color = options.color || ORANGE_COLOR;

        this.update();
    }

    timer = "";
    #timerStarted = false;

    update() {
        clearCanvas(CONTEXT_MINUTES_FIRST_DIGIT, MAIN_DIGIT_WIDTH, MAIN_DIGIT_HEIGHT);
        clearCanvas(CONTEXT_MINUTES_SECOND_DIGIT, MAIN_DIGIT_WIDTH, MAIN_DIGIT_HEIGHT);
        clearCanvas(CONTEXT_SECONDS_FIRST_DIGIT, MAIN_DIGIT_WIDTH, MAIN_DIGIT_HEIGHT);
        clearCanvas(CONTEXT_SECONDS_SECOND_DIGIT, MAIN_DIGIT_WIDTH, MAIN_DIGIT_HEIGHT);

        drawDigit[div(this.minutes, 10)](CONTEXT_MINUTES_FIRST_DIGIT, 150, this.color);
        drawDigit[this.minutes % 10](CONTEXT_MINUTES_SECOND_DIGIT, 150, this.color);
        drawDigit[div(this.seconds, 10)](CONTEXT_SECONDS_FIRST_DIGIT, 150, this.color);
        drawDigit[this.seconds % 10](CONTEXT_SECONDS_SECOND_DIGIT, 150, this.color);
    }

    play() {
        if(this.#timerStarted) return;
        this.timer = setInterval(() => {
            this.tick();
            this.update();
        }, 1000);
        this.#timerStarted = true;
    }

    pause() {
        this.#timerStarted = false;
        clearInterval(this.timer);
    }

    reset() {
        clearInterval(this.timer);
        this.#timerStarted = false;
        this.minutes = this.startMin;
        this.seconds = this.startSec;
        this.update();
    }

    tick() {
        if (this.timerType == "stopwatch") {
            ++this.seconds;
            if (this.seconds == 60) {
                ++this.minutes;
                this.seconds = 0;
            }
        }

        if (this.timerType == "timer") {
            if (!(this.minutes == 0 && this.seconds == 0)) {
                --this.seconds;
                if (this.seconds == -1) {
                    if (this.minutes != 0) {
                        --this.minutes;
                        this.seconds = 59;
                    }
                }
            }
        }
    }
};