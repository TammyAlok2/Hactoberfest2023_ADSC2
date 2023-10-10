function loading() {
  const button = document.querySelectorAll(".btns");
  const card = document.querySelectorAll(".boxes");

  button.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      const filter = e.target.dataset.filter;
      card.forEach((e) => {
        if (filter === "all") {
          e.style.display = "block";
        } else {
          if (e.classList.contains(filter)) {
            e.style.display = "block";
          } else {
            e.style.display = "none";
          }
        }
      });
    });
  });
}

loading();
