var billAmt = document.querySelector("#input-bill-amt");
var cashRcvd = document.querySelector("#input-cash-rcvd");
var calcBtn = document.querySelector("#calc-btn");
var outputDiv = document.querySelector("#output-div");

var availableNotes = ["2000", "500", "100", "20", "10", "5", "1"];
var numOfNotesToGive = ["0", "0", "0", "0", "0", "0", "0"];

calcBtn.addEventListener("click", clickHandler);



function calcNumOfNotes(returnAmt) {
    for (i = 0; i < availableNotes.length; i++) {
        var div = returnAmt / availableNotes[i];
        var mod = returnAmt % availableNotes[i];
    
        if (div < 1) {
            numOfNotesToGive[i] = 0;

        }
        if (div === 1 && mod === 0) {

            numOfNotesToGive[i] = 1;
        }
        if (div > 1) {
            for (j = i; j < 1000; j++) {
                div = returnAmt / availableNotes[i];
                if (div < 1) {
                    break;
                }
                numOfNotesToGive[i]++;
                returnAmt = returnAmt - availableNotes[i];
            }
        }
        if (returnAmt === 0) {
            break;
        }

    }

}


function clickHandler() {
    var returnAmt = cashRcvd.value - billAmt.value;

    if (returnAmt < 0) {
        outputDiv.innerHTML = "Cash received must be higher than bill amount. Pls take more cash from customer!";
    } else if (returnAmt === 0) {
        outputDiv.innerHTML = "No Cash to be given to the customer. It's all balanced out1!";
    } else {

        calcNumOfNotes(returnAmt);

    }
}
    

