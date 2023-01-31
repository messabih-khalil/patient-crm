const { createClientIpc, getClientsIpc } = require("./clientsIpc");

const {
  getAllApt,
  addAptMethod,
  updateClientApt,
  deleteClientApt,
} = require("./appointmentIpc");

module.exports = {
  createClientIpc,
  getClientsIpc,

  getAllApt,
  addAptMethod,
  updateClientApt,
  deleteClientApt,
};
