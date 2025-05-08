var navLinks = document.getElementById("navLinks");
function hideMenu(){
    navLinks.style.right = "-200px";
}
function showMenu(){
    navLinks.style.right = "0";
}

//change background color of menu when scrolling
const header = document.getElementById("header")
window.addEventListener('scroll', function() {
    if(window.scrollY > 10){
        header.style.backgroundColor = "white";
    } else {
        header.style.backgroundColor = "transparent";
    }
});


document.getElementById("inquiryForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting
    
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var eventValue = document.getElementById("event").value;
    var detail = document.getElementById("detail").value;

    // Check if fields are filled
    if(this.reportValidity()){
        event.preventDefault();
        if (name === "" || email === "" || eventValue === "Select") {
            alert("PLEASE ENTER THE VALUES!");
            return;
        }
    }
    alert("Succesfully");
   

    // Open new window and display the data
    var newWindow = window.open("", "_blank", "width=400,height=300");
    newWindow.document.write("<p>Congratulation...!!!</p>");
    newWindow.document.write("<p><strong>Name</strong> : " + name + "</p>");
    newWindow.document.write("<p><strong>Email</strong> : " + email + "</p>");
    newWindow.document.write("<p><strong>Interested Event</strong> : " + eventValue + "</p>");
    newWindow.document.write("<p><strong>Detailed Enquiry</strong> : " + detail + "</p>");
});

