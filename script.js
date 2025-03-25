// variaveisque seleciona o html
const horas = document.getElementById('horas'); //pega o span de horas
const minutos = document.getElementById('minutos'); 
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday= new Date();
    let hora = dateToday.getHours(); //pega a hora atual
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    //adicionar o zero a esquerda
    if( hora < 10) hora = '0'+ hora;
    if( min < 10) min = '0'+ min;
    if( sec < 10) sec = '0'+ sec;

    // atualiza o conteudo dos span
    horas.textContent = hora;
    minutos.textContent = min;
    segundos.textContent = sec;
})