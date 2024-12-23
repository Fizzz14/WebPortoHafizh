let nama = "sueng"
let gajipokok = 6000000
let tunjangan = 0.2 * gajipokok
let pajak = 0.15 * (gajipokok + tunjangan)
let gajibersih = gajipokok + tunjangan - pajak

console.log(`
                 :nama karyawan ${nama}, 
             :tunjangan Rp;s${tunjangan}, 
             :pajak Rp;${pajak}, 
             :gaji bersih Rp;${gajibersih},`)