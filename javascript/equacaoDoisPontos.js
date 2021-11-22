function limpar() {
    document.getElementById("xA").value = "";
    document.getElementById("yA").value = "";
    document.getElementById("xB").value = "";
    document.getElementById("yB").value = "";
    document.getElementById("display").value = "";
}

function calcularDistancia() {
    var xA = Number(document.getElementById("xA").value);
    var yA = Number(document.getElementById("yA").value);
    var xB = Number(document.getElementById("xB").value);
    var yB = Number(document.getElementById("yB").value);

    var primeiraParte = Math.pow((xB - xA), 2);
    var segundaParte = Math.pow((yB - yA), 2);
    var soma = primeiraParte + segundaParte;
    var resultado = Math.sqrt(soma);
    document.getElementById("display").value = resultado.toFixed(2);
}

function calcularPontoMedio() {
    var xA = Number(document.getElementById("xA").value);
    var yA = Number(document.getElementById("yA").value);
    var xB = Number(document.getElementById("xB").value);
    var yB = Number(document.getElementById("yB").value);

    var primeiraParte = (xA + xB) / 2;
    var segundaParte = (yA + yB) / 2;

    document.getElementById("display").value = `PM = (${primeiraParte},${segundaParte})`;
}

function calcularCoeficiente() {
    var xA = Number(document.getElementById("xA").value);
    var yA = Number(document.getElementById("yA").value);
    var xB = Number(document.getElementById("xB").value);
    var yB = Number(document.getElementById("yB").value);

    var parteSuperior = yA - yB;
    var parteInferior = xA - xB;
    var C = parteSuperior / parteInferior;

    document.getElementById("display").value = `C = ${C}`;
}

function calcularEquacaodaReta() {
    var xA = Number(document.getElementById("xA").value);
    var yA = Number(document.getElementById("yA").value);
    var xB = Number(document.getElementById("xB").value);
    var yB = Number(document.getElementById("yB").value);

    var mat = [
        [xA, xB, 1, xA],
        [yA, yB, 1, yA]
    ]

    var n1 = ((-1 * mat[0][1]) * mat[1][0]);
    var x1 = ((-1 * mat[0][2]) * mat[1][1]);
    var y1 = ((-1 * mat[0][3]) * mat[1][2]);

    var n2 = mat[0][0] * mat[1][1]
    var x2 = mat[0][1] * mat[1][2]
    var y2 = mat[0][2] * mat[1][3]

    var somaX = x1 + x2;
    var somaY = y1 + y2;
    var somaN = n1 + n2;

    somaX = (somaX > 0 ? `+${somaX}` : somaX);
    somaY = (somaY > 0 ? `+${somaY}` : somaY);
    somaN = (somaN > 0 ? `+${somaN}` : somaN);

    document.getElementById("display").value = `${somaX}x ${somaY}y ${somaN} = 0`
}