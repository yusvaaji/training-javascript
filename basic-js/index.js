//#region ES6

//ALGORITMA DAN PSEUDOCODE

/**
 *
 * 1. ALGORITMA
 *
 *
 */

const testresut = document.getElementById("testresult");
var alas = 10;
var tinggi = 5;

var luas = 0.5 * alas * tinggi;
testresut.innerHTML = `Luas Segitiga : ${luas} `;



const testresultlingkaran = document.getElementById("testresultlingkaran");
var r = 10;
var t = 7;

var phi = 22 / 7;

var luaslingkaran = 2 * (phi * r * (r + t));
testresultlingkaran.innerHTML = `Jari jari : ${r} </br> Luas Lingkaran : ${luaslingkaran} `;

//#endregion