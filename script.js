const username = document.getElementById('username');
const password = document.getElementById('password');
const checkbox = document.getElementById('checkbox');
const submit = document.getElementById('submit');
const existingUserBtn = document.getElementById('existing');
const main = document.getElementById('main');


submit.addEventListener('click', (e)=>{
    // if the checkbox is checked save the data to local storage and alert
    // else alert only
    e.preventDefault();
    if(!username.value || !password.value){
        alert('username and password is required');
        return false;
    }
    else if(checkbox.checked){
        localStorage.setItem("username", JSON.stringify(username.value));
        localStorage.setItem("password", JSON.stringify(password.value));
        main.style.display='none';
        existingUserBtn.style.display='block';
        location.reload();
    }
    alert(`Logged in as ${username.value}`)
})

if(localStorage.getItem('username')){
    
    main.style.display='none';
    existingUserBtn.style.display='block';
    // handle any button click.
    existingUserBtn.addEventListener('click', ()=>{
        const user = JSON.parse(localStorage.getItem('username'));
        alert(`Logged in as ${user}`);
    })

}