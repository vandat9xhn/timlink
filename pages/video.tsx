import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
//
import VideoPage from '../components/video_page/_main/VideoPage';

//
const Video: NextPage = () => {
    //
    return (
        <>
            <Head>
                <title>Video</title>

                <meta name="description" content="Tim kiem cac video" />
            </Head>

            <div>
                <Link href={'/video/funny'}>Video Funny</Link>
            </div>

            <VideoPage />

            <div></div>
        </>
    );
};

export default Video;
