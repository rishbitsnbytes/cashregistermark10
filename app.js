var billAmt = document.querySelector("#input-bill-amt");
var cashRcvd = document.querySelector("#input-cash-rcvd");
var calcBtn = document.querySelector("#calc-btn");
var outputDiv = document.querySelector(".output-text-div");
var numOfNotesToGive = document.querySelectorAll(".num-of-notes-to-give");


var availableNotes = ["2000", "500", "100", "20", "10", "5", "1"];
var numOfNotes = ["0", "0", "0", "0", "0", "0", "0"];

calcBtn.addEventListener("click", clickHandler);



function calcNumOfNotes(returnAmt) {
    for (i = 0; i < availableNotes.length; i++) {
        var div = returnAmt / availableNotes[i];
        var mod = returnAmt % availableNotes[i];
    
        if (div < 1) {
            numOfNotes[i] = 0;

        }
        if (div === 1 && mod === 0) {

            numOfNotes[i] = 1;
            returnAmt = returnAmt - availableNotes[i];

        }
        if (div > 1) {
            for (j = i; j>=0; j++) {
                div = returnAmt / availableNotes[i];
                if (div < 1) {
                    break;
                }
                numOfNotes[i]++;
                returnAmt = returnAmt - availableNotes[i];
            }
        }
        numOfNotesToGive[i].innerText = numOfNotes[i];
        // if (returnAmt === 0) {
        //     break;
        // }

    }

}

function clearOutputTable(){
    for(i=0; i<availableNotes.length; i++){
        numOfNotes[i] = 0;
        numOfNotesToGive[i].innerText = numOfNotes[i];
    }
}

function inputCheck(){

    if (isNaN(cashRcvd.value) || isNaN(billAmt.value)) {
        outputDiv.innerHTML = "Please be sensible and enter numbers only in both the input fields!";
    }
}

function clickHandler() {

    inputCheck();
    var returnAmt = cashRcvd.value - billAmt.value;

    if (returnAmt < 0) {
        outputDiv.innerHTML = "Cash received must be higher than bill amount. Pls take more cash from customer!";
        clearOutputTable();
    } else if (returnAmt === 0) {
        outputDiv.innerHTML = "No Cash to be given to the customer. It's all balanced out!";
        clearOutputTable();
    } else {
        outputDiv.innerHTML = "You need to return ₹" + returnAmt + " to the customer in the following denominations!";
        calcNumOfNotes(returnAmt);

    }
}


