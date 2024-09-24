// hide main section
document.getElementById("history-btn").addEventListener("click", function () {
            document.getElementById("main").classList.add("hidden");
            document.getElementById("history").classList.remove("hidden");
            document.getElementById("history-btn").style.backgroundColor = "#B4F461";
            document.getElementById("donate-btn").style.backgroundColor = "white";
});
// hide history section 
document.getElementById("donate-btn").addEventListener("click", function () {
            document.getElementById("main").classList.remove("hidden");
            document.getElementById("history").classList.add("hidden");
            document.getElementById("history-btn").style.backgroundColor = "white";
            document.getElementById("donate-btn").style.backgroundColor = "#B4F461";
})

// main balance
let balance = document.getElementById("main-balance").innerText;
console.log(balance);

// donate noakhali
document.getElementById("donate-noakhali-btn").addEventListener("click", function () {
            // donation input
            let noakhaliAmount = document.getElementById("noakhali-amount").value;
            let noakhaliDonation = parseInt(noakhaliAmount);

            // donate from main balance
            if (noakhaliDonation > balance) {
                        alert("invalid amount");
            } else if (balance > 0) {
                        balance = balance - noakhaliDonation;
                        // update the main balance after donation
                        document.getElementById("main-balance").innerText = balance;
            } else {
                        alert("your account is empty");
            }

            // amount validation checking
            if (noakhaliDonation > 0) {
                        if (noakhaliDonation <= balance) {
                        // get the current donated amount
                        let noakhaliDonatedAmount = document.getElementById("noakhali-donated-amount").innerText;
                        let currentNoakhaliDonated = parseInt(noakhaliDonatedAmount);

                        // add the new donation amount to the current donation amount
                        let newAmount = noakhaliDonation + currentNoakhaliDonated;

                        // set the current balance amount
                        document.getElementById("noakhali-donated-amount").innerText =
                        newAmount;
                        alert("donation successful");
                        }
            } else {
                        alert("invalid amount or input");
            }
});

// donate feni 
document.getElementById("donate-feni-btn").addEventListener("click", function () {
            // donation input
            let feniAmount = document.getElementById("feni-amount").value;
            let feniDonation = parseInt(feniAmount);

            // donate from main balance
            if (feniDonation > balance) {
                        alert("invalid amount");
            } else if (balance > 0) {
                        balance = balance - feniDonation;
                        // update the main balance after donation
                        document.getElementById("main-balance").innerText = balance;
            } else {
                        alert("your account is empty");
            }

            // amount validation checking
            if (feniDonation > 0) {
                        if (feniDonation <= balance) {
                        // get the current donated amount
                        let feniDonatedAmount = document.getElementById("feni-donated-amount").innerText;
                        let currentFeniDonated = parseInt(feniDonatedAmount);

                        // add the new donation amount to the current donation amount
                        let newAmount = feniDonation + currentFeniDonated;

                        // set the current balance amount
                        document.getElementById("feni-donated-amount").innerText =
                        newAmount;
                        alert("donation successful");
                        }
            } else {
                        alert("invalid amount or input");
            }
});

// donate quota
document.getElementById("donate-quota-btn").addEventListener("click", function () {
            // donation input
            let quotaAmount = document.getElementById("quota-amount").value;
            let quotaDonation = parseInt(quotaAmount);

            // donate from main balance
            if (quotaDonation > balance) {
                        alert("invalid amount");
            } else if (balance > 0) {
                        balance = balance - quotaDonation;
                        // update the main balance after donation
                        document.getElementById("main-balance").innerText = balance;
            } else {
                        alert("your account is empty");
            }

            // amount validation checking
            if (quotaDonation > 0) {
                        if (quotaDonation <= balance) {
                        // get the current donated amount
                        let quotaDonatedAmount = document.getElementById("quota-donated-amount").innerText;
                        let currentQuotaDonated = parseInt(quotaDonatedAmount);

                        // add the new donation amount to the current donation amount
                        let newAmount = quotaDonation + currentQuotaDonated;

                        // set the current balance amount
                        document.getElementById("quota-donated-amount").innerText =
                        newAmount;
                        alert("donation successful");
                        }
            } else {
                        alert("invalid amount or input");
            }
});
