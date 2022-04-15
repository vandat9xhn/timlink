import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

//
const VideoTopic: NextPage = (props) => {
    //
    const use_router = useRouter();

    //
    const [title, setTitle] = useState('');

    //
    useEffect(() => {
        console.log(props);

        let new_title = use_router.query['topic'] as string;

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
export async function getStaticPaths() {
    //
    return {
        paths: [
            {
                params: {
                    topic: 'funny',
                },
            },
        ],
        fallback: false, // false or 'blocking'
    };
}

//
export async function getStaticProps(context: any) {
    //
    return {
        props: {
            video: [
                {
                    name: 'hai huoc',
                    des: 'xuan bac tu long',
                    params: context['params'],
                },
            ],
        },
    };
}

export default VideoTopic;
