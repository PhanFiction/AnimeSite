const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const api = supertest(app);

beforeEach(async () => {
  await User.deleteMany({});
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash('12345', saltRounds);
  const user = new User({
    email: 'tester@gmail.com',
    username: 'test',
    name: 'test',
    passwordHash,
  });
  await user.save();
})

describe('testing user signup', () => {
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


describe('testing user login', () => {
  test('success on user login', async () => {
    const user = {
      email: 'tester@gmail.com',
      password: '12345',
    }

    await api 
      .post('/auth/login')
      .send(user)
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  });

  test('fail to log in with wrong credentials', async () => {
    const user = {
      email: 'tester@gmail.com',
      password: '123456',
    }

    await api 
      .post('/auth/login')
      .send(user)
      .expect(404)
      .expect('Content-Type', /application\/json/)

    const user2 = {
      email: 'test@gmail.com',
      password: '12345',
    }

    await api 
      .post('/auth/login')
      .send(user2)
      .expect(404)
      .expect('Content-Type', /application\/json/)
  });
})

describe('logged out', () => {
  test('user logs out', async () => {
    const user = {
      email: 'tester@gmail.com',
      password: '12345',
    }

    const loggedUser = await api 
      .post('/auth/login')
      .send(user)
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /application\/json/);

    await api
      .get('/logout')
      .send(loggedUser.token)
      .expect(200)
  })
})

afterAll(async () => {
  await mongoose.disconnect();
});