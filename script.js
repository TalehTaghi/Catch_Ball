let colors = ['brown', 'blueviolet', 'blue', 'green', 'red', 'orange', '#663300', 'yellow'];

let finish = document.querySelector("#finish");
let ball = document.querySelector("#top");
let bar = document.querySelector("#seki");
let score = document.querySelector("#xal");
let general = document.querySelector("#umumi");
let start = document.querySelector("#start");
let barX = 0;
let ballX = 0;
let ballY = 0;
let ex = 5;
let ey = 5;
let scoreT = 0;
let interval;

score.innerHTML = `Sizin xaliniz: ${scoreT}`;

start.addEventListener('click', StartGame);


function StartGame(e) {
    e.target.style.display = 'none';
    finish.style.display = 'none';
    general.style.display = 'block';

    bar.style.backgroundColor = 'brown';
    ball.style.backgroundColor = 'blueviolet';

    interval = setInterval(ballMove, 40);
    document.onkeydown = Key;
}

function Key(e) {
    e = e || window.event;

    if (e.keyCode == "37") {
        if (barX > 0) barX -= 10;
    }

    if (e.keyCode == "39") {
        if (barX < 500) barX += 10;
    }

    barMove();
}

function barMove() {
    bar.style.left = barX + "px";
}

function ballMove() {
    if (ballX < 0 || ballX > 570) {
        ex *= -1;
    }

    if (ballY < 0) {
        ey *= -1;
    }
    else if (ballY > 470) {
        if (ballX >= barX - 30 && ballX <= barX + 100 && ballY > 470) {
            // if (ey > 0) ey++;
            // else ey--;

            ey = (ey > 0) ? ey+1 : ey-1;

            // if (ex > 0) ex++;
            // else ex--;

            ex = (ex > 0) ? ex+1 : ex-1;

            ey *= -1;
            scoreT++;
            score.innerHTML = `Sizin xaliniz: ${scoreT}`;

            bar.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            ball.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        }
        else {
            finish.innerText = `Uduzdunuz!\nSizin xaliniz: ${scoreT}`;
            general.style.display = 'none';
            finish.style.display = 'block';
            start.style.display = 'block';
            start.innerText = 'Yenidən oyna';

            barX = 0;
            ballX = 0;
            ballY = 0;
            ex = 5;
            ey = 5;
            scoreT = 0;
            bar.style.left = '0';
            score.innerHTML = `Sizin xaliniz: ${scoreT}`;

            document.onkeydown = {};
            clearInterval(interval);
        }
    }

    ballX += ex;
    ballY += ey;

    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";
}