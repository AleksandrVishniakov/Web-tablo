class Themes {
    constructor(options) {
        this.themeName = options.themeName || "dark";
        this.interfaceColor = options.color || ORANGE_COLOR;
        this.update();
    }

    update() {
        let background, text, interface_cl, window_background, window_text, font, placeholder;
        if (this.themeName === "light") {
            background = WHITE_COLOR;
            text = BLACK_COLOR;
            interface_cl = BLACK_COLOR;
            window_background = WHITE_COLOR;
            window_text = BLACK_COLOR;
            font = "Rockwell Nova";
            placeholder = GRAY_COLOR;

            this.interfaceColor = BLACK_COLOR;

            document.documentElement.style.setProperty('--background_img', "none");
            document.documentElement.style.setProperty('--play', "url(../img/play_black.png)");
            document.documentElement.style.setProperty('--pause', "url(../img/pause_black.png)");
            document.documentElement.style.setProperty('--reset', "url(../img/reset_black.png)");
            document.documentElement.style.setProperty('--settings', "url(../img/settings_black.png)");
        }

        if (this.themeName === "dark") {
            background = BLACK_COLOR;
            text = WHITE_COLOR;
            interface_cl = ORANGE_COLOR;
            window_background = WHITE_COLOR;
            window_text = BLACK_COLOR;
            font = "Rockwell Nova";
            placeholder = GRAY_COLOR;

            this.interfaceColor = ORANGE_COLOR;

            document.documentElement.style.setProperty('--background_img', "none");
            document.documentElement.style.setProperty('--play', "url(../img/play.png)");
            document.documentElement.style.setProperty('--pause', "url(../img/pause.png)");
            document.documentElement.style.setProperty('--reset', "url(../img/reset.png)");
            document.documentElement.style.setProperty('--settings', "url(../img/settings.png)");
        }

        if (this.themeName === "isphera") {
            background = BLUE_COLOR;
            text = WHITE_COLOR;
            interface_cl = WHITE_COLOR;
            window_background = LIGHT_BLUE_COLOR;
            window_text = WHITE_COLOR;
            font = "Proxima Nova Bold";
            placeholder = WHITE_COLOR;

            this.interfaceColor = WHITE_COLOR;

            document.documentElement.style.setProperty('--background_img', "url(../img/isphera-background.jpg)");
            document.documentElement.style.setProperty('--play', "url(../img/play_white.png)");
            document.documentElement.style.setProperty('--pause', "url(../img/pause_white.png)");
            document.documentElement.style.setProperty('--reset', "url(../img/reset_white.png)");
            document.documentElement.style.setProperty('--settings', "url(../img/settings_white.png)");
        }

        document.documentElement.style.setProperty('--background_color', background);
        document.documentElement.style.setProperty('--placeholder_color', placeholder);
        document.documentElement.style.setProperty('--text_color', text);
        document.documentElement.style.setProperty('--interface_color', interface_cl);
        document.documentElement.style.setProperty('--window_background_color', window_background);
        document.documentElement.style.setProperty('--window_text_color', window_text);
        document.documentElement.style.setProperty('--font', font);
    }
}