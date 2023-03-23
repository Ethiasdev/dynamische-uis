let number = parseInt(prompt("Voer een getal in:"));
let output = "";

for (let i = 1; i <= number; i++) {
  for (let j = 1; j <= i; j++) {
    output += j + "-";
  }
  output = output.slice(0, -1);
  output += "<br>";
}

for (let i = number - 1; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    output += j + "-";
  }
  output = output.slice(0, -1);
  output += "<br>";
}

document.getElementById("output").innerHTML = output;
