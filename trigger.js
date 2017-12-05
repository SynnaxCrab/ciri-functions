require('dotenv').config()

const https = require('https')
const aws4  = require('aws4')

const opts = {
  host: process.env.API_HOST,
  path: process.env.API_PATH,
  region: process.env.AWS_REGION,
}

aws4.sign(opts)

https.get(opts, function(res) { res.pipe(process.stdout) }).end()
