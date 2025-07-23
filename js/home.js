document.getElementById("loginBtn")?.addEventListener("click", function () {
  window.location.href = "login.html";
});

document.getElementById("aboutBtn").addEventListener("click", function() {
  window.location.href = "about.html";
});

const knowMoreButtons = document.querySelectorAll(".know-more-btn");

knowMoreButtons.forEach(button => {
  button.addEventListener("click", () => {
    window.location.href = "services.html";
  });
});



document.addEventListener('DOMContentLoaded', function() {
  function enableDateInput(id) {
    var input = document.getElementById(id);
    if (!input) return;
    input.addEventListener('focus', function() {
      this.type = 'date';
    });
    input.addEventListener('blur', function() {
      if (!this.value) this.type = 'text';
    });
  }
  enableDateInput('arrival');
  enableDateInput('departure');

  // Redirect to booking.html on Book button click
  var form = document.querySelector('.hero-right form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      window.location.href = 'booking.html';
    });
  }
});
