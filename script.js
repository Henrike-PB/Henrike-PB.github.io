let ul = document.querySelector('.ul');
let btn = document.querySelector('.toggle');

// the menu
btn.addEventListener('click', function () {
    btn.classList.toggle('btn');

    ul.classList.toggle('show');
});


window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    

    if (window.scrollY >= 400) {
        header.style.position = 'fixed';
        header.style.backgroundColor = '#473E66';
        header.style.color = '#F5D7DB'
        header.style.zIndex = '10';
        header.style.width = '100%';
        
    } else {
        header.style.position = 'relative';
        header.style.backgroundColor = 'transparent';
        header.style.zIndex = '10';
        header.style.width = '100%';
        header.style.color = 'black';
    }
});


window.addEventListener('scroll', function () {
    var header = document.querySelector('.dark-mode header');
    

    if (window.scrollY >= 400) {
        header.style.position = 'fixed';
        header.style.backgroundColor = '#06142E';
        header.style.color = '#F5D7DB'
        header.style.zIndex = '10';
        header.style.width = '100%';
        
    } else {
        header.style.position = 'relative';
        header.style.backgroundColor = 'transparent';
        header.style.zIndex = '10';
        header.style.width = '100%';
        // header.style.color = '#F5D7DB'
    }
});





let isMenuOpen = false;

// Função para fechar o menu hamburguer
function closeMenu() {
    btn.classList.remove('btn');
    ul.classList.remove('show');
    isMenuOpen = false;
}

// Adicionar event listener para fechar o menu ao clicar fora dele
document.addEventListener('click', function(event) {
    const isClickInsideMenu = ul.contains(event.target);
    const isClickOnBtn = btn.contains(event.target);

    if (!isClickInsideMenu && !isClickOnBtn && isMenuOpen) {
        closeMenu();
    }
});




// Função da tela de introdução do portfólio
function turnOnLight() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('content').style.display = 'block';

    // Ative o Scroll Reveal após o conteúdo ser revelado
    activateScrollReveal();
}

// Função para ativar o efeito de Scroll Reveal
function activateScrollReveal() {
    window.sr = ScrollReveal({ reset: true });
   
    sr.reveal('.section', { duration: 1200 });
    sr.reveal('.tech', { duration: 1000 });
    sr.reveal('.soft', { duration: 1000 });
    sr.reveal('.projetos-container', { duration: 2000 });
    sr.reveal('.contact', { duration: 1000 });
}



// Animação da frase escrita
var typed = new Typed('.typing', {
    strings: [
        'Carpe diem:',
        '"Aproveite o dia e deixe o mínimo possível para o amanhã."',
    ],
    typeSpeed: 50, // velocidade de digitação
    backSpeed: 20, // velocidade de retrocesso
    startDelay: 800, // atraso antes de começar a digitar
    smartBackspace: true, // retrocesso inteligente - retrocede apenas para o último ponto de conclusão de uma palavra

    loop: true, // loop da animação
});

var typed2 = new Typed('.typing2', {
    strings: [
        'Henrike Pajares Braga',
        'Desenvolvedor Full Stack',
    ],
    typeSpeed: 40,
    backSpeed: 40,
    startDelay: 100,
    smartBackspace: true,
    loop: true,
});

// script do popup
// utilizado video como referencia de GreatStack - How To Make A Popup Using HTML, CSS And JavaScript | Create a Modal Box in HTML Websit

let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup")
}

function closePopup(){
    popup.classList.remove("open-popup")
}


