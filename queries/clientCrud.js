const { db } = require("./dbHelpers");

// add new client
const addClient = async client =>
  await db("clients").insert(client, ["id", "name", "phone"]);

// update client
const updateClient = async client =>
  await db("clients").where({ id: client.id }).update(
    {
      name: client.name,
      phone: client.phone,
    },
    ["id", "name", "phone"]
  );

// delete client
const deleteClient = async id => await db("clients").where("id", id).del();

// get client
const getClient = async id =>
  await db("clients")
    .where({
      id: id,
    })
    .select();

// get all clients
const getClients = async _ => await db.select().table("clients");

// try it

let client = {
  name: "khalil updated",
  phone: "0785963256",
};

// addClient(client).then(res => console.log(res));
// updateClient(client).then(res => console.log(res));
// getClient(3).then(res => console.log(res));
// deleteClient(3).then(res => console.log(res));
// getClients().then(res => console.log(res));

module.exports = {
  addClient,
  updateClient,
  getClient,
  getClients,
  deleteClient,
};
