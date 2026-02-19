function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        proj: document.getElementById("proj").value,
        message: document.getElementById("message").value,
        subject: "New Project Inquiry – " + document.getElementById("proj").value,
    }

    emailjs.send("service_uecu7h8", "template_42bp0yc", parms)
        .then(function() {
            alert("Email Sent!");
            location.reload();
        }, function(error) {
            alert("Failed to send. Error: " + JSON.stringify(error));
        });
}