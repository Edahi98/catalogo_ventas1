const bars = document.querySelector(".bars");
bars.onclick = ()=> {
    const navBar = document.querySelector(".nav-bar");
    navBar?.classList.toggle("active")
}