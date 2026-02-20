document.getElementById('pay1-btn').addEventListener('click', function () {
    let selectBank=getValue('pay1-name');

    if (selectBank == 'Select bank') {
        alert('Please Select A Bank');
        return;
    }

    let AccountNumber1=getValue('pay-number');
    if(AccountNumber1.length!=11) {
        alert('invalid Number');
        return
    }

    

    let pay4=document.getElementById('all-amount');
    let balanceElement=pay4.innerText;
    console.log(balanceElement);

    let pay3=getValue('p-amount');
    

    let p = getValue('pay-pin')
    if(p=="1234") {
        let minus2=Number(balanceElement)-Number(pay3);
        pay4.innerText=minus2;
        alert(' Bill Pay Successfully');
    } else {
        alert("Incorrect Pin");
    }
    
})

