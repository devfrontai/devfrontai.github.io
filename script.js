// script.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // SEU NÚMERO DE WHATSAPP COMPLETO (ex: 5521959572496)
    const whatsappNumber = '5521959572496';
    
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    const fullMessage = `Olá DevFront AI, sou ${name} (${email}) e tenho o seguinte projeto para 24h: ${message}. Podemos começar agora?`;
    
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappLink, '_blank');
});
