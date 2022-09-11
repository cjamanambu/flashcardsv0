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
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    host: dbConfig.host,
    dialect: dbConfig.dialect,
  },
  production: {
    use_env_variable: dbConfig.url,
    dialect: dbConfig.dialect,
  },
};
