const { ipcRenderer, shell } = require('electron');
//ipcRenderer comunica o processo de render com o main
const process = require('process');

let linkFechar = document.querySelector('#link-fechar');
let linkLinkedin = document.querySelector('#link-linkedin');
let versaoElectron = document.querySelector('#versao-electron');

window.onload = function(){
  versaoElectron.textContent = process.versions.electron;
}

linkLinkedin.addEventListener('click', function(){
  shell.openExternal("https://www.linkedin.com/in/matheus-pereira-dev/");
  //Abre o programa no navegador padrão
});

linkFechar.addEventListener('click', function() {
  ipcRenderer.send('fechar-janela-sobre');
});
