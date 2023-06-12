console.log("Listo");

const d = document,
  $menu = d.getElementById("menu"),
  $openIcon = d.querySelector(".open__icon"),
  $closeIcon = d.querySelector(".close__icon");

d.addEventListener("click", (e) => {
  if (e.target.matches(`.menu__mobile-btn *`)) {
    console.log("entre");
    $menu.classList.toggle("is-active");
    $openIcon.classList.toggle("open-close");
    $closeIcon.classList.toggle("open-close");
  }
});
