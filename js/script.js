function moverTitulo() {
  var tituloOriginal = document.title;
  var texto = tituloOriginal + "     "; 
  var velocidade = 200; //velocidade

  setInterval(function() {
      texto = texto.substring(1) + texto.charAt(0);
      document.title = texto;
  }, velocidade);
}
//

//rolagem
function smoothScroll(event) {
  event.preventDefault();

  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: 'smooth'
  });
}



function rolagemsessao() {
  var secao = document.getElementById("inicio-promocao");
  secao.scrollIntoView({ behavior: 'smooth' });
}

