const { ipcMain } = require("electron");

// import crud operations

const { addClient, getClients } = require("../queries/clientCrud");

// create client
const createClientIpc = ipcMain.handle(
  "createClient",
  async (event, payload) => {
    let data = {};
    await addClient(payload).then(res => {
      data = res[0];
    });

    return data;
  }
);

// get Clients

const getClientsIpc = ipcMain.handle(
  "getAllClients",
  async (event, payload) => {
    let result = [];
    await getClients().then(res => (result = res));
    return result;
  }
);

module.exports = {
  createClientIpc,
  getClientsIpc,
};
