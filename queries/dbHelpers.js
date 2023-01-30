const knex = require("knex");
const config = require("../knexfile");

const db = knex(config.development);

module.exports = {
  db,
};



// addClient({ name: "aldin", phone: "02587485" })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// const find = async _ => await db.select().table("clients");

// find().then(res => console.log(res));
