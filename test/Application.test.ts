import { application } from '@infrastructure/api/Application';
import { createDependencyContainer } from '@configuration';

describe('Testing App Request', () => {
    beforeAll(() => {
        createDependencyContainer();
    });

    it('debería retornar 404', async () => {
        const response = await application.inject({
            method: 'GET',
            url: '/route-not-found',
        });
        expect(response.statusCode).toBe(404);
    });
});
