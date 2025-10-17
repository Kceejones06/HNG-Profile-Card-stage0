function updateTime() {
  const timeEl = document.querySelector('[data-testid="test-user-time"]');
  if (timeEl) timeEl.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000);

// Avatar upload logic
const avatarInput = document.getElementById("avatarUpload");
const avatarImg = document.querySelector('[data-testid="test-user-avatar"]');

avatarInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      avatarImg.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Open social links when button is clicked
document.querySelectorAll(".social-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const url = button.getAttribute("data-url");
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  });
});
