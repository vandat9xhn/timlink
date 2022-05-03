import * as React from 'react';
import Link from 'next/link';
//
import DefaultLayoutStyles from './DefaultLayout.module.scss';

//
export interface DefaultLayoutProps {
    children: React.ReactNode;
}

//
function DefaultLayout({ children }: DefaultLayoutProps) {
    //
    return (
        <>
            <div className={DefaultLayoutStyles['DefaultLayout']}>
                <div className={DefaultLayoutStyles['DefaultLayout_link']}>
                    <Link href={'/about'}>Goto About</Link>
                </div>

                <div className={DefaultLayoutStyles['DefaultLayout_link']}>
                    <Link href={'/home'}>Goto Home</Link>
                </div>

                <div className={DefaultLayoutStyles['DefaultLayout_link']}>
                    <Link href={'/video'}>Tim kiem Video</Link>
                </div>
            </div>

            {children}
        </>
    );
}

export default DefaultLayout;
