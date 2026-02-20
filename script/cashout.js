
// document.getElementById('cash-out-btn').addEventListener("click", function() {
//     let cashOut =getValueFromInput('cash-out-number')
//     console.log( cashOut )
// })



document.getElementById('cash-out-btn').addEventListener("click", function() {
    let number=document.getElementById('cash-out-number');
    let number2=number.value;
    console.log(number2)


    if(number2.length != 11) {
        alert("Invalid Agent Number");
        return;
    }
    

    let cashOut=document.getElementById('cash-out-amount')
    let cashOutAmount=cashOut.value;
    console.log(cashOutAmount);

    let currentB = document.getElementById('all-amount')
    let currentA=currentB.innerText;
    console.log(currentA)


   

    if(newBalance<0) {
        alert("Invalid Amount");
        return;
    }
   
    

    let cashOutInput=document.getElementById('cash-out-pin');
    let pin=cashOutInput.value;

    if(pin=="1234") {
        let newBalance=Number(currentA)-Number(cashOutAmount)
        currentB.innerText=newBalance;
        alert("Cashout Successful")
    } else {
        alert('Invalid Pin')
    }
    

})