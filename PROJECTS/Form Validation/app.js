const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');

submitBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    if(validateName() == true){
        alert("Form Submit Successfully")
    }
})

function validateName(){
    let name = document.getElementById('name').value;

    if(name.lenght == 0){
        nameError.innerHTML = "Name is required";
        nameError.previousElementSibling.classList('fa-xmark');
        return false;
    }

    else if(!name.match(/^[A-Za-a]*\s{1}[A-Za-a]*$/)){
        nameError.innerHTML = "Write full Name";
        nameError.previousElementSibling.classList('fa-xmark');
        return false;
    }
  
    nameError.innerHTML = "";
    nameError.previousElementSibling.classList('fa-check');
    return true;
}

