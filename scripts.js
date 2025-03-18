document.addEventListener("DOMContentLoaded", function () {
    console.log("Leah Bot Website carregado com sucesso!");

    const links = document.querySelectorAll("nav ul li a");
    
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 20,
                    behavior: "smooth"
                });
            }
        });
    });
});
