
"use strict";

const input = document.getElementById('input1');
const answer= document.getElementById('answer1');


function getNumber(num) {
    switch(num) {
        case 0:
            input1.value += "0"
            break;
        case 1:
            input1.value += "1"
            break;
        case 2:
            input1.value += "2"
            break;
        case 3:
            input1.value += "3"
            break;
        case 4:
            input1.value += "4"
            break;
        case 5:
            input1.value += "5"
            break;
        case 6:
            input1.value += "6"
            break;
        case 7:
            input1.value += "7"
            break;
        case 8:
            input1.value += "8"
            break;
        case 9:
            input1.value += "9"
            break;
    }
}

function getOperators(operator) {
    switch(operator) {
        case '÷':
            input1.value += '÷'
            break;
        case '+':
            input1.value += '+'
            break;
        case '-':
            input1.value += '-'
            break;
        case '*':
            input1.value += '*'
            break;   
        case '.':
            input1.value += '.'
            break;  
        case '%':
            input1.value += '%'
            break;
        case '+/-':
            input1.value += '-'           
    }
}

function comparison() {
    answer1.value = +eval(input1.value);
}
function ac() {
    input1.value = ' '
    answer1.value = ' '
}