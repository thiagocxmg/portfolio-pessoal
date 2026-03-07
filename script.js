// botão pelo ID
const btnTopo = document.getElementById("btn-topo");

// rolagem da tela
window.addEventListener("scroll", () => {
    // rolou 50 pixels para baixo, o botão aparece
    if (window.scrollY > 50) {
        btnTopo.style.display = "block";
    } else {
        // se não, ele fica invisível
        btnTopo.style.display = "none";
    }
});

// clica no botão
btnTopo.addEventListener("click", () => {
    // Faz a tela rolar de volta para o topo de forma suave (smooth)
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});