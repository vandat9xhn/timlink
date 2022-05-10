import React, { useEffect } from 'react';
import Head from 'next/head';
//
import { ComponentWithLayout } from '../types';
import { useRouter } from 'next/router';

//
export interface AboutPageProps {}

//
const AboutPage: ComponentWithLayout = () => {
    //
    const router = useRouter();

    //
    useEffect(() => {
        console.log('mounted');

        router.events.on('routeChangeStart', handleRouteChangeStart);

        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart);
        };
    }, []);

    // ---

    //
    function handleRouteChangeStart(
        url: string,
        { shallow }: { shallow: boolean }
    ) {
        console.log(url);

        // router.events.off('routeChangeStart', handleRouteChangeStart);

        if (url !== '/about') {
            if (!confirm('ok')) {
                router.push('/about');
            }
        }

        // router.events.on('routeChangeStart', handleRouteChangeStart);
    }

    //
    return (
        <>
            <Head>
                <title>About</title>

                <meta name="description" content="About web tim kiem link" />
            </Head>

            <div>
                <h1>This is About Page</h1>
            </div>
        </>
    );
};

AboutPage.getLayout = (children: React.ReactElement) => {
    //
    return (
        <>
            <div>This is Custom layout</div>

            <div>{children}</div>
        </>
    );
};

export default AboutPage;
