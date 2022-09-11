import dotenv from 'dotenv';
dotenv.config();

export const environment = process.env.NODE_ENV;

export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;

export const dbConfig = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  url: process.env.DB_URL,
};
