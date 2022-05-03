import { NextPage } from 'next';

export type ComponentWithLayout = NextPage & {
    getLayout?: (children: React.ReactElement) => React.ReactElement;
};
