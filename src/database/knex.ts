import { knex } from "knex";
import Client_SQLite3 = require("knex/lib/dialects/sqlite3");

class Client_Libsql extends Client_SQLite3 {
  _driver() {
    return require("@libsql/sqlite3");
  }
}

export const db = knex({
  client: Client_Libsql as any,
  connection: {
    filename: "./db.sqlite",
  },
})
