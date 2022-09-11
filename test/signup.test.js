import { BASE_URL, expect, server, User } from './setup';

const URL = `${BASE_URL}/auth/signup`;

describe('unit: POST auth/signup', () => {
  before(async () => {
    await User.destroy({ where: {} });
  });

  it('should successfully signup a new user', async () => {
    const response = await server
      .post(URL)
      .send({ name: 'Test User', email: 'testuser@email.com' });

    expect(response.status).to.equal(201);

    const resBody = response.body;
    expect(resBody).to.include.keys('message');
    expect(resBody.message).to.equal('Account created successfully');
  });

  it('should fail to sign up a new user with an existing email', async () => {
    const response = await server
      .post(URL)
      .send({ name: 'Duplicate Test User', email: 'testuser@email.com' });

    expect(response.status).to.equal(422);

    const resBody = response.body;
    expect(resBody).to.include.keys('message');
    expect(resBody.message).to.equal('A user with that email already exists');
  });

  it('should fail to sign up a new user with an empty request body', async () => {
    const response = await server.post(URL).send({});

    expect(response.status).to.equal(400);

    const resBody = response.body;
    expect(resBody).to.include.keys('message');
    expect(resBody.message).to.equal('"name" is required');
  });

  it('should fail to sign up a new user with an invalid email address', async () => {
    const response = await server
      .post(URL)
      .send({ name: 'Test User', email: 'bademail' });

    expect(response.status).to.equal(400);

    const resBody = response.body;
    expect(resBody).to.include.keys('message');
    expect(resBody.message).to.equal('"email" must be a valid email');
  });

  it('should fail to sign up a new user with an empty email address', async () => {
    const response = await server
      .post(URL)
      .send({ name: 'Test User', email: '' });

    expect(response.status).to.equal(400);

    const resBody = response.body;
    expect(resBody).to.include.keys('message');
    expect(resBody.message).to.equal('"email" is not allowed to be empty');
  });

  it('should fail to sign up a new user with an empty name', async () => {
    const response = await server
      .post(URL)
      .send({ name: '', email: 'testuser@email.com' });

    expect(response.status).to.equal(400);

    const resBody = response.body;
    expect(resBody).to.include.keys('message');
    expect(resBody.message).to.equal('"name" is not allowed to be empty');
  });
});
