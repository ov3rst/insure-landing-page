const d = document,
  $header = d.getElementById("header"),
  $menu = d.getElementById("menu"),
  $openIcon = d.querySelector(".open__icon"),
  $closeIcon = d.querySelector(".close__icon");

d.addEventListener("click", (e) => {
  if (e.target.matches(`.menu__mobile-btn *`)) {
    $header.classList.toggle("sticky");
    $menu.classList.toggle("is-active");
    $openIcon.classList.toggle("open-close");
    $closeIcon.classList.toggle("open-close");
  }
});
