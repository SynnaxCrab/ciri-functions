require('dotenv').config()

module.exports = {
  development: {
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
  },

  staging: {
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
  },

  production: {
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
  },
}
