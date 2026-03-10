const btnmobile = document.querySelector(".btn-mobile");
const navlinks = document.getElementById("nav_links");
const icon = document.querySelector(".btn-mobile i");

btnmobile.addEventListener("click",() => {
    navlinks.classList.toggle('show');
    icon.classList.toggle('fa-times');
    icon.classList.toggle('fa-bars')
    
});
