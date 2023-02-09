const drinks = {
  fris: 2,
  bier: 3,
  wijn: 4,
};

let orders = [];

const submitOrder = () => {
  const orderInput = document.getElementById("orderInput");
  const order = orderInput.value.toLowerCase();
  if (order === "stop") {
    displayReceipt();
    return;
  }
  if (!drinks[order]) {
    alert("Sorry, we kennen dit drankje niet.");
    return;
  }
  const amount = prompt(`Hoeveel ${order} wilt u hebben?`);
  orders.push({ name: order, amount: amount, price: drinks[order] });
};

const displayReceipt = () => {
  const receipt = document.getElementById("receipt");
  let totalCost = 0;
  receipt.innerHTML = "";
  orders.forEach((order) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.innerHTML = order.name;
    row.appendChild(nameCell);
    const amountCell = document.createElement("td");
    amountCell.innerHTML = `${order.amount}x`;
    row.appendChild(amountCell);
    const priceCell = document.createElement("td");
    priceCell.innerHTML = `$${order.price}`;
    row.appendChild(priceCell);
    const totalCell = document.createElement("td");
    totalCell.innerHTML = `$${order.amount * order.price}`;
    row.appendChild(totalCell);
    totalCost += order.amount * order.price;
    receipt.appendChild(row);
  });
  const totalRow = document.createElement("tr");
  const totalLabelCell = document.createElement("td");
  totalLabelCell.innerHTML = "Totaal";
  totalRow.appendChild(totalLabelCell);
  const totalCell = document.createElement("td");
  totalCell.colSpan = "3";
  totalCell.innerHTML = `$${totalCost}`;
  totalRow.appendChild(totalCell);
  receipt.appendChild(totalRow);
};


