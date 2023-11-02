const moduloh2 = document.querySelectorAll('.modulo h2');
const moduloDiv = document.querySelectorAll('.modulo div');
const moduloh2I = document.querySelectorAll('.modulo h2 i');

const botao = document.querySelector('.botao');
const botaoSpan = document.querySelectorAll('.botao span');
const [span1, span2, span3] = botaoSpan;

const botaoOculto = document.querySelector('.botao-oculto');
const botaoOcultoSpan = document.querySelectorAll('.botao-oculto span');
const [span4, span5] = botaoOcultoSpan;

const cabecalhoOculto = document.querySelector('.cabecalho-oculto');

const menuVideoh2 = document.querySelectorAll('.menu-video h2');
const visaoGeral = document.querySelector('.visao-geral');
const comentarios = document.querySelector('.comentarios');
const avaliacoes = document.querySelector('.avaliacoes');

document.addEventListener('click', e => {

    const el = e.target;

    for(let i = 0; i < moduloh2.length; i++){
        if(el == moduloh2[i] || el == moduloh2I[i]){
            moduloDiv[i].classList.toggle('desocultar-aulas');
            moduloh2I[i].classList.toggle('virar');
        }
    }

    if(el == menuVideoh2[0]){
        menuVideoh2[0].classList.add('selecionado');
        menuVideoh2[1].classList.remove('selecionado');
        menuVideoh2[2].classList.remove('selecionado');
        visaoGeral.classList.remove('ocultar');
        comentarios.classList.remove('desocultar');
        avaliacoes.classList.remove('desocultar');
    }
    else if(el == menuVideoh2[1]){
        menuVideoh2[0].classList.remove('selecionado');
        menuVideoh2[1].classList.add('selecionado');
        menuVideoh2[2].classList.remove('selecionado');
        visaoGeral.classList.add('ocultar');
        comentarios.classList.add('desocultar');
        avaliacoes.classList.remove('desocultar');
    }
    else if(el == menuVideoh2[2]){
        menuVideoh2[0].classList.remove('selecionado');
        menuVideoh2[1].classList.remove('selecionado');
        menuVideoh2[2].classList.add('selecionado');
        visaoGeral.classList.add('ocultar');
        comentarios.classList.remove('desocultar');
        avaliacoes.classList.add('desocultar');
    }

});

document.addEventListener('mouseover', e => {

    const el = e.target;

    if(el == botao || el == span1 || el == span2 || el == span3){
        cabecalhoOculto.classList.add('desocultar-menu');
    } else if(el == botaoOculto || el == span4 || el == span5){
        cabecalhoOculto.classList.remove('desocultar-menu');
    }

});
