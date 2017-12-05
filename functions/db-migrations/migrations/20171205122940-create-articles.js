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
  return db.createTable('articles', {
    id: {
      type: 'uuid',
      primaryKey: true,
    },
    title: {
      type: 'string',
      notNull: true,
    },
    body: {
      type: 'text',
      notNull: true,
    },
    slug: {
      type: 'string',
      notNull: true,
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
  return null;
};

exports._meta = {
  "version": 1
};
