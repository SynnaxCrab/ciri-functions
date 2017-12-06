console.log('starting function')

require('dotenv').config()

const DBM = require('db-migrate')
const dbm = DBM.getInstance(true)

exports.handle = function(e, ctx, cb) {
  console.log('processing event: %j', e)

  switch (e.action) {
    case 'up':
      dbm.up().then(() => {
        console.log("successfully migrated up")
        cb(null, { status: 'up done' })
      })
    case 'down':
      dbm.down(1).then(() => {
        console.log("successfully migrated down")
        cb(null, { status: 'down done' })
      })
  }
}
