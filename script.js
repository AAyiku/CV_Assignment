//Gets Form by getElementById
const form = document.getElementById('form');

function onSubmit(event){
    event.preventDefault();
    const f_name = form.elements['firstname'].value;
    const m_name = form.elements['middlename'].value;
    const l_name =form.elements['lastname'].value;
    const number = form.elements['phonenumber'].value;
    const email = form.elements['email'].value;
    const address = form.elements['address'].value;



    //Form Validation
    function firstNameCheck(){
        var alphabet = /^[A-Za-z]+$/;
        if(f_name.match(alphabet)){
            return true;
        }
        else{
            alert("Input must be letters");
            return false;
        }
    }  
    firstNameCheck()

    function middleNameCheck(){
        var alphabet = /^[A-Za-z]+$/;
        if(m_name.match(alphabet)){
            return true;  
        }
        else{
            alert("Input must be letters");
            return false;
            }
    }
    middleNameCheck()

    

    function lastNameCheck(){
        var alphabet = /^[A-Za-z]+$/;
        if(l_name.match(alphabet)){
            return true;  
        }
        else{
            alert("Input must be letters");
            return false;
            }
    }

    lastNameCheck()



    function numberCheck(){
        var numbers = /^\d{10}$/;
        if((number.match(numbers))){
            return true;
        }
        else{
            alert("Phone number must be 10 digits");
            return false;
            }
    }
    numberCheck()

    // if(address===""){
    //     alert('Please fill this field')
    // }
    // else{
    //     window.location.href='./cv.html'
    // }

  

    localStorage.setItem("f_name",f_name);
    localStorage.setItem("m_name",m_name);
    localStorage.setItem("l_name",l_name);
    localStorage.setItem("email",email);
    localStorage.setItem("address",address);
    localStorage.setItem("num",number);




            
}


form.addEventListener("submit",onSubmit)

