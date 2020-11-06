 document.addEventListener("DOMContentLoaded", function(){
    let form = document.querySelector("#form");
    let elem = form.elements;
    let email = elem.email;
    let name = elem.firstname;
    let password = elem.password;
    let repeatPassword = elem.repeatPassword;
    let mailSpan = createErrorSpan(email);
    let nameSpan = createErrorSpan(name);
    let passwordSPan = createErrorSpan(password)
    let repeatPasswordSpan = createErrorSpan(repeatPassword);
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let obj = {
            email: email.value,
            name: name.value,
            password: password.value,
            repeatPassword: repeatPassword.value,
        }
        emptyFieldValidation();
        console.log(obj);
        })
    form.oninput =  function() {
        emptyFieldValidation();
        checkEmailValidation();
        checkFirstnameValidation();
        checkPasswordValidation();
        checkRepeatValidation();
    }
    function createErrorSpan(spanAdd) {
        let errorspan = document.createElement("span");
        if (spanAdd) {
            errorspan.classList.add("error");
            spanAdd.after(errorspan);
        }
        else {
            errorspan.classList.remove("error");
        }
        return errorspan;
    }
    function emptyFieldValidation() {
        for(let elements of elem) {
            if (!elements.value.length) {
            elements.classList.add("invalid");
            }
            else {
            elements.classList.remove("invalid");
            }
        }    
    }
    function checkEmailValidation() {
        
        if (!email.value.includes('@')) {
            mailSpan.innerHTML = "Неправильный формат email"
        }
        else {
            mailSpan.innerHTML = "";
        }
    
    }
    function checkFirstnameValidation() {
        if(name.value.length < 3) {
            nameSpan.innerHTML ="Имя слишком короткое"  
        }
        else {
            nameSpan.innerHTML =""; 
        }
    }
    function checkPasswordValidation() {
        if (password.value.length <= 3) {
            passwordSPan.innerHTML = "Пароль слишком мал";
        }
        else {
            passwordSPan.innerHTML = "";
        }
    }
    function checkRepeatValidation() {
        if(password.value.length == repeatPassword.value.length) {
            repeatPasswordSpan.innerHTML = ""
        }
        else {
            repeatPasswordSpan.innerHTML = "Пароли не соврадают";
        }
    }
})
