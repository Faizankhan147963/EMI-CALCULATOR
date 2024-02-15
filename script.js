let ammount = document.getElementById("ammount")
let intrest = document.getElementById("intrest")
let month = document.getElementById("ammount")
let calculate_in = document.getElementById("calculate_in")
let bill_ammount = document.getElementById("bill_ammount")

calculate_in.addEventListener("click", () => {
               if (ammount.value == "" || intrest.value == "" || month.value == "") {
                              alert("Enteer Value")
                              return;
               } else {
                              let p = ammount.value
                              let r = intrest.value / 1200;
                              let n = month.value;
                              let Emi_ammont = (p * r * (1 + r) ** n) / ((1 + r) ** n - 1);
                              bill_ammount.textContent = Emi_ammont.toFixed(2);
               }
})

// function EMI() {
//              x
// }