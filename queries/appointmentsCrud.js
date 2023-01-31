const { db } = require("./dbHelpers");

// add new appointment
const addApt = async apt =>
  await db("appointments").insert(apt, [
    "id",
    "description",
    "price",
    "paid",
    "created_at",
  ]);
// update appointment
const updateApt = async apt =>
  await db("appointments").where({ id: apt.id }).update(
    {
      description: apt.description,
      price: apt.price,
      paid: apt.paid,
      created_at: apt.created_at,
    },
    ["id", "description", "price", "paid", "created_at"]
  );
// delete appointment
const deleteApt = async id => await db("appointments").where("id", id).del();

// get all appointments
const getApts = async client_id =>
  await db("appointments")
    .where({
      client_id: client_id,
    })
    .select();

// const aptt = {
//   client_id: 16,
//   description: "lorem iop ss",
//   price: 7000,
//   paid: 2000,
// };

// getApts(1).then(res => console.log(res));
// updateApt(aptt).then(res => console.log(res));
// addApt(aptt).then(res => console.log(res));
// deleteApt(1).then(res => console.log(res));

module.exports = {
  addApt,
  deleteApt,
  updateApt,
  getApts,
};
