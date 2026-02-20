document.getElementById('add-btn').addEventListener('click', function () {
    let bankAccountName = getValue('account-name')
    if (bankAccountName == 'Select bank') {
        alert('Please Select A Bank')
        return
    }

    let AccountNumber = getValue('cash-out-amount')
    if (AccountNumber.length != 11) {
        alert('invalid Number')
        return;
    }

    let previousBalance = document.getElementById('all-amount')
    let currentBalance=previousBalance.innerText;


    let addMoney = getValue('add-MONEY')



    let pin = getValue('my-pin')

    if(pin=='1234') {
        let plus=Number(currentBalance)+Number(addMoney)
        previousBalance.innerText = plus
        alert('Add Money Successful')
    } else {
        alert('Incorrect Pin')
        return
    }
})