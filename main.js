console.log("Listo");

const d = document,
  $menu = d.getElementById("menu"),
  $btn = d.getElementById("menu-btn"),
  $openIcon = d.querySelector(".open__icon"),
  $closeIcon = d.querySelector(".close__icon");

d.addEventListener("click", (e) => {
  if (e.target.matches(`${$btn} *`)) {
    $menu.classList.toggle(".is-active");
  }
});
