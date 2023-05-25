


// Selecione todos os links internos na página
const links = document.querySelectorAll('scr');

// Adicione um evento de clique suave a cada link
links.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

// Função para rolagem suave
function smoothScroll(event) {
  event.preventDefault();

  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);

  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: 'smooth'
  });
}





//Selecionar botao
const btnservicos    = document.getElementById('btnservicos');

//Click botão
btnservicos.addEventListener('click' , function() {
    const botaoservicos = document.getElementById('servicos_caixa_index');
    const duration = 10;
    botaoservicos.scrollIntoView({
        behavior: 'smooth'
    })
   
})
