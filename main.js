function ValidateEmail(inputText) {
   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   var messageDiv = document.getElementById("message");
   messageDiv.innerHTML = ""; // Clear previous messages

   if (inputText.value.match(mailformat)) {
       messageDiv.innerHTML = "Valid email address!";
       messageDiv.className = "green"; // Set success message color
       return true; // Allow form submission
   } else {
       messageDiv.innerHTML = "You have entered an invalid email address!";
       messageDiv.className = "red"; // Set error message color
       inputText.focus(); // Focus back on the input
       return false; // Prevent form submission
   }
}
