document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  

  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;
  const message = document.getElementById("message");

  if (password !== confirm) {
    message.style.color = "red";
    message.textContent = "Passwords do not match!";
  } else {
    message.style.color = "green";
    message.textContent = "Registration successful! Redirecting...";

    
    setTimeout(() => {
      window.location.href = "index.html"; 
    }, 1500);
  }
});
