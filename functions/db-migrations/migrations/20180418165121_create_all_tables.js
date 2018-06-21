exports.up = async function(knex) {
  await knex.schema.createTable('users', function(t) {
    t.increments()
    t.uuid('uuid')
    t.string('email')
    t.string('name')
    t.string('token')
    t.timestamps()
  })

  await knex.schema.createTable('identities', function(t) {
    t.increments()
    t.uuid('uuid')
    t.string('uid')
    t.string('provider')
    t.bigInteger('user_id')
      .references('id')
      .inTable('users')
      .index()
    t.timestamps()
  })

  await knex.schema.createTable('oauth_clients', function(t) {
    t.increments()
    t.uuid('uuid')
    t.string('uid')
    t.string('secret')
    t.timestamps()
  })

  await knex.schema.createTable('oauth_authorization_codes', function(t) {
    t.increments()
    t.string('code')
    t.dateTime('expires_at')
    t.text('redirect_uri')
    t.bigInteger('oauth_client_id')
      .references('id')
      .inTable('oauth_clients')
      .index()
    t.bigInteger('user_id')
      .references('id')
      .inTable('users')
      .index()
    t.timestamps()
  })

  await knex.schema.createTable('oauth_access_tokens', function(t) {
    t.increments()
    t.string('token')
    t.dateTime('expires_at')
    t.text('redirect_uri')
    t.bigInteger('oauth_client_id')
      .references('id')
      .inTable('oauth_clients')
      .index()
    t.bigInteger('user_id')
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
    t.bigInteger('user_id')
      .references('id')
      .inTable('users')
      .index()
    t.timestamps()
  })
}

exports.down = async function(knex) {
  await knex.schema.dropTable('articles')
  await knex.schema.dropTable('oauth_access_tokens')
  await knex.schema.dropTable('oauth_authorization_codes')
  await knex.schema.dropTable('oauth_clients')
  await knex.schema.dropTable('identities')
  await knex.schema.dropTable('users')
}
