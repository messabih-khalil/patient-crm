const { ipcMain } = require("electron");
const {
  addApt,
  getApts,
  updateApt,
  deleteApt,
} = require("../queries/appointmentsCrud");

// get clients appt
const getAllApt = ipcMain.handle("getAllApt", async (event, payload) => {
  let result = [];

  await getApts(payload).then(res => (result = res));

  return result;
});

// add apt
const addAptMethod = ipcMain.handle("addApt", async (event, payload) => {
  let result = {};
  await addApt(payload).then(res => (result = res));

  return result;
});

// update apt

const updateClientApt = ipcMain.handle("updateApt", async (event, payload) => {
  let result = {};
  await updateApt(payload).then(res => (result = res[0]));
  return result;
});

// delete apt

const deleteClientApt = ipcMain.handle("deleteApt", async (event, id) => {
  console.log(id);
  await deleteApt(id)
    .then(res => {
      return true;
    })
    .catch(err => {
      return false;
    });
});

module.exports = {
  getAllApt,
  addAptMethod,
  updateClientApt,
  deleteClientApt,
};
