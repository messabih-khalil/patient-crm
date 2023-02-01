const {
  createClientIpc,
  getClientsIpc,
  updateClientIpc,
  deleteClientIpc,
} = require("./clientsIpc");

const {
  getAllApt,
  addAptMethod,
  updateClientApt,
  deleteClientApt,
} = require("./appointmentIpc");

module.exports = {
  createClientIpc,
  getClientsIpc,
  updateClientIpc,
  deleteClientIpc,

  getAllApt,
  addAptMethod,
  updateClientApt,
  deleteClientApt,
};
