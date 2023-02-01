const { ipcMain } = require("electron");

// import crud operations

const {
  addClient,
  getClients,
  updateClient,
  deleteClient,
} = require("../queries/clientCrud");

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

const updateClientIpc = ipcMain.handle(
  "updateClient",
  async (event, payload) => {
    let data = {};
    await updateClient(payload).then(res => {
      data = res[0];
    });

    return data;
  }
);
const deleteClientIpc = ipcMain.handle("deleteClient", async (event, id) => {
  await deleteClient(id)
    .then(res => {
      return true;
    })
    .catch(err => {
      return false;
    });
});

module.exports = {
  createClientIpc,
  getClientsIpc,
  updateClientIpc,
  deleteClientIpc,
};
