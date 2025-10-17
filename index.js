console.log("I refuse to add more JavaScript!")

function getMailTo() {
    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    let mailTo = "https://mail.google.com/mail/?view=cm&fs=1&to=jmclaughlin28@students.stab.org&su= " + name + " - " + subject + "&body=" + message;
    console.log(mailTo)
    window.location.href = mailTo;
}