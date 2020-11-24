function setSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone: 'GMT' // COMANDO PARA ZERAR O RELOGIO
    });
}

console.log(setSegundos(10));

// para colocar os eventos dos botões da pagina
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.Iniciar');
const pausar = document.querySelector('.Pausar');
const zerar = document.querySelector('.Zerar');
let segundos = 0;
let timer;

//função para iniciar a contagem
// chamando a função setSegundos
//ira formatar por conta do formato data
function inicioRelogio(){
     timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = setSegundos(segundos);
    }, 1000);
}

/*
    com esse comando contains ele possiblita que
    perceba o botão que vc clicou pe
*/
document.addEventListener('click', function(e){
    const elemento = e.target;
    if(elemento.classList.contains('Iniciar')){
        relogio.classList.remove('pausar');
        clearInterval(timer);
        inicioRelogio();
    }

    if(elemento.classList.contains('Pausar')){
        relogio.classList.add('pausar');
        clearInterval(timer);
    }

    if (elemento.classList.contains('Zerar')){
        relogio.classList.remove('pausar');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }
});


/*
Essa parte comentada é um outro jeito de fazer
a parte de cima é um jeito mais fácil
e de certa forma deixa o código mais bonito

// utilizando o click
iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausar');
    clearInterval(timer);
    inicioRelogio();
});

pausar.addEventListener('click', function(event){
    clearInterval(timer); //
    relogio.classList.add('pausar');
});

zerar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});*/