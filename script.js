const eml = document.getElementById('email');
const pas = document.getElementById('password');
const sub = document.getElementById('btn');
const emailMessage = document.getElementById('email-text');
const passwordMessage = document.getElementById('password-text');
const successMessage = document.getElementById('success-message');

eml.addEventListener('change',function(){

    if(eml.value.length>3 && eml.value.includes("@") && eml.value.includes("."))
    {
        emailMessage.textContent="";
        validateSuccess();
    }
    else{
        console.log("else condition");
        emailMessage.textContent="Make sure email is more than 3 characters and has @ and a ."
    }
});

pas.addEventListener('change',function(){
if(pas.value.length>8)
{
    passwordMessage.textContent="";
    validateSuccess();
}
else{
    passwordMessage.textContent="Make sure password is more than 8 characters."
}
});


function validateSuccess(){
    if (eml.value.length > 3 && eml.value.includes("@") && eml.value.includes(".") && pas.value.length > 8) {
        successMessage.textContent = "All good to go";
    } else {
        successMessage.textContent = "";
    }

}


sub.addEventListener('click', function(event) {
    event.preventDefault();

    if (eml.value.length > 3 && eml.value.includes("@") && eml.value.includes(".") && pas.value.length > 8) {
        const isConfirmed = confirm("Are you sure you want to sign up?");

        if (isConfirmed) {
            alert("Successful signup!");
        } else {
            eml.value = "";
            pas.value = "";
            emailMessage.textContent = "";
            passwordMessage.textContent = "";
            successMessage.textContent = "";
            location.reload();
        }
    } else {
        alert("Please ensure all fields are valid before submitting.");
    }
});

