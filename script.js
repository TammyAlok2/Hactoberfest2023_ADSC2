const switchbutton = document.getElementById("switch");
const display = document.getElementById("display");
const input = document.querySelectorAll("input");

let value = "";
switchbutton.addEventListener("click", () => {
  if (switchbutton.checked == true) {
    document.body.setAttribute("data-theme", "dark");
  } else {
    document.body.setAttribute("data-theme", "");
  }
});

input.forEach((e) => {
  e.addEventListener("click", (e) => {
    if (e.target.value == "=") {
      let newval = eval(value);
      value = newval;
      display.value = value;
    } else if (e.target.value == "C") {
      value = "";
      display.value = value;
    } else if (e.target.value == "switch") {
    } else {
      value += e.target.value;
      display.value = value;
    }

    if (!e.target.classList.contains("switch")) {
      e.target.classList.add("active");
      setTimeout(() => {
        e.target.classList.remove("active");
      }, 400);
    }
  });
});
