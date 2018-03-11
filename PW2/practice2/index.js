function validation() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var phonenum = document.getElementById("phonenumb");
    var tips = document.getElementById("tips");
    while (tips.firstChild) {
        tips.removeChild(tips.firstChild);
    }
 
    var res = true;

    if (username.value == "" || username.value == null
        || password.value == "" || password.value == null
        || phonenum.value == "" || phonenum.value == null) {
        
        var rule1 = document.createElement("p");
        rule1.innerHTML = "All fields are mandatory.";
        rule1.style.color = "red";
        tips.insertBefore(rule1,tips.lastChild);
        res = false;
    }
    else {
        var rule2 = document.createElement("p");
        rule2.innerText = "Username and password should be at least 6 characters.";
        
        if (username.value.length < 6 || password.value.length < 6) {
            rule2.style.color = "red";
            tips.insertBefore(rule2, tips.lastChild);
            
            res = false;
        }

        var rule3 = document.createElement("p");
        rule3.innerText = "Phone number should include only numbers.";

        if (isNaN(phonenum.value)) {
            rule3.style.color = "red";
            if(tips.lastChild == null){
                tips.insertBefore(rule3, tips.lastChild);
            }
            else{
                tips.insertBefore(rule3, tips.lastChild.nextSibling);
            }
        
            phonenum.focus();
            phonenum.select();
            res = false;
        }
    }

    if (res) {
        tips.innerHTML = "Passed the validation! SUCCESS";
        tips.style.color = "green";
    }

}

function onReady() {
    var valiButton = document.getElementById("validate");
    valiButton.onclick = validation;
}

window.onload = onReady;

