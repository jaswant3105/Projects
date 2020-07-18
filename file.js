// JavaScript source code
var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var four = document.querySelector('#four');
var five = document.querySelector('#five');
var six = document.querySelector('#six');
var seven = document.querySelector('#seven');
var eight = document.querySelector('#eight');
var nine = document.querySelector('#nine');
var restart = document.querySelector('#b');
var a = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var available = 9;
var f = 0;
var player = 1;
function clear() {
    one.textContent = ''; two.textContent = ''; three.textContent = '';
    four.textContent = ''; five.textContent = ''; six.textContent = '';
    seven.textContent = ''; eight.textContent = ''; nine.textContent = '';
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            a[i][j] = 0;
        }
    }
    f = 0;
    available = 9;
    player = 1;
}
function check() {
    for (var i = 0; i < 3; i++) {
        if ((a[i][0] == a[i][1])&&(a[i][1] == a[i][2])) {
            if (a[i][0] != 0) {
                f = player + 1;
            }
        }
        if ((a[0][i] == a[1][i]) && (a[1][i] == a[2][i])) {
            if (a[0][i] != 0) {
                f = player + 1;
            }
        }
    }
    if ((a[0][0] == a[1][1]) && (a[1][1] == a[2][2])) {
        if (a[0][0] != 0) {
            f = player + 1;
        }
    }
    if ((a[2][0] == a[1][1]) && (a[1][1] == a[0][2])) {
        if (a[2][0] != 0) {
            f = player + 1;
        }
    }
}
restart.addEventListener('click', clear);
one.addEventListener('click',f1);
two.addEventListener('click', f2);
three.addEventListener('click', f3);
four.addEventListener('click', f4);
five.addEventListener('click', f5);
six.addEventListener('click', f6);
seven.addEventListener('click', f7);
eight.addEventListener('click', f8);
nine.addEventListener('click', f9);
function next() {
    if (f == 0) {
        if (available > 0) {
            player += 1;
            player = player % 2;
            move();
        }
        else if (available == 0) {
            alert("TIE!");
        }
    }
    else {
        if (f == 1) {
            alert("Machine Wins!");
        }
        else if (f == 2) {
            alert("You Wins!");
        }
    }
}
function f1() {
    if (a[0][0] == 0) {
        one.textContent = 'X';
        a[0][0] = 2;
        available -= 1;
        check();
        next();
    }
}
function f2() {
    if (a[0][1]==0) {
        two.textContent = 'X';
        a[0][1] = 2;
        available -= 1;
        check();
        next();
    }
}
function f3() {
    if (a[0][2] == 0) {
        three.textContent = 'X';
        a[0][2] = 2;
        available -= 1;
        check();
        next();
    }
}
function f4() {
    if (a[1][0] == 0) {
        four.textContent = 'X';
        a[1][0] = 2;
        available -= 1;
        check();
        next();
    }
}
function f5() {
    if (a[1][1]==0) {
        five.textContent = 'X';
        a[1][1] = 2;
        available -= 1;
        check();
        next();
    }
}
function f6() {
    if (a[1][2]==0) {
        six.textContent = 'X';
        a[1][2] = 2;
        available -= 1;
        check();
        next();
    }
}
function f7() {
    if (a[2][0]==0) {
        seven.textContent = 'X';
        a[2][0] = 2;
        available -= 1;
        check();
        next();
    }
}
function f8() {
    if (a[2][1]==0) {
        eight.textContent = 'X';
        a[2][1] = 2;
        available -= 1;
        check();
        next();
    }
}
function f9() {
    if (a[2][2] == 0) {
        nine.textContent = 'X';
        a[2][2] = 2;
        available -= 1;
        check();
        next();
    }
}
var who_is_playing = 0;
function isavailable(array) {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (array[i][j] == 0)
                return true;
        }
    }
    return false;
}
function terminal(array) {
    for (var i = 0; i < 3; i++) {
        if ((array[i][0] == array[i][1]) && (array[i][1] == array[i][2])) {
            if (array[i][0] != 0) {
                if (array[i][0] == 1) {
                    return 1;
                }
                else {
                    return -1;
                }
            }
        }
        if ((array[0][i] == array[1][i]) && (array[1][i] == array[2][i])) {
            if (array[0][i] != 0) {
                if (array[0][i] == 1) {
                    return 1;
                }
                else {
                    return -1;
                }
            }
        }
    }
    if ((array[0][0] == array[1][1]) && (array[1][1] == array[2][2])) {
        if (array[0][0] != 0) {
            if (array[0][0] == 1) {
                return 1;
            }
            else {
                return -1;
            }
        }
    }
    if ((array[2][0] == array[1][1]) && (array[1][1] == array[0][2])) {
        if (array[2][0] != 0) {
            if (array[2][0] == 1) {
                return 1;
            }
            else {
                return -1;
            }
        }
    }
    return 0;
}
function ai(array) {
    var node = terminal(array);
    if (node == 1) {
        return 1;
    }
    else if (node == -1) {
        return -1;
    }
    else if ((node == 0) && (isavailable(array) == false)) {
        return 0;
    }
    if (who_is_playing == 0) {
        var aimax = -100000;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (array[i][j] == 0) {
                    array[i][j] = 1;
                    who_is_playing = 1;
                    var temp = ai(array);
                    array[i][j] = 0;
                    who_is_playing = 0;
                    if (aimax < temp) {
                        aimax = temp;
                    }
                }
            }
        }
        return aimax;
    }
    else if (who_is_playing == 1) {
        var aimin = 100000;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (array[i][j] == 0) {
                    array[i][j] = 2;
                    who_is_playing = 0;
                    var temp = ai(array);
                    array[i][j] = 0;
                    who_is_playing = 1;
                    if (aimin > temp) {
                        aimin = temp;
                    }
                }
            }
        }
        return aimin;
    }
}
function move() {
    var mx = -100000, m = 0, n = 0;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (a[i][j] == 0) {
                a[i][j] = 1;
                who_is_playing = 1;
                var k = ai(a);
                if (k > mx) {
                    mx = k;
                    m = i;
                    n = j;
                }
                a[i][j] = 0;
                who_is_playing = 0;
            }
        }
    }
    console.log(m + " " + n);
    a[m][n] = 1;
    available -= 1;
    var m = 3 * m;
    m = m + n + 1;
    if (m == 1) {
        one.textContent = 'O';
    }
    if (m == 2) {
        two.textContent = 'O';
    }
    if (m == 3) {
        three.textContent = 'O';
    }
    if (m == 4) {
        four.textContent = 'O';
    }
    if (m == 5) {
        five.textContent = 'O';
    }
    if (m == 6) {
        six.textContent = 'O';
    }
    if (m == 7) {
        seven.textContent = 'O';
    }
    if (m == 8) {
        eight.textContent = 'O';
    }
    if (m == 9) {
        nine.textContent = 'O';
    }
    check();
    if (f == 1) {
        alert("Machine Wins!");
    }
    if (f == 2) {
        alert("You Wins!")
    }
    player += 1;
    player = player % 2;
}
