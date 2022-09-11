import supertest from 'supertest';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import app from '../src/app';
import model from '../src/models';

chai.use(sinonChai);
export const { expect } = chai;
export const server = supertest.agent(app, {});
export const BASE_URL = '/v1';
export const { User } = model;
