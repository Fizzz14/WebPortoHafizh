let totaldetik = 5440;
let jam = Math.floor(totaldetik / 3600);
let sisaDetik = totaldetik % 3600;
let menit = Math.floor(sisaDetik / 60);
let detik = sisaDetik % 60;

console.log("Jam: " + jam);
console.log("Menit: " + menit);
console.log("Detik "+ detik);  