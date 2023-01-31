module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        //Add also your database location
        extraResources: ["data/"],
      },
      //This line: add knex and sqlite3
      externals: ["knex", "sqlite3"],
    },
  },
};
