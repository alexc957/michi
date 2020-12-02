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
                <NavBar/>  
            <header className={styles.header}>
                    <img src="/images/michi3.jpg" className={styles.imageHeader} />
                    <p>this cat is the house owner</p>
                                                 
            </header>
            <main className={styles.main}>
                
                {children}
            </main>
            <footer className={styles.footer}>
                <p>author: Alexander</p>
                <a href="mailto:alexcoronel1995@gmail.com">alexcoronel1995@gmail.com</a>
            </footer>
        </div>
    )
}