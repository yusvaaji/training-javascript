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
testresultlingkaran.innerHTML = `Jari jari : ${r} </br> Tinggi : ${t} </br> Luas Lingkaran : ${luaslingkaran} `;

function GetValidateKTP() {
    const testresultcondition = document.getElementById("testresultcondition");
    var umur = document.getElementById("inputtext");
    var tinggi = document.getElementById("inputtinggitext");

    var res = umur.value >= 17;
    if (res) {
        if (tinggi.value < 150) {
            testresultcondition.innerHTML = `Bisa bikin KTP, umur : ${umur.value} </br>, bisa masuk  `;
        } else {
            testresultcondition.innerHTML = `Bisa bikin KTP, umur : ${umur.value} </br>, tidak bisa masuk  `;
        }
    } else {
        testresultcondition.innerHTML = `Belum bikin KTP, umur : ${umur.value} </br>  `;
    }
}

function CheckBilGrade() {
    const testresultbilangan = document.getElementById("testresultbilangan");
    var umur = document.getElementById("inputnumber");

    if (parseInt(umur.value) % 2 == 0) {
        testresultbilangan.innerHTML = "Bilangan Genap <br>";
    } else {
        testresultbilangan.innerHTML = "Bilangan Ganjil <br>";
    }

    if (parseInt(umur.value) <= 100 && parseInt(umur.value) >= 85) {
        testresultbilangan.innerHTML += "Grade A : 100 - 85";
    } else if (parseInt(umur.value) <= 84 && parseInt(umur.value) >= 70) {
        testresultbilangan.innerHTML += "Grade B : 84 - 70";
    } else if (parseInt(umur.value) <= 69 && parseInt(umur.value) >= 55) {
        testresultbilangan.innerHTML += "Grade C : 69 - 55";
    } else if (parseInt(umur.value) <= 54 && parseInt(umur.value) >= 40) {
        testresultbilangan.innerHTML += "Grade D : 54 - 40";
    } else if (parseInt(umur.value) <= 39) {
        testresultbilangan.innerHTML += "Grade E : 39 - 70";
    }
}

//#endregion