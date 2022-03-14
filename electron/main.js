const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

class AppWindow extends BrowserWindow {
  constructor(config, urlLocation) {
    const basicConfig = {
      width: 800,
      height: 600,
      webPreferences: {
        contextIsolation: false,
        nodeIntegration: true,
        enableRemoteModule: true,
        nodeIntegrationInWorker: true,
      },
      show: false,
      backgroundColor: '#efefef',
    };
    const finalConfig = { ...basicConfig, ...config };
    super(finalConfig);
    this.loadURL(urlLocation);
    this.once('ready-to-show', () => {
      this.show();
    });
  }
}

app.on('ready', () => {
  const mainWindowConfig = {
    width: 1440,
    height: 768,
  };
  const urlLocation = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, './index.html')}`;
  let mainWindow = new AppWindow(mainWindowConfig, urlLocation);
  mainWindow.on('closed', () => {
    mainWindow = null;
    app.quit();
  });
});
