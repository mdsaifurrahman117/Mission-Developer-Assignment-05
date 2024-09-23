// adding history button function
document.getElementById("history-btn").addEventListener("click", function () {
  console.log("click event added");
});

// main balance
let balance = document.getElementById("main-balance").innerText;
console.log(balance);

// donate noakhali
document.getElementById("donate-noakhali-btn").addEventListener("click", function () {
            // donation input
            let noakhaliAmount = document.getElementById("noakhali-amount").value;
            let noakhaliDonation = parseInt(noakhaliAmount);

            // donate from main balance 
            if (balance > 0) {
                        balance = balance - noakhaliDonation;
                        // update the main balance after donation 
                        document.getElementById("main-balance").innerText = balance;
            } else {
                        alert("your account is empty")
            }

            // amount validation checking
            if (noakhaliDonation> 0) {
                        // get the current donated amount
                        let noakhaliDonatedAmount = document.getElementById("noakhali-donated-amount").innerText;
                        let currentNoakhaliDonated = parseInt (noakhaliDonatedAmount);

                        // add the new donation amount to the current donation amount
                        let newAmount = noakhaliDonation + currentNoakhaliDonated;

                        // set the current balance amount
                        document.getElementById("noakhali-donated-amount").innerText = newAmount;
            } else {
                        alert("invalid amount or input")
            }   
})
