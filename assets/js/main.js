const navbar = document.querySelector(".c-header__nav")
window.onscroll = ()=>{
      this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
