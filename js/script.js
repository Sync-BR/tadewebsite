
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
