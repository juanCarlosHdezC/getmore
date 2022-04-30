document.addEventListener('DOMContentLoaded', function() {

    eventListener();
    navegacionFija();
});

function eventListener() {
    const mobilMenu = document.querySelector('.menu');

    mobilMenu.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive(){
    const navegacion = document.querySelector('.navegacion');
    navegacion.classList.toggle('mostrar');

}
function navegacionFija() {
    const barra = document.querySelector('.barra');
    const accesorio = document.querySelector('.accesorio');
    const body = document.querySelector('body');

    window.addEventListener('scroll', function(){

        if(accesorio.getBoundingClientRect().top < 5) {
            barra.classList.add('fijo');
            body.classList.add('body-scroll');
        }else {
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll');
        }

        


    });
}