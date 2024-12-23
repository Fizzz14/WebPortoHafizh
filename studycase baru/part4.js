let namaKaryawan = String(prompt());
let gajiPokok = Number(prompt());
let tunjangan = (gajiPokok  * 20) / 100;
let pajak = (gajiPokok + tunjangan * 15) / 100;
let gajihbersih =(gajiPokok + tunjangan) - pajak;

console.log("nama Karyawan : " + namaKaryawan);
console.log("gaji Pokok : " + gajiPokok);
console.log("mendapatkan tunjangan : " + tunjangan);
console.log("pajak : " + pajak);
console.log("gaji bersihnya : " + gajihbersih);