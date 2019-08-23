const { ipcRenderer } = require('electron'); //(Inter-Process Communication) comunicação entre processos

let linkSobre = document.querySelector('#link-sobre');

linkSobre.addEventListener('click', function() { //Detecta o evento do click
    ipcRenderer.send('abrir-janela-sobre');
});

//O ipcRenderer se comunica através de eventos,
//ou seja, ele envia um evento para o processo principal,
//que por sua vez fica escutando esse evento.
//Então, quando o link Sobre for clicado, enviamos um evento
//através da função send.
//Chamaremos o evento de abrir-janela-sobre
