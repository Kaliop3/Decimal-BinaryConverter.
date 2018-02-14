const rs = require("readline-sync");
let dec = rs.question("Podaj liczbe do zamienienia: ");
let bin = [];
var r = Number(dec);
let q;
while (r > 1) {
    if (r % 2 == 0) {
        bin.push(0);
    }
    else {
        bin.push(1);
    }
    r = r / 2;
}
for (let l = 0; l < bin.length; l++) {
    if (bin[l] == 0) {
        q = true;
    }
    else {
        q = false
    }
}
if (q == true) {
    bin.push(1);
}
bin.reverse();
console.log("Twoja liczba to " + bin);