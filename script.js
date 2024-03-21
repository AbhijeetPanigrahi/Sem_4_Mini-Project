document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Simulate login (replace this with actual login logic)
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "password") {
      // Show main page on successful login
      document.querySelector(".login-container").classList.add("hidden");
      document.querySelector(".main-container").classList.remove("hidden");
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  // Store references to student rows and their respective marks tables
  const studentRows = document.querySelectorAll(".student-row");
  const marksTables = document.querySelectorAll(".marks-table");

  // Add click event listener to each student row
  studentRows.forEach(function (row, index) {
    row.addEventListener("click", function () {
      // Toggle visibility of marks table for the clicked student
      marksTables[index].classList.toggle("hidden");
    });
  });
});

// draw gradient designs on canvas elements
document.addEventListener("DOMContentLoaded", function () {
  const canvas1 = document.getElementById("eventCanvas1");
  const canvas2 = document.getElementById("eventCanvas2");
  const canvas3 = document.getElementById("eventCanvas3");

  drawGradient(canvas1, "aqua", "blue"); // Blue gradient
  drawGradient(canvas2, "purple", "black"); // Orange gradient
  drawGradient(canvas3, "green", "indigo"); // Green gradient
});

function drawGradient(canvas, color1, color2) {
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
