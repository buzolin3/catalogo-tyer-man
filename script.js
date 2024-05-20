var camisetaPremium = document.querySelectorAll("#Premium");
var camisetaSurf = document.querySelectorAll("#Surf");



//Mostrar todos produtos
function mostrarTodos() {
    camisetaPremium.forEach(function(camisetaPremium) {
        camisetaPremium.classList.remove('d-none');
        camisetaPremium.classList.add('d-block');
    });
    camisetaSurf.forEach(function(camisetaSurf){
        camisetaSurf.classList.remove('d-none');
        camisetaSurf.classList.add('d-block');
    });
}


//Mostrar as Surfs na tela
function mostrarSurf() {
    camisetaPremium.forEach(function(camisetaPremium){
        camisetaPremium.classList.add('d-none')
    })
    camisetaSurf.forEach(function(camisetaSurf){
        camisetaSurf.classList.remove('d-none');
        camisetaSurf.classList.add('d-block');
    });
}

//Mostrar as Premium na tela
function mostrarPremium() {
    camisetaSurf.forEach(function(camisetaSurf){
        camisetaSurf.classList.add('d-none')
    })
    camisetaPremium.forEach(function(camisetaPremium) {
        camisetaPremium.classList.remove('d-none');
        camisetaPremium.classList.add('d-block');
    });
}
