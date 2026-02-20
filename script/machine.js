
// function getValueFromInput (id) {
//     let input=document.getElementById(id);
//     let value=input.value;
//     return value;
// }


function getValue (id) {
    let input=document.getElementById(id);
    let value=input.value;
    return value;
}


function showOnly (id) {
   
    let addMoney = document.getElementById('add-money')
    let cashOut=document.getElementById('cashOut')
    let transfer = document.getElementById('transafer-money')
    let payMoney = document.getElementById('pay')
    //  console.log(`add money - ${addMoney}, cashout ${cashOut}`)
    

    // shobai ke hide koro 
    addMoney.classList.add('hidden')
    cashOut.classList.add('hidden')
    transfer.classList.add('hidden')
    payMoney.classList.add('hidden')

    // id wala element ke show koro

    let selected=document.getElementById(id);
    selected.classList.remove("hidden")
}


