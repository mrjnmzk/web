const addSubmit = document.getElementById('add-message');
const addMessage = document.getElementById('message-area');
const addSubject = document.getElementById('add-subject');
const addEmail = document.getElementById('add-email');
const addName = document.getElementById('add-name');
const titleArea = document.querySelector('.title');

let submits = [];

// function Submit (message, subject, email, name) {
//     this.message = message;
//     this.subject = subject;
//     this.email = email;
//     this.name = name;
// }

const Submit = function (name, email, subject, message) {
    this.name = name;
    this.email = email;
    this.subject = subject;
    this.message = message;
   
}

addSubmit.addEventListener('click', () => {
    submits.push(new Submit(addName.value, addEmail.value, addSubject.value, addMessage.value))
    fill();
    createSubmit();
   
})

const createSubmit = (subs, item) => {
    return `
        <div class="size"> 
            <div class="reg-form reg-form-2">
                <div class="sign-area-form sign-form">
                    <div class="input-div">
                        <p class="fans-name">${subs.name}</p>
                    </div>
                    <div class="input-div">
                        <p class="fans-email">${subs.email}</p>
                    </div>
                    <div class="input-div">
                        <p class="fans-sub">${subs.subject}</p>
                    </div>
                </div>
                <div class="reg-textarea">
                    <p>${subs.message}</p>
                </div>
            </div>
        </div>
        `
}

const fill = () => {
    titleArea.innerHTML = "";
    if (submits.length > 0) {
        submits.forEach((item, index) => {
            titleArea.innerHTML += createSubmit(item, index);
        })
        
    }
    
}



