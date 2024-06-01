const inputName = document.getElementById('inputName');
const btnSubmit = document.getElementById('btnSubmit');
const uname = document.getElementById('uname');


btnSubmit.addEventListener("click", () => {
  const value = inputName.value
 localStorage.setItem("name" , value);
 location.reload()
})

window.addEventListener('load', () =>{
    const getValue = localStorage.getItem('name');
    uname.innerText = getValue;     
})

