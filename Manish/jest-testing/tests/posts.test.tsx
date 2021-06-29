import { getStaticProps } from '../pages/posts/index'
import { GetStaticProps } from 'next'
import fetch from 'node-fetch'


describe("getStaticProps form posts index page ", () => {

    test('posts', async () => {
        const posts = await getStaticProps();
        

        console.log(posts.props.users);
        expect(posts.props.users.length > 0).toBeTruthy();
    });

});