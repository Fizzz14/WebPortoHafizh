let suhu = Number(prompt());
const rumusCelcius = 5 / 9 * suhu - 32; 
let hasilSuhu = "belum di ketahui";


if (rumusCelcius >=300) {
    hasilSuhu = "panas";
} else if (rumusCelcius <=250) {
    hasilSuhu = "dingin";
} else {
    hasilSuhu = "normal";
}

console.log(`jadi hasil konversi suhu f ke c = ${rumusCelcius}, jadi suhu yang anda inputkan termasuk ${hasilSuhu},`);
