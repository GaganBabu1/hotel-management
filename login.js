document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  // Simple dummy login
  if (username === "admin" && password === "1234") {
    message.style.color = "green";
    message.textContent = "Login successful!";
    // Redirect to dashboard or another page if needed
    // window.location.href = "dashboard.html";
  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password";
  }
});
