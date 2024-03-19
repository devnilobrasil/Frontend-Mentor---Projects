window.addEventListener('scroll', function() {
    // Verifica se o usuário alcançou o final da página
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // Desativa a rolagem para cima
        window.scrollTo(0, document.body.offsetHeight - window.innerHeight);
    }
});
