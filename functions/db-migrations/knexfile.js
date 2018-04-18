require('dotenv').config()

defaultConfig = {
  client: 'postgresql',
  connection: {
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
  },
  migrations: {
    tableName: 'migrations',
  },
}

module.exports = {
  development: defaultConfig,
  staging: defaultConfig,
  production: defaultConfig,
}
