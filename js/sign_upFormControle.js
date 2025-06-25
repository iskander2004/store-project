var form = document.querySelector('form');
var fullname = document.querySelector('#fullname');
var age = document.querySelector('#age');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirm_pass = document.querySelector('#confirm_pass');
const envoyerbtn = document.querySelector('.btn1');
//function
function validefullname(){
    if(fullname.value == ''  || fullname.value.indexOf(' ') ==-1){
        showError(fullname,'verif your fullname');
        return false
    }
    clearError(fullname);
    return true;
}
function valideage(){
    let agevalue = parseInt(age.value);
    if(isNaN(agevalue)){
        showError(age,'verif your age');
        return false;
    }else{
        if(agevalue<10 || agevalue>100){
            showError(age,'Your Not allowed to enter this website');
            return false;
        }
    }
    clearError(age);
    return true;
}
 function valideemail(){
    let emailvalue = email.value.trim();
    if(emailvalue){
        if(!emailvalue.includes('@') || !emailvalue.includes('.')){
            showError(email,'email must contain @ or .');
            return false
        }else{
            if(emailvalue.startsWith('@') || emailvalue.startsWith('.') || emailvalue.endsWith('@') || emailvalue.endsWith('.')){
                showError(email,'email must not start or end ith @ or .');
                return false;
            }else{
                if(!(emailvalue.endsWith('.com') || emailvalue.endsWith('.net') || emailvalue.endsWith('tn') || emailvalue.endsWith('fr'))){
                showError(email,'verif your domaine');
                return false;
                }else{
                    let split1=emailvalue.split('@');
                    let emaildomaine=split1[1].split('.')[0];
                    if(!(emaildomaine.toUpperCase()=='GMAIL' || emaildomaine.toUpperCase()=='YAHOO' || emaildomaine.toUpperCase()=='OUTLOOK')){
                        showError(email,'verif youy domaine');
                        return false;
                    }
                }
            }
        }
        clearError(email);
        return true;
    }
}
function validepassword(){
    let passwordvalue=password.value;
    //let specialChars = "!@#$%^&*()_+-={}[]|\\:;\"'<>?,./";
    if(passwordvalue.length<12){
        showError(password,'The password must be at least 12 characters long');
        return false;
    }/*else{
        for (let char of specialChars){
            if (specialChars.includes(char)){
                showError(passwordvalue,'The password contains at least one special character.');
                return false;
            }      
        }
    }*/
    clearError(password);
    return true;
}
function valideconfirmpassword(){
    if( confirm_pass.value != password.value ){
        showError(confirm_pass,'password must much');
        return false;
    }
    clearError(confirm_pass);
    return true;
}
function clearError(inputElt){
    const errorElement =inputElt.nextElementSibling;
    if(errorElement && errorElement.className == 'error-message'){
        errorElement.remove();
    }
    inputElt.style.borderColor ='';   
}
function showError(inputElt,errormsg){
    const errorElement=document.createElement('div');
    errorElement.className = 'error-message'
    errorElement.textContent = errormsg;
    errorElement.style.color = 'red';
    errorElement.style.fontSize = '0.8rem';
    errorElement.style.fontFamily = "SF Mono", "Roboto Mono", "Consolas", "Monaco", "Courier New";
    errorElement.style.marginTop = '3px';
    errorElement.style.marginBottom = '3px';
    clearError(inputElt);
    inputElt.insertAdjacentElement('afterend',errorElement); 
    inputElt.style.borderColor ='red' ;
}
function valideform(){
    return validefullname() && valideage() && valideemail() && validepassword() && valideconfirmpassword();
}
function setupValide(){
    envoyerbtn.addEventListener('submit',function(event){
        event.preventDefault();
        if(valideform()){
            form.submit();
        }
    });
    fullname.addEventListener('input',validefullname);
    age.addEventListener('blur',valideage);
    email.addEventListener('blur',valideemail);
    password.addEventListener('input',validepassword);
    confirm_pass.addEventListener('change',valideconfirmpassword);
}
document.addEventListener("DOMContentLoaded",setupValide);



