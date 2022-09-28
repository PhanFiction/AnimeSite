const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const User = require('../models/User');

const api = supertest(app);

beforeEach(async () => {
  await User.deleteMany({});
})

describe('testing user credentials', () => {
  test('returns error if password is not given', async () => {
    const user = {
      email: 'test@gmail.com',
      username: 'test',
      name: 'tester',
      password: '',
    }

    await api
      .post('/auth/signup/')
      .send(user)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    const user2 = {
      email: 'test@gmail.com',
      username: 'test',
      name: 'tester',
      password: null,
    }

    await api
      .post('/auth/signup/')
      .send(user2)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    const user3 = {
      email: 'test@gmail.com',
      username: 'test',
      name: 'tester',
      password: undefined,
    }

    await api
      .post('/auth/signup/')
      .send(user3)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    const user4 = {
      email: 'test@gmail.com',
      username: 'test',
      name: 'tester',
      password: 'aa',
    }

    await api
      .post('/auth/signup/')
      .send(user4)
      .expect(400)
      .expect('Content-Type', /application\/json/)
  })

  test('returns success for user signup', async () => {
    const user = {
      email: 'test@gmail.com',
      username: 'test',
      name: 'tester',
      password: '12345',
    }

    await api 
      .post('/auth/signup/')
      .send(user)
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })
});

afterAll(async () => {
  await mongoose.disconnect();
});