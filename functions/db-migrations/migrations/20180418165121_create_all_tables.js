exports.up = async function(knex) {
  await knex.schema.createTable('users', function(t) {
    t.increments()
    t.uuid('uuid')
    t.string('email')
    t.string('name')
    t.timestamps()
  })

  await knex.schema.createTable('identities', function(t) {
    t.increments()
    t.uuid('uuid')
    t.string('uid')
    t.string('provider')
    t
      .bigInteger('userId')
      .references('id')
      .inTable('users')
      .index()
    t.timestamps()
  })

  await knex.schema.createTable('articles', function(t) {
    t.increments()
    t.uuid('uuid')
    t.string('title')
    t.string('slug')
    t.jsonb('body')
    t
      .bigInteger('userId')
      .references('id')
      .inTable('users')
      .index()
    t.timestamps()
  })
}

exports.down = async function(knex) {
  await knex.schema.dropTable('articles')
  await knex.schema.dropTable('identities')
  await knex.schema.dropTable('users')
}
