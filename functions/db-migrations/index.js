console.log('starting function')

require('dotenv').config()

const DBM = require('db-migrate')
const dbm = DBM.getInstance(true)

exports.handle = function(e, ctx, cb) {
  console.log('processing event: %j', e)
  dbm.reset()
  cb(null, { hello: 'world' })
}
