let storebook = {};
const stored = localStorage.getItem("user");
storebook = stored ? JSON.parse(stored) : {};
if (window.location.pathname.includes("signup.html")) {
  const nameInput = document.querySelector(".name");
  const usernameInput = document.querySelector(".username");
  const passwordInput = document.querySelector(".password");
  const enterBtn = document.querySelector(".enter");
  enterBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    if (!name || !username || !password) {
      alert("Enter full details");
      return;
    }
    storebook[username] = { name, password };
    localStorage.setItem("user", JSON.stringify(storebook));
    alert("User added!");
    window.location.href = "buffer.html";
  });
}
if (window.location.pathname.includes("signin.html")) {
  const usernameInput = document.querySelector(".username");
  const passwordInput = document.querySelector(".password");
  const goBtn = document.querySelector(".go");
  goBtn.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    if (!username || !password) {
      alert("Enter full details");
      return;
    }
    if (!storebook[username]) {
      alert("User not found, please sign up first :)");
      return;
    }
    if (storebook[username].password === password) {
      alert("Login successful!");
      window.location.href = "buffer.html";
    } else {
      alert("Incorrect password!");
    }
  });
}
