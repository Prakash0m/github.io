// Form validation
document
  .getElementById("resumeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let inputs = this.querySelectorAll("input, textarea");
    let isValid = true;
    inputs.forEach(function (input) {
      if (input.required && input.value.trim() === "") {
        isValid = false;
        input.classList.add("invalid");
      } else {
        input.classList.remove("invalid");
      }
    });
    if (isValid) {
      this.submit();
    } else {
      alert("Please fill out all required fields.");
    }
  });
