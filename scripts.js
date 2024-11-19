


// Função para exibir uma mensagem de boas-vindas personalizada
document.addEventListener("DOMContentLoaded", function () {
    const welcomeMessage = document.getElementById("welcomeMessage");
    if (welcomeMessage) {
        welcomeMessage.innerText = "Bem-vindo ao meu portfólio! Explore minhas habilidades e projetos dentro do menu.";
    }
});

// Função para simular transições de páginas ao clicar nos links de navegação
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Previne o comportamento padrão do link

        // Adiciona efeito de desvanecimento
        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = link.href; // Redireciona para a nova página após o efeito
        }, 500); // Ajuste o tempo do efeito, se necessário
    });
});

// Função de efeito de rolagem suave ao clicar em âncoras internas
const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
};

// Evento para verificar quando o usuário rola a página
window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    const header = document.querySelector("header");

    // Muda o estilo do cabeçalho conforme a rolagem
    if (scrollPosition > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".portfolio-item").forEach(item => {
        item.addEventListener("click", () => {
            alert("Item clicado!"); // Alerta básico para testar
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const galleryImages = document.querySelectorAll(".gallery-img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeLightbox = document.getElementById("close-lightbox");

    // Abre o lightbox ao clicar na imagem
    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            lightboxImg.src = img.src; // Define a imagem no lightbox
            lightbox.classList.remove("hidden"); // Mostra o lightbox
        });
    });

    // Fecha o lightbox ao clicar no botão de fechar
    closeLightbox.addEventListener("click", () => {
        lightbox.classList.add("hidden");
    });

    // Fecha o lightbox ao clicar fora da imagem
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.classList.add("hidden");
        }
    });
});
