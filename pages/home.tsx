import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

//
const Home: NextPage = () => {
    //
    return (
        <div className={styles.container}>
            <Head>
                <title>Home</title>

                <meta
                    name="description"
                    content="Tim kiem link cac video, music, game, trang web, ung dung,..."
                />
            </Head>

            <main className={styles.main}>
                <div>
                    <Link href={'/about'}>Goto About</Link>
                </div>

                <div>
                    <Link href={'/video'}>Tim kiem Video</Link>
                </div>
            </main>

            <footer className={styles.footer}></footer>
        </div>
    );
};

export default Home;
