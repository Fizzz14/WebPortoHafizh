let pabp = Number(prompt());
let mtk = Number(prompt());
let dpk = Number(prompt());

let kom = (pabp + mtk +dpk) /3

let grade;
if (kom >= 80 && kom <= 100) {
    grade = 'A';
} else if (kom >= 75 && kom < 80) {
    grade = 'B';
} else if (kom >= 65 && kom < 75) {
    grade = 'C';
} else if (kom >= 45 && kom < 65) {
    grade = 'D';
} else if (kom >= 0 && kom < 45) {
    grade = 'E';
}
else {
    grade = 'K';
}

console.log(grade)
