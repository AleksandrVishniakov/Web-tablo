class Team {
    constructor(options) {
        this.name = options.name || "Новая команда";
        this.score = options.score || 0;
        this.canvasContext = options.canvasContext || new Array(2);
        this.nameSelector = options.nameSelector || "";
        this.addToScore = options.addToScore || 1;
        this.color = options.color || ORANGE_COLOR;
        this.update();
    }

    update() {
        this.#updateName();
        this.#updateScore();
    }

    inc() {
        if (this.score + this.addToScore <= 99) this.score += this.addToScore;
        this.#updateScore();
    }

    dec() {
        if (this.score - this.addToScore >= 0) this.score -= this.addToScore;
        this.#updateScore();
    }

    #updateName() {
        document.querySelector(this.nameSelector).innerHTML = this.name;
    }

    #updateScore() {
        clearCanvas(this.canvasContext[0], MAIN_DIGIT_WIDTH, MAIN_DIGIT_HEIGHT);
        clearCanvas(this.canvasContext[1], MAIN_DIGIT_WIDTH, MAIN_DIGIT_HEIGHT);

        drawDigit[div(this.score, 10)](this.canvasContext[0], 150, this.color);
        drawDigit[this.score % 10](this.canvasContext[1], 150, this.color);
    }
}

class PeriodCounter {
    constructor(options) {
        this.score = options.score || 0;
        this.color = options.color || ORANGE_COLOR;
        this.update();
    }

    update() {
        clearCanvas(CONTEXT_PERIOD_COUNTER, PERIOD_DIGIT_WIDTH, PERIOD_DIGIT_HEIGHT);
        drawDigit[this.score](CONTEXT_PERIOD_COUNTER, 100, this.color);
    }

    inc() {
        if (this.score < 9) this.score++;
        this.update();
    }

    dec() {
        if (this.score > 0) this.score--;
        this.update();
    }
}