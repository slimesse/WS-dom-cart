//declaration de variable ou initialisation de var
const plus = Array.from(document.querySelectorAll(".bi-plus-circle"));
// console.log(Plus)
const moin = Array.from(document.querySelectorAll(".bi-dash-circle"));
const poubelle = Array.from(document.querySelectorAll(".bi-trash-fill"));
const coeur = Array.from(document.querySelectorAll(".bi-bag-heart-fill"));
const card = Array.from(document.querySelectorAll(".card"));

for (const incr of plus) {
  incr.addEventListener("click", function () {
    incr.previousElementSibling.innerHTML++;
   
    totalPrice();
  });
}

for (const decr of moin) {
  decr.addEventListener("click", function () {
    // console.log(decr.nextElementSibling.innerHTML)
    if (decr.nextElementSibling.innerHTML > 1) {
      decr.nextElementSibling.innerHTML--;
    }
    totalPrice();
  });
}

for (const i in poubelle) {
  poubelle[i].addEventListener("click", function () {
    card[i].remove();
    totalPrice();
  });
}
for (const heart of coeur) {
  heart.addEventListener("click", function () {
    if (heart.style.color === "red") {
      heart.style.color = "black";
    } else {
      heart.style.color = "red";
    }
  });
}


function totalPrice() {
  const Price = Array.from(document.querySelectorAll(".unit-price"));
  const Qte = Array.from(document.querySelectorAll(".badge"));
    console.log(Price);
  var totalP = 0;
  for (const i in Price) {
    totalP += Price[i].innerHTML * Qte[i].innerHTML;
    // console.log(Price[i].innerHTML);
    // console.log(Qte[i].innerHTML);
    // console.log(t);
  }
  document.querySelector("#TotalP").innerHTML = totalP 
}


