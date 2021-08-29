const addSubmit = document.getElementById('add-message');
const addMessage = document.getElementById('message-area');
const addSubject = document.getElementById('add-subject');
const addEmail = document.getElementById('add-email');
const addName = document.getElementById('add-name');
const titleArea = document.querySelector('.title');

let submits = [];


const Submit = function (name, email, subject, message) {
    this.name = name;
    this.email = email;
    this.subject = subject;
    this.message = message;
   
}

addSubmit.addEventListener('click', () => {
    if (addName.value == '' || addEmail.value == '' || addMessage.value == '') {
        
        alert('Please fill all fields with *');
    } else {
        submits.push(new Submit(addName.value, addEmail.value, addSubject.value, addMessage.value))
        fill();
        createSubmit();
    }
   
})

const createSubmit = (subs, el) => {
    // console.log(subs.name);
    return `
        <div class="size"> 
            <div class="reg-form reg-form-2">
                <div class="sign-area-form sign-form">
                    <div class="input-div">
                        <p class="fans-name">${addName.value}</p>
                    </div>
                    <div class="input-div">
                        <p class="fans-email">${addEmail.value}</p>
                    </div>
                    <div class="input-div">
                        <p class="fans-sub">${addSubject.value}</p>
                    </div>
                </div>
                <div class="reg-textarea">
                    <p>${addMessage.value}</p>
                </div>
            </div>
        </div>
        `
}

const fill = () => {
    titleArea.innerHTML = "";
    if (submits.length > 0 ) {
        submits.forEach((item, index) => {
            titleArea.innerHTML += createSubmit(item, index);
        })
        
    }
    
}



