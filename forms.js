const password1 = document.form.p1;
const password2 = document.form.p2;

const submitbtn = document.querySelector('#submit');

submitbtn.addEventListener('click' , function(e){
    
    e.preventDefault();

    if ( password1.value !== password2.value ) {
        alert('passowrd does not match')
        return false; 
    }
    else {
        alert('form sumbited')
        return true;
    }
});
console.log(document.form.p1 ,password2 )
