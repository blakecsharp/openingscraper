const QueryShows = require("./queries/Shows.js");

module.exports = {
  Query: {
    GetShows: QueryShows.GetAllShows,
  },
};
