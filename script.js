const btnmobile = document.querySelector(".btn-mobile");
const navlinks = document.getElementById("nav_links");
btnmobile.addEventListener("click",() => {
    navlinks.classList.toggle('show');
    
});

const homeClick = document.querySelector(".homeclick");

homeClick.addEventListener("click", () => {
    alert("touch home");
})