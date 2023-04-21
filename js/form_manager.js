class Form {
    firstTeamName;
    secondTeamName;
    firstTeamScore = 0;
    secondTeamScore = 0;
    addToScore = 1;
    theme = "dark";
    timerType = "stopwatch";
    minutes = 0;
    seconds = 0;

    collectAllData() {
        this.firstTeamName = document.forms["team_1_settings"].elements["team_name"].value;
        this.firstTeamScore = document.forms["team_1_settings"].elements["team_score"].value;

        this.secondTeamName = document.forms["team_2_settings"].elements["team_name"].value;
        this.secondTeamScore = document.forms["team_2_settings"].elements["team_score"].value;

        this.addToScore = document.forms["settings"].elements["add_score"].value;

        this.theme = document.forms["settings"].elements["theme"].value;

        this.timerType = document.forms["timerSet"].elements["timerType"].value;

        this.minutes = document.forms["timerSet"].elements["min"].value;
        this.seconds = document.forms["timerSet"].elements["sec"].value;

        if  (this.addToScore == "") {
            this.addToScore = 1;
        }

        this.checkDataValid();
    }

    checkDataValid() {
        this.firstTeamScore = parseInt(this.firstTeamScore, 10);
        this.secondTeamScore = parseInt(this.secondTeamScore, 10);

        this.minutes = parseInt(this.minutes, 10);
        this.seconds = parseInt(this.seconds, 10);

        this.addToScore = parseInt(this.addToScore, 10);

        if (this.firstTeamScore < 0 || this.firstTeamScore > 99 || !isInteger(this.firstTeamScore)) 
            this.firstTeamScore = 0;

        if (this.secondTeamScore < 0 || this.secondTeamScore > 99 || !isInteger(this.secondTeamScore))
            this.secondTeamScore = 0;

        if (this.minutes < 0 || this.minutes > 99 || !isInteger(this.minutes)) 
            this.minutes = 0;

        if (this.seconds < 0 || this.seconds > 59 || !isInteger(this.seconds)) 
            this.seconds = 0;

        if (this.addToScore < 0 || this.addToScore > 99 || !isInteger(this.addToScore)) 
            this.addToScore = 1;
    }
}