const { ipcMain } = require("electron");

// import crud operations

const { addClient } = require("../queries/clientCrud");

// create client
const createClientIpc = ipcMain.handle("createClient", (event, payload) => {
  addClient(payload).then(res => console.log(res));
});
//

module.exports = {
  createClientIpc,
};
