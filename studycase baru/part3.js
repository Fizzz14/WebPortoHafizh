let jumlahjerukberapakg = Number(prompt())  
let diskon = 5
let gram = kg * 10
let harganormal = gram * 500
let hargaakhir = harganormal - (harganormal * diskon ) / 100
let hargadiskon = harganormal - hargaakhir

console.log (`harga normal`, harganormal)
console.log (`harga diskon`, hargadiskon)
console.log (`harga akhir`, hargaakhir)
