const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT name, gender, age, phone
    FROM user LIMIT ${offset},${config.listPerPage}`
  );
  const count = await db.query(`SELECT count(name) as count FROM user`)
  const total = count[0].count
  const data = helper.emptyOrRows(rows);
  const meta = {page, total, more: page * config.listPerPage < total};

  return {
    data,
    meta
  }
}

module.exports = { getMultiple }