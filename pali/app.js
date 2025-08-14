const input = document.getElementById("inputText");
const checkBtn = document.getElementById("checkBtn");
const paliBtn = document.getElementById("paliBtn");
const notPaliBtn = document.getElementById("notPaliBtn");
checkBtn.addEventListener("click", () => {
  const value = input.value.trim().toLowerCase().replace(/[^a-z0-9]/gi, "");
  const reversed = value.split("").reverse().join("");
  paliBtn.classList.remove("active");
  notPaliBtn.classList.remove("not-activ");
  if (value && value === reversed) {
    paliBtn.classList.add("active");
  } else {
    notPaliBtn.classList.add("not-activ");
  }
});
