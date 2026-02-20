document.getElementById('login-btn').addEventListener("click", function() { 
    let numberInput = document.getElementById('mobile')
    let contactNumber = numberInput.value
     
    let inputDigit=document.getElementById("digit");
    let digitNumber=inputDigit.value;

    
    if(contactNumber=="01712345678"&&digitNumber=="1234") {
        alert("Login successfully")
        window.location.assign("../home.html")
    }
    else {
        alert("Your Information Is Incorrect")
        return;
    }
})