const hamburger = document.querySelector('[data-js="hamburger"]');
const closeButton =document.querySelector("[data-js='close']")
const nav = document.querySelector('nav');
const links = document.querySelectorAll("header nav ul");

hamburger.addEventListener("click", () =>  nav.classList.add("active"));
closeButton.addEventListener("click", () => nav.classList.remove("active"))


links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

ScrollReveal().reveal("#projects div", {
  interval: 300,
  distance: "100px",
  origin: "top",
  easing: "ease",
  scale: 0.5,
  rotate: {
    z: 15,
  },
});
ScrollReveal().reveal("#services #sites", {
  distance: "200px",
  origin: "left",
  easing: "ease",
  scale: 2,
  duration:900,
});
ScrollReveal().reveal("#services #design", {
  duration:900,
  distance: "200px",
  origin: "top",
  easing: "ease",
  scale: 2,
});
ScrollReveal().reveal("#services #smartphone", {
  duration:900,
  distance: "200px",
  origin: "right",
  easing: "ease",
  scale: 2,
});


ScrollReveal().reveal("#skills div ", {duration:900,
  distance: "50px",
  origin: "top",
  easing: "ease-out",
 })