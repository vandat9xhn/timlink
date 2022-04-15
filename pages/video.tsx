import type { NextPage } from 'next';
import Head from 'next/head';
//
import VideoPage from '../components/video_page/_main/VideoPage';

//
const Video: NextPage = () => {
    VideoPage;

    //
    return (
        <>
            <Head>
                <title>Video</title>
                <meta name="description" content="Tim kiem cac video" />
            </Head>

            <VideoPage />
        </>
    );
};

export default Video;
