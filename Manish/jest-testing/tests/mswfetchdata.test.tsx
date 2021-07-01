import { rest } from 'msw';
import { setupServer } from 'msw/node';
import fetchData from '../components/FetchData';


describe('test fetch data msw', () => {


    const server = setupServer(
        rest.get('https://reqres.in/api/users', (req, res, ctx) => {
            return res(
                ctx.json({ email: 'info@gmail.com' })
            );
        })
    );

    beforeAll(() => server.listen());
    afterAll(() => server.close());

    test('Successfully fetches email', async () => {

        const data = await fetchData();
        // console.log(data);
        expect(data).toEqual('info@gmail.com');
    });

})
