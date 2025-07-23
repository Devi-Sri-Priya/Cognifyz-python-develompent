function validateForm() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    
    var isValid = true;
  
    if (nameInput.value === "") {
      nameError.innerHTML = "Name is required";
      isValid = false;
    } else {
      nameError.innerHTML = "";
    }
  
    if (emailInput.value === "") {
      emailError.innerHTML = "Email is required";
      isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
      emailError.innerHTML = "Please enter a valid email address";
      isValid = false;
    } else {
      emailError.innerHTML = "";
    }
  
    if (passwordInput.value === "") {
      passwordError.innerHTML = "Password is required";
      isValid = false;
    } else {
      passwordError.innerHTML = "";
    }
  
    if (isValid) {
      // Simulate form submission
      submitForm();
    }
  
    return false; // Prevent form submission
  }
  
  function isValidEmail(email) {
    // Basic email validation regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  function submitForm() {
    var responseDiv = document.getElementById("response");
    responseDiv.innerHTML = "Form submitted successfully!";
    responseDiv.style.color = "green";
  }