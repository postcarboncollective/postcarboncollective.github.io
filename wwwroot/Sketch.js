﻿let P5;
//DotNet = null;
//SetDotnetReference = function (pDotNetReference) {
//    DotNet = pDotNetReference;
//};

//DisposeJs = function () {
//    if (P5 != null) P5.remove();
//}

//NavigateTo = function (_page) {
//    DotNet.invokeMethodAsync('NavigateTo', _page);
//}

window.setp5 = () => {
    P5 = new p5(sketch, window.document.getElementById('sketch-div'));
    //return true;
};

let sketch = function (p) {

    let fadeIn = false;
    let bgIntroAlphaFadeIn = 0;
    let bgIntroAlphaFadeOut = 255;
    let count0 = 0;
    let logo;
    let ePosX = 0;
    let ePosY = 0;
    let cWidth = 0;
    let cHeight = 0;
    let sizeDiv = 54;
    let fCount = 0;
    let eSpeedDiv = 20;
    let introSpeed = 1;
    let seg = 0;
    var xI, xF, yI, yF, xDistance, xGran, yDistance, yGran;
    let hoover = false;
    let nPos = [];
    for (i = 0; i < 100; i++) {
        nPos[i] = [];
        for (j = 0; j < 2; j++) {
            nPos[i][j] = [];
        }
    }

    var timeSize = 1;
    var timeC = 0;
    var timeP = 0;
    var canvas;
    let aniDiv = 0;

    p.preload = function () {
        logo = p.loadImage('assets/img/PCCLogoBlack.jpg');
    }

    p.setup = function () {
        p.resetBG();
        bgIntroAlpha = 0;
        fadeIn = true;
        bgIntroAlpha = 255;
    }

    p.draw = function () {
        p.resetBG();
        p.drawMenu();
        p.introAnimation();
    }

    p.resetBG = function () {
        if (p.windowWidth >= (p.windowHeight)) {
            canvas = p.createCanvas(p.windowHeight, p.windowHeight)
        }
        else { canvas = p.createCanvas(p.windowWidth, p.windowWidth) }
        canvas.parent('sketch-div');
        p.background(0, 0, 0);

        cWidth = p.width / sizeDiv;
        cHeight = p.height / sizeDiv;

        nPos[0][0][0] = p.width / 1.7125;
        nPos[0][1][0] = p.height / 2.56;
        nPos[0][0][1] = p.width / 1.88;
        nPos[0][1][1] = p.height / 2.27;
        nPos[0][0][2] = p.width / 1.88;
        nPos[0][1][2] = p.height / 2.05;

        nPos[1][0][0] = p.width / 1.7225;
        nPos[1][1][0] = p.height / 2.81;
        nPos[1][0][1] = p.width / 1.84;
        nPos[1][1][1] = p.height / 3.17;
        nPos[1][0][2] = p.width / 3.1;
        nPos[1][1][2] = p.height / 3.18;

        //nPos[2][0][0] = p.width / 1.807;
        //nPos[2][1][0] = p.height / 2.72;
        //nPos[2][0][1] = p.width / 2.2;
        //nPos[2][1][1] = p.height / 2.72;
        //nPos[2][0][2] = p.width / 2.395;
        //nPos[2][1][2] = p.height / 2.48;

        nPos[3][0][0] = p.width / 1.555;
        nPos[3][1][0] = p.height / 2.115;
        nPos[3][0][1] = p.width / 1.42;
        nPos[3][1][1] = p.height / 2.115;
        nPos[3][0][2] = p.width / 1.225;
        nPos[3][1][2] = p.height / 1.7;

        //nPos[4][0][0] = p.width / 1.46;
        //nPos[4][1][0] = p.height / 2.275;
        //nPos[4][0][1] = p.width / 1.29;
        //nPos[4][1][1] = p.height / 2.275;
        //nPos[4][0][2] = p.width / 1.18;
        //nPos[4][1][2] = p.height / 2.75;

        //nPos[5][0][0] = p.width / 1.708;
        //nPos[5][1][0] = p.height / 2;
        //nPos[5][0][1] = p.width / 1.708;
        //nPos[5][1][1] = p.height / 1.45;
        //nPos[5][0][2] = p.width / 1.53;
        //nPos[5][1][2] = p.height / 1.315;
        //nPos[5][0][3] = p.width / 1.33;
        //nPos[5][1][3] = p.height / 1.315;
    }

    p.drawMenu = function () {
        if (fadeIn == true) {
            timeP = p.millis() - timeC;
            if (timeP > timeSize) {
                timeC = p.millis();
            }

            p.fill(255);
            p.stroke(255);
            p.strokeWeight(((p.width + p.height) / 2) / 200);
            p.rect(p.width / 1.66, p.height / 2.92, p.width / 16, p.height / 16);

            p.ellipse(nPos[0][0][0], nPos[0][1][0], cWidth, cHeight);
            p.line(nPos[0][0][0], nPos[0][1][0], nPos[0][0][1], nPos[0][1][1]);
            p.line(nPos[0][0][1], nPos[0][1][1], nPos[0][0][2], nPos[0][1][2]);
            p.ellipse(nPos[1][0][0], nPos[1][1][0], cWidth, cHeight);
            p.line(nPos[1][0][0], nPos[1][1][0], nPos[1][0][1], nPos[1][1][1]);
            p.line(nPos[1][0][1], nPos[1][1][1], nPos[1][0][2], nPos[1][1][2]);
            //p.ellipse(nPos[2][0][0], nPos[2][1][0], cWidth, cHeight);
            //p.line(nPos[2][0][0], nPos[2][1][0], nPos[2][0][1], nPos[2][1][1]);
            //p.line(nPos[2][0][1], nPos[2][1][1], nPos[2][0][2], nPos[2][1][2]);
            p.ellipse(nPos[3][0][0], nPos[3][1][0], cWidth, cHeight);
            p.line(nPos[3][0][0], nPos[3][1][0], nPos[3][0][1], nPos[3][1][1]);
            p.line(nPos[3][0][1], nPos[3][1][1], nPos[3][0][2], nPos[3][1][2]);
            p.ellipse(nPos[4][0][0], nPos[4][1][0], cWidth, cHeight);
            p.line(nPos[4][0][0], nPos[4][1][0], nPos[4][0][1], nPos[4][1][1]);
            p.line(nPos[4][0][1], nPos[4][1][1], nPos[4][0][2], nPos[4][1][2]);

            p.ellipse(nPos[5][0][0], nPos[5][1][0], cWidth, cHeight);
            p.line(nPos[5][0][0], nPos[5][1][0], nPos[5][0][1], nPos[5][1][1]);
            p.line(nPos[5][0][1], nPos[5][1][1], nPos[5][0][2], nPos[5][1][2]);
            p.line(nPos[5][0][2], nPos[5][1][2], nPos[5][0][3], nPos[5][1][3]);

            p.fill(0);
            p.ellipse(nPos[0][0][2], nPos[0][1][2], cWidth, cHeight);
            p.ellipse(nPos[1][0][2], nPos[1][1][2], cWidth, cHeight);
            //p.ellipse(nPos[2][0][2], nPos[2][1][2], cWidth, cHeight);
            p.ellipse(nPos[3][0][2], nPos[3][1][2], cWidth, cHeight);
            p.ellipse(nPos[4][0][2], nPos[4][1][2], cWidth, cHeight);
            p.ellipse(nPos[5][0][3], nPos[5][1][3], cWidth, cHeight);

            p.fill(255);
            p.strokeWeight(0);
            p.textAlign(p.RIGHT, p.CENTER);
            p.textSize(((p.width + p.height) / 2) / sizeDiv);
            p.text('Events', nPos[0][0][2] - (p.width / sizeDiv), nPos[0][1][2]);
            p.text('Info', nPos[1][0][2] - (p.width / sizeDiv), nPos[1][1][2]);
            //p.text('Projects', nPos[2][0][2] - (p.width / sizeDiv), nPos[2][1][2]);
            p.textAlign(p.LEFT, p.CENTER);
            p.text('Sentients', nPos[3][0][2] + (p.width / sizeDiv), nPos[3][1][2]);
            //p.text('Gallery', nPos[4][0][2] + (p.width / sizeDiv), nPos[4][1][2]);
            //p.text('Label', nPos[5][0][3] + (p.width / sizeDiv), nPos[5][1][3]);

            hoover = false;

            for (n = 0; n < 6; n++) {
                xI = nPos[n][0][nPos[n][0].length - (seg + 1)];
                yI = nPos[n][1][nPos[n][1].length - (seg + 1)];
                xF = nPos[n][0][nPos[n][0].length - (seg + 2)];
                yF = nPos[n][1][nPos[n][1].length - (seg + 2)];
                xDistance = xF - xI;
                xGran = xDistance / eSpeedDiv;
                yDistance = yF - yI;
                yGran = yDistance / eSpeedDiv;

                if (p.mouseX > (nPos[n][0][nPos[n][0].length - 1]) - (cWidth) && p.mouseX < ((nPos[n][0][nPos[n][0].length - 1]) + (cWidth))) {
                    if (p.mouseY > (nPos[n][1][nPos[n][1].length - 1]) - (cHeight) && p.mouseY < (nPos[n][1][nPos[n][1].length - 1]) + (cHeight)) {
                        if (p.mouseIsPressed) {
                            if (n == 0) {
                                window.location.href = 'https://postcarboncollective.github.io/Events';
                                //NavigateTo("Events");
                            }
                            if (n == 1) {
                                window.location.href = 'https://postcarboncollective.github.io/Info';
                                //NavigateTo("Info");
                            }
                            if (n == 3) {
                                window.location.href = 'https://postcarboncollective.github.io/Sentients';
                                //NavigateTo("Sentients")
                            }
                            //if (n == 4) { NavigateTo("Gallery"); }
                        }
                        hoover = true;
                        p.fill(255);
                        p.ellipse(nPos[n][0][nPos[n][0].length - 1], nPos[n][1][nPos[n][1].length - 1], cWidth, cHeight);
                        p.fill(255, p.random(100, 200));
                        p.ellipse(xI + ePosX, yI + ePosY, cWidth, cHeight);


                        if (fCount < eSpeedDiv) {
                            // if(timeP > timeSize){
                            ePosX += xGran;
                            ePosY += yGran;
                            fCount++;
                        }

                        else {
                            ePosX = 0;
                            ePosY = 0;
                            fCount = 0;
                            seg += 1;
                            if (nPos[n][0].length - (seg + 2) < 0) {
                                seg = 0;
                            }
                        }
                    }
                }
            }
            if (hoover == false) {
                ePosX = 0;
                ePosY = 0;
                fCount = 0;
                seg = 0;
            }
        }
    }

    p.introAnimation = function () {
        count0++;
        p.image(logo, 0, 0, p.width, p.height);
        if (count0 > aniDiv) {
            if (fadeIn == false) {
                p.tint(255, bgIntroAlphaFadeIn);
                bgIntroAlphaFadeIn += introSpeed;
            }
            if (fadeIn == true) {
                if (bgIntroAlphaFadeOut > 30) {
                    p.tint(255, bgIntroAlphaFadeOut);
                    bgIntroAlphaFadeOut -= introSpeed;
                }
            }
            count0 = 0;
        }
        if (bgIntroAlphaFadeIn > 255) {
            fadeIn = true;
        }
    }
};