

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("form");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevents the form from reloading the page
    window.location.href = "home.html"; // Redirect to homepage
  });
});
