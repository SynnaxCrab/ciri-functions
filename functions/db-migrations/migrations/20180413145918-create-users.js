'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('users', {
    id: {
      type: 'uuid',
      primaryKey: true,
    },
    email: {
      type: 'string',
      notNull: true,
    },
    name: {
      type: 'string',
      notNull: true,
    },
    twitterId: {
      type: 'integer',
      notNull: false,
    },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      defaultValue: new String('now()'),
    },
    updatedAt: {
      type: 'timestamp',
      notNull: true,
      defaultValue: new String('now()'),
    },
  });
};

exports.down = function(db) {
  return db.dropTable('users');
};

exports._meta = {
  "version": 1
};
