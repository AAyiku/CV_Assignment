const first = localStorage.getItem('f_name');
const middle = localStorage.getItem('m_name');
const last = localStorage.getItem('l_name');
const email = localStorage.getItem('email');
const number = localStorage.getItem('num');
const address = localStorage.getItem('address');

//Replacement
document.getElementById('name-link').innerHTML = first +' '+ middle +' '+ last;
document.getElementById('email-link').innerHTML = email;
document.getElementById('number-link').innerHTML = number;
document.getElementById('address-link').innerHTML = address;
