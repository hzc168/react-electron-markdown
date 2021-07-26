const { app, BrowserWindow, BrowserView } = require('electron')

const isDev = require('electron-is-dev')

let mainWin
// 创建窗口
function createWindow() {
    mainWin = new BrowserWindow({
        show: false,
        width: 1024,
        height: 650,
        minWidth: 650,
        webPreferences: {
            nodeIntegration: true, // 继承node
            contextIsolation: false,
            enableRemoteModule: true
        }
    })

    // mainWin.loadFile('index.html')
    
    const urlLocation = isDev ? 'http://localhost:3000' : 'myUrl';
    mainWin.loadURL(urlLocation)

    // mainWin.webContents.openDevTools()

    mainWin.on('ready-to-show', () => {
        mainWin.show()
    })
    mainWin.on('close', () => {
        mainWin = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    app.quit();
})