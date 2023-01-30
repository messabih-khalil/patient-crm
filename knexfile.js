module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/app.db3",
    },
  },
  useNullAsDefault: true,
};
