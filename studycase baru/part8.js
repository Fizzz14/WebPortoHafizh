let bilangan = prompt(Number())
let satuan = bilangan % 10
let puluhan = Math.floor(bilangan /10) % 10
let ratusan = Math.floor(bilangan /100) % 10

console.log(
    `
    ini adalah bilangan satuan ${satuan}, 
    ini adalah bilangan puluhan ${puluhan}, 
    ini adalah bilangan ratusan ${ratusan}, `
)
