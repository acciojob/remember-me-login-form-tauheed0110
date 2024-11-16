const username = document.getElementById('username');
const password = document.getElementById('password');
const checkbox = document.getElementById('checkbox');
const submit = document.getElementById('submit');
const existingUserBtn = document.getElementById('existing');

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
    }
    alert(`Logged in as ${username.value}`)
    location.reload();
})

if(localStorage.getItem('username')){
    const btn = document.createElement('button');
    btn.setAttribute('id', 'existing');
    btn.textContent = 'Login as existing user';
    document.body.innerHTML = '';
    document.body.appendChild(btn);

    // handle any button click.
    btn.addEventListener('click', ()=>{
        const user = JSON.parse(localStorage.getItem('username'));
        alert(`Logged in as ${user}`);
    })

}