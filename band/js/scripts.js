function toggleMenu () {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");

x.onclick = toggleMenu;

var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy", treshold: 0
    // Your custom settings go here
  });


