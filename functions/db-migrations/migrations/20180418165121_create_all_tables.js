exports.up = async function(knex) {
  await knex.schema.createTable('users', function(t) {
    t.increments()
    t.uuid('uuid')
      .unique()
      .notNullable()
    t.string('email')
      .unique()
      .notNullable()
    t.string('name').notNullable()
    t.timestamps()
  })

  await knex.schema.createTable('identities', function(t) {
    t.increments()
    t.uuid('uuid')
      .unique()
      .notNullable()
    t.string('uid')
      .unique()
      .notNullable()
    t.string('provider').notNullable()
    t.bigInteger('user_id')
      .references('id')
      .inTable('users')
      .index()
    t.timestamps()
  })

  await knex.schema.createTable('oauth_clients', function(t) {
    t.increments()
    t.uuid('uuid')
      .unique()
      .notNullable()
    t.string('name').notNullable()
    t.string('uid')
      .unique()
      .notNullable()
    t.string('secret').notNullable()
    t.text('grants').notNullable()
    t.text('redirect_uris').notNullable()
    t.integer('access_token_lifetime')
    t.integer('refresh_token_lifetime')
    t.timestamps()
  })

  await knex.schema.createTable('oauth_authorization_codes', function(t) {
    t.increments()
    t.string('code')
      .unique()
      .notNullable()
    t.dateTime('expires_at').notNullable()
    t.text('redirect_uri').notNullable()
    t.text('scope')
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

  await knex.schema.createTable('oauth_tokens', function(t) {
    t.increments()
    t.string('access_token')
      .unique()
      .notNullable()
    t.dateTime('expires_at').notNullable()
    t.string('refresh_token')
      .unique()
      .notNullable()
    t.dateTime('refresh_token_expires_at').notNullable()
    t.text('scope')
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
      .unique()
      .notNullable()
    t.string('title').notNullable()
    t.string('slug')
      .unique()
      .notNullable()
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
  await knex.schema.dropTable('oauth_tokens')
  await knex.schema.dropTable('oauth_authorization_codes')
  await knex.schema.dropTable('oauth_clients')
  await knex.schema.dropTable('identities')
  await knex.schema.dropTable('users')
}
