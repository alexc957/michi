import Head from 'next/head';
import NavBar from './NavBar';

import styles from './layout.module.css';

export default function Layout({children}) {

    return (
        <div>
            <Head>
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