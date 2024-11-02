const axios = require('axios');
// // const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// // const { app } = require('./app'); // Assuming your Express app is exported from a file named app.js
// import axios from 'axios';
describe('Register Tests', () => {
    test('Fail registration empty input', async () => {
        const testusername = { value: '' };
        const testpassword = { value: '' };

        try {
            await axios.post('http://localhost:5000/register', {
                username: testusername.value,
                password: testpassword.value,
            });
        } catch (error) {
            expect(error.response.status).toBe(400);
        }
    });
});

describe('Register Tests', () => {
    test('Fail registration user allready in database', async () => {
        const testusername = { value: 'cantin' };
        const testpassword = { value: 'eftgyhj' };

        try {
            await axios.post('http://localhost:5000/register', {
                username: testusername.value,
                password: testpassword.value,
            });
        } catch (error) {
            expect(error.response.status).toBe(500);
        }
    });
});

describe('Register Tests', () => {
    test('Insert a user in the database only work first time', async () => {
        const testusername = { value: 'newuser' };
        const testpassword = { value: 'newpassword' };

        // Insert user
        const response = await axios.post('http://localhost:5000/register', {
            username: testusername.value,
            password: testpassword.value,
        });


        expect(response.status).toBe(201);
    });
});

// describe('Login Tests', () => {
//     test('Successful login', async () => {
//         const username = { value: 'testuser' };
//         const password = { value: 'testpassword' };
//         const token = 'mockToken';

//         axios.post.mockResolvedValue({ data: { token } });
//         localStorage.setItem = jest.fn();
//         window.location.href = '';

//         await login();

//         expect(axios.post).toHaveBeenCalledWith('http://localhost:5000/login', {
//             username: username.value,
//             password: password.value,
//         });
//         expect(localStorage.setItem).toHaveBeenCalledWith('token', token);
//         expect(window.location.href).toBe('/planning');
//     });

//     test('Failed login', async () => {
//         const username = { value: 'testuser' };
//         const password = { value: 'wrongpassword' };

//         axios.post.mockRejectedValue(new Error('Login failed'));
//         window.alert = jest.fn();

//         await login();

//         expect(axios.post).toHaveBeenCalledWith('http://localhost:5000/login', {
//             username: username.value,
//             password: password.value,
//         });
//         expect(window.alert).toHaveBeenCalledWith('Login failed');
//     });
// });

// describe('Login API Tests', () => {
//     test('Successful login API', async () => {
//         const req = {
//             body: {
//                 username: 'testuser',
//                 password: 'testpassword',
//             },
//         };
//         const res = {
//             status: jest.fn().mockReturnThis(),
//             json: jest.fn(),
//         };
//         const user = { id_user: 1, password: 'hashedpassword' };

//         db.query = jest.fn((query, values, callback) => {
//             callback(null, [user]);
//         });
//         // bcrypt.compare.mockResolvedValue(true);
//         jwt.sign.mockReturnValue('mockToken');

//         await app.post('/login', req, res);

//         expect(res.json).toHaveBeenCalledWith({ token: 'mockToken' });
//     });

//     test('Failed login API - Invalid credentials', async () => {
//         const req = {
//             body: {
//                 username: 'testuser',
//                 password: 'wrongpassword',
//             },
//         };
//         const res = {
//             status: jest.fn().mockReturnThis(),
//             json: jest.fn(),
//         };

//         db.query = jest.fn((query, values, callback) => {
//             callback(null, []);
//         });

//         await app.post('/login', req, res);

//         expect(res.status).toHaveBeenCalledWith(401);
//         expect(res.json).toHaveBeenCalledWith({ message: 'Invalid credentials' });
//     });

//     test('Failed login API - Password mismatch', async () => {
//         const req = {
//             body: {
//                 username: 'testuser',
//                 password: 'wrongpassword',
//             },
//         };
//         const res = {
//             status: jest.fn().mockReturnThis(),
//             json: jest.fn(),
//         };
//         const user = { id_user: 1, password: 'hashedpassword' };

//         db.query = jest.fn((query, values, callback) => {
//             callback(null, [user]);
//         });
//         // bcrypt.compare.mockResolvedValue(false);

//         await app.post('/login', req, res);

//         expect(res.status).toHaveBeenCalledWith(401);
//         expect(res.json).toHaveBeenCalledWith({ message: 'Invalid credentials' });
//     });
// });
