const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "souravmdileep1607@gmail.com",
        Password : "7F14F2842CEFD8C3FC0E254047D78D837ED7",
        To : 'souravmdileep1607@gmail.com',
        From : "souravmdileep1607@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
        }
      }
    );
}

function checkInputs(){
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if(item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
            Swal.fire({
                title: "Error!",
                text: "Fill all fields!",
                icon: "error"
            });
        }

        item.addEventListener("keyup", () => {
            if(item.value != ""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
                
            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
                
            }
        });
        
            
            
        
    }
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if(!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !mess.classList.contains("error")){
        console.log("OK");
        
        sendEmail();
        form.reset();
        // return false;
    }
    else{
        Swal.fire({
            title: "Error!",
            text: "Fill all fields!",
            icon: "error"
        });
    }

    
});