import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// import axios from 'axios';

//
const VideoItem: NextPage = (props) => {
    //
    const use_router = useRouter();

    //
    const [title, setTitle] = useState('');

    //
    useEffect(() => {
        let new_title = use_router.query['id'] as string;

        if (!new_title) {
            new_title = location.pathname.split('/').slice(-1)[0];
        }

        setTitle(new_title);
    }, []);

    //
    return (
        <div>
            <Head>
                <title>Video {title}</title>
                <meta name="description" content="" />
            </Head>

            <main>
                <h1>Video {title}</h1>
            </main>
        </div>
    );
};

//
// export async function getStaticPaths() {
    // const { data } = await axios.get<[{ id: string }]>(
    //     'http://localhost:8000/api/video'
    // );

    // //
    // return {
    //     paths: data.map((item) => ({
    //         params: {
    //             id: item.id,
    //         },
    //     })),
    //     fallback: false, // false or 'blocking'
    // };
// }

//
// export async function getStaticProps(context: any) {
    // const id = context['params']['id'];
    // //
    // const { data } = await axios.get<[{ id: string }]>(
    //     `http://localhost:8000/api/video/${id}`
    // );

    // //
    // return {
    //     props: {
    //         video: data,
    //     },
    // };
// }

export default VideoItem;
