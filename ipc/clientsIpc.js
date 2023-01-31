const { ipcMain } = require("electron");

// import crud operations

const { addClient } = require("../queries/clientCrud");

// create client
const createClientIpc = ipcMain.handle("createClient", (event, payload) => {
  let data = [];
  addClient(payload).then(res => {
    data = res;
  });

  return data;
});
//

module.exports = {
  createClientIpc,
};
