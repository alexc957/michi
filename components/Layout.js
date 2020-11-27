import Head from 'next/head';
import NavBar from './NavBar';

import styles from '../styles/styles.module.css';

export default function Layout({children}) {

    return (
        <div>
            <Head>
            <link href='https://fonts.googleapis.com/css?family=Annie Use Your Telescope' rel='stylesheet' ></link>
                <meta
          name="description"
          content="this project is about creating a web app to show photos of my cat!"
        />
               

            </Head>

            <header>
                <NavBar/>    
            </header>
            <main className={styles.main}>
                
                {children}
            </main>
        </div>
    )
}