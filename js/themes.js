import { defineFunctions } from "../utils/difinitions.js";
var temaAtual = "light";
let root = document.documentElement;

function lightTheme() {
    temaAtual = "light";
    root.style.setProperty('--l-selection', ' #5F40A6');
    root.style.setProperty('--l-bg-dark', ' #E4E4E4');
    root.style.setProperty('--l-bg-transparent-dark', '#1d21253a');
    root.style.setProperty('--l-fg-dark', ' #F5F5F5');
    root.style.setProperty('--l-fg2-dark', ' #e6e6e6');
    root.style.setProperty('--l-text-dark', ' #707070');
    root.style.setProperty('--l-border-dark', ' #E4E4E4');
    root.style.setProperty('--l-scroll', ' #FFFFFF');
}

function darkTheme() {
    temaAtual = "dark";
    root.style.setProperty('--l-selection', '#5F40A6');
    root.style.setProperty('--l-bg-transparent-light', '#1d21253a');
    root.style.setProperty('--l-bg-dark', 'rgb(24, 27, 32)');
    root.style.setProperty('--l-bg-transparent-dark', '#4e63792a');
    root.style.setProperty('--l-fg-dark', '#282A30');
    root.style.setProperty('--l-fg2-dark', '#34353E');
    root.style.setProperty('--l-text-dark', '#CFCFCF');
    root.style.setProperty('--l-border-dark', 'rgb(24, 24, 26)');
    root.style.setProperty('--l-primary-dark', 'rgb(252, 145, 44)');
    root.style.setProperty('--l-scroll', '#32323B');
    root.style.setProperty('--l-white-dark', '#f1f1f1');

}


function changeTheme(val) {
    (val == true) ? lightTheme(): darkTheme();
}

defineFunctions([

    { name: "darkTheme", func: darkTheme },
    { name: "lightTheme", func: lightTheme },
    { name: "changeTheme", func: changeTheme },


]);