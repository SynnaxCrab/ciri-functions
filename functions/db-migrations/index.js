console.log('starting function')

require('dotenv').config()

const knexMigrate = require('knex-migrate')

async function run(action, migration = {}) {
  const log = ({ action, migration }) =>
    console.log('Doing ' + action + ' on ' + migration)

  await knexMigrate(action, migration, log)
}

exports.handle = function(e, ctx, cb) {
  console.log('processing event: %j', e)

  run(e.action, e.migration)
}
