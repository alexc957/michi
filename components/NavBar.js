import styles from './layout.module.css';
import Link from 'next/link';

export default function NavBar(){

    return  <nav className={styles.nav}>
    <Link href="/" >
        <a className={styles.link}>Home</a>
    </Link> 
    <Link href="/about" className={styles.link}>
        <a className={styles.link}>About</a>

    </Link>
    
    

</nav>
}