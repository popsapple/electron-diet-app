// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 1200,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  //mainWindow.loadFile('./build/index.html')
mainWindow.loadURL('http://localhost:3000/');
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.



// 웹팩 서버 키기
// Tools like Cloud9 rely on
try {
  const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
  const HOST = process.env.HOST || '0.0.0.0';
  const config = require('./scripts/start');
  config.starting(HOST, DEFAULT_PORT);
}catch(e){
  console.log('errordd'+e);
}
