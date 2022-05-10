import type { NextPage } from 'next';
import Head from 'next/head';
//
import styles from '../styles/Home.module.scss';
//
import AppComponent from '../components/app/AppComponent';

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
                <AppComponent />
            </main>

            <footer className={styles.footer}></footer>
        </div>
    );
};

export default Home;
