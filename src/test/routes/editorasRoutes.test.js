import { afterEach, beforeEach, describe, it } from '@jest/globals';
import app from '../../app.js';
import request from 'supertest';

 
let server;
beforeEach( () => {
    const port = 3000;
    server = app.listen(port);
})
afterEach( () => {
    server.close();
})


describe('GET em /editoras', () => {
    it('Deve retornar uma lista de editoras', async () => {
        await request(app)
            .get('/editoras')
            .expect(200);
    })
})