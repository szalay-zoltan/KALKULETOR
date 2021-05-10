function negyzet() {

    var x = parseInt(document.getElementById("szam1 ").value)

    var ker = 4 * x
    document.getElementById("ossz1").value = ker;

    var ter = x * x
    document.getElementById("ossz2").value = ter;

}

function teglalap() {
    var x = parseInt(document.getElementById("szam1").value);
    var y = parseInt(document.getElementById("szam2").value);

    var kerulet = (x + y) * 2;
    document.getElementById("ossz1").value = ker;

    var terulet = x * y;
    document.getElementById("ossz2").value = ter;
}

function kocka() {
    var x = parseInt(document.getElementById("szam1").value);

    var terfogat = x * x * x;
    document.getElementById("ossz1").value = terf;

    var felszin = 6 * x * x;
    document.getElementById("ossz2").value = felsz;
}

function teglatest() {
    var x = parseInt(document.getElementById("szam1").value);
    var y = parseInt(document.getElementById("szam2").value);
    var z = parseInt(document.getElementById("szam3").value);

    var terfogat = x * y * z;
    document.getElementById("ossz1").value = terfog;

    var felszin = 2 * (x * y + x * z + y * z);
    document.getElementById("ossz2").value = felsz;
}