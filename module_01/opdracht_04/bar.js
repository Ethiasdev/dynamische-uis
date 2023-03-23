const drinks = {
  fris: 2,
  bier: 3,
  wijn: 4,
};

let orders = [];

const submitReceipt = () => {
  groupOrders();
  displayReceipt(orders);
}

const submitOrder = () => {
  const order = prompt("Wat wilt u bestellen?").toLowerCase();
  
  if (!drinks[order]) {
    alert("Sorry, we kennen dit drankje niet.");
  } 
  
  else {
    const amount = prompt(`Hoeveel ${order} wilt u hebben?`);
    addOrder(order, amount);
  }
};

const addOrder = (order, amount) => {
  orders.push({ name: order, amount: amount, price: drinks[order] });
};

const groupOrders = () => {
  let groups = {};
  
  orders.forEach(order => {
    if (!groups[order.name]) {
      groups[order.name] = {
        name: order.name,
        amount: Number(order.amount),
        price: order.price
      };
    } else {
      groups[order.name].amount += Number(order.amount);
    }
  });
  
  orders = Object.values(groups);
};

const displayReceipt = (orders) => {
  const receipt = document.getElementById("receipt");
  let totalCost = 0;
  receipt.innerHTML = "";
  
  orders.forEach((order) => {
    const row = createTableRow(order.name, order.amount, order.price, order.price * order.amount);
    receipt.appendChild(row);
    totalCost += order.price * order.amount;    
  });
  
  const totalRow = createTotalRow(totalCost);
  receipt.appendChild(totalRow);
};

const createTableRow = (name, amount, price, total) => {
  const row = document.createElement("tr");
  const nameCell = document.createElement("td");
  nameCell.innerHTML = name;
  row.appendChild(nameCell);
  
  const amountCell = document.createElement("td");
  amountCell.innerHTML = `${amount}x`;
  row.appendChild(amountCell);
  
  const priceCell = document.createElement("td");
  priceCell.innerHTML = `$${price}`;
  row.appendChild(priceCell);
  
  const totalCell = document.createElement("td");
  totalCell.innerHTML = `$${total}`;
  row.appendChild(totalCell);
  
  return row;
};

const createTotalRow = (totalCost) => {
  const totalRow = document.createElement("tr");
  
  const totalLabelCell = document.createElement("td");
  totalLabelCell.innerHTML = "Totaal";
  totalRow.appendChild(totalLabelCell);
  
  const totalCell = document.createElement("td");
  totalCell.colSpan = "3";
  totalCell.innerHTML = `$${totalCost}`;
  totalRow.appendChild(totalCell);
  
  return totalRow;
};

document.getElementById("bestelButton").addEventListener("click", submitOrder);
document.getElementById("afrekenButton").addEventListener("click", submitReceipt);