//Importação das bibliotecas do eletron
const { app, BrowserWindow, ipcMain } = require('electron');

//O submódulo app é o responsável por controlar o ciclo de vida de nossa aplicação.
app.on('ready', () =>{
  console.log("Aplicacao Iniciada");
  let mainWindow = new BrowserWindow({
    width: 600,
    heigth:400
  });

  mainWindow.loadURL(`file://${__dirname}/app/index.html`);//Aponta para diretorio local no Node

});

app.on('window-all-closed', () =>{
  app.quit();
});

let sobreWindow = null;
ipcMain.on('abrir-janela-sobre', () => {//Escuta o evento passado no JS
  if(sobreWindow == null){
    sobreWindow = new BrowserWindow({
        width: 300,
        height: 220,
        alwaysOnTop: true, //Permiti que o browser fica acima de todas as outras
        frame: false
    });
    sobreWindow.on('closed', () =>{//Após fechar a janela não destroi o objeto
      sobreWindow = null;
    });
  }

    sobreWindow.loadURL(`file://${__dirname}/app/sobre.html`);
});

ipcMain.on('fechar-janela-sobre', () =>{
  sobreWindow.close();
});
