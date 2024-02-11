/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgres://xczcfafz:NV4l8qJEKqXu-3H-3T6G9LHEe56WF-UO@castor.db.elephantsql.com/xczcfafz",
  DATABASE_URL_DEVELOPMENT="postgres://yubjebym:rJFxMe-Dd-JdHvVEfWEhOX02caEQx5Wt@castor.db.elephantsql.com/yubjebym",
  DATABASE_URL_TEST = "postgres://yubjebym:rJFxMe-Dd-JdHvVEfWEhOX02caEQx5Wt@castor.db.elephantsql.com/yubjebym",
  DATABASE_URL_PREVIEW = "postgres://yubjebym:rJFxMe-Dd-JdHvVEfWEhOX02caEQx5Wt@castor.db.elephantsql.com/yubjebym",
  DEBUG,

} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
