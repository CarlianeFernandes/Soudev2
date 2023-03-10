// let nota1 = 10;
// let nota2 = 9;
// let nota3 = 8.5;
// let nota4 = 9.8;

// let total = nota1 + nota2 + nota3 + nota4;

// alert(total/4);


function calcularMedia(notas) {
    let total = notas [0] + notas [1] + notas [2] + notas [3];

    let media = total/4;

    return media.toFixed(1);
}

let mediaG = calcularMedia([10,9.5,9,9.8]);
alert("Media do Gleidson: " + mediaG);

let mediaA = calcularMedia([9,7,6.8,9]);
alert("Media do Ale: " + mediaA);




// let notas = [
//     10,
//     9,
//     8.5,
//     9.8,
// ];

// let total = notas [0] + notas [1] + notas [2] + notas [3];

// alert(total/4);

// let notasG = [
//     10,
//     9.8,
//     9.6,
//     10,
// ];

// let totalG = notasG[0] + notasG[1] + notasG[2] + notasG[3];

// alert(totalG/4);