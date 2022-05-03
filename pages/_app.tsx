import React from 'react';
import type { AppProps } from 'next/app';
//
import '../styles/globals.css';
import { ComponentWithLayout } from '../types';

import DefaultLayout from '../layout/default/DefaultLayout';

//
interface MyAppProps extends AppProps {
    Component: ComponentWithLayout;
}

//
function MyApp({ Component, pageProps }: MyAppProps) {
    const getLayout = Component.getLayout;

    if (getLayout) {
        return getLayout(<Component {...pageProps} />);
    }

    return (
        <DefaultLayout>
            <Component {...pageProps} />;
        </DefaultLayout>
    );
}

export default MyApp;
