'use strict'

let ages = [15, 45, 50];
let miEdad = 29;

ages.splice(1, 0, miEdad);

for (let i = 0; i < ages.length; i++) {
    if (ages[i] > 25) {
        alert(ages[i]);
    }
}