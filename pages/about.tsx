import { NextPage } from 'next';
import Head from 'next/head';
// 
import { useEffect } from 'react';

//
export interface AboutPageProps {}

//
const AboutPage: NextPage = () => {
    useEffect(() => {
        console.log(location.pathname);
    }, []);

    //
    return (
        <div>
            <Head>
                <title>About</title>

                <meta name="description" content="About web tim kiem link" />
            </Head>
            <div>This is About Page</div>
        </div>
    );
};

export default AboutPage;
