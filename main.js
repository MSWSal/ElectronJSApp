const {app, BrowserWindow} = require('electron');

let mainWindow;

const createWindow = function(){
    mainWindow= new BrowserWindow({
        width: 400,
        height:300,
        hasShadow: true,
        webPreferences: {
            nodeIntegration: true,
        },
    })

    mainWindow.loadFile('index.html');

    mainWindow.on('closed', function(){
        mainWindow=null;
    });    
}