import { dbConfig } from '../settings';

module.exports = {
  development: {
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    host: dbConfig.host,
    dialect: dbConfig.dialect,
  },
  test: {
    username: dbConfig.testUsername,
    password: dbConfig.testPassword,
    database: dbConfig.testDatabase,
    host: dbConfig.testHost,
    dialect: dbConfig.testDialect,
  },
  production: {
    use_env_variable: dbConfig.url,
    dialect: dbConfig.dialect,
  },
};
