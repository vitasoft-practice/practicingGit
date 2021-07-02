import { getStaticPaths } from '../pages/posts/[id]'
import { getStaticProps } from '../pages/posts/[id]'

describe('getStaticPaths from posts/[id]', () => {
    test('test', async () => {

        const res = await getStaticPaths();
        console.log(res.paths[0].params);
        expect(parseInt(res.paths[2].params.id)).toBeLessThanOrEqual(3);
        
    });
});