const colors = ["yellow", "blue", "red", "orange"];

// While-loop
console.log("While-loop:");

let i=0;
while (i<colors.length) {
    console.log(colors[i]);
    i++;
}

// For-loops
console.log("");
console.log("Old for-loop:");

for (let i=0; i < colors.length; i++){
    console.log(colors[i]);
}

console.log("");
console.log("New for-loop:");

for (let value of colors) {
    console.log(value);
}

console.log("");
console.log("Foreach:");

colors.forEach(color => console.log(color));

// Object iteration

console.log("");
console.log("Object iteration:");

const keys = { 
    Amineur: "am7",
    CMajeur: "CMaj7",
    D_dominant: "D7",
    G_half_verminderd: "Gm7b5"
}

for (const key in keys) {
    console.log(key + ": " + keys[key])
}

// 1. For = 3 / While = 5
// 2. 1
// 3. Gewend aan for- & while-loops, dus herken ze aan de iterators.
//    Hoeveelheid code is het voordeel, 
//    maar alleen als er maar 1 ding hoeft te gebeuren in de loop.
// 4. Ja, dit is itereren.