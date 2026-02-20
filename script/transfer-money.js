document
    .getElementById('money-transfer-btn')
    .addEventListener('click', function () {
        let number = getValue('money-transfer-number')
        console.log(number)
        if (number.length != 11) {
            alert('invalid Number')
            return
        }

        let priMoney = document.getElementById('all-amount')
        let priMonetValue = priMoney.innerText

        let transferM = getValue('transfer-amount')

        let pin = getValue('money-transfer-pin')
        if (pin == '1234') {
            let minus = Number(priMonetValue) - Number(transferM)
            priMoney.innerText = minus
            alert('Transfer Money Successful')
        } else {
            alert('Incorrect Pin')
            return
        }
    })
