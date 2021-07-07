(function () {
  const links = document.querySelectorAll(".close");

  links.forEach((el) => {
    el.addEventListener("click", function (ev) {
      let container = document.querySelector(".content");
      ev.preventDefault();
      container.classList.remove("animate__fadeIn");
      container.classList.remove("animate__animated");
      container.classList.add("animate__fadeOutUp");
      container.classList.add("animate__animated");
      setTimeout(() => {
        location.href = this.href;
      }, 800);
      return false;
    });
  });
})();
