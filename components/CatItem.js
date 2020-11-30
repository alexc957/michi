import Zoom from 'react-reveal/Zoom';
import Link from 'next/link';
import styles from '../styles/styles.module.css';
export default function CatItem({id, path}){
    

    return (
        <Zoom top>
        <Link href={`/michi/${id}`}>
          <a><img src={path}   className={styles.photo} /></a>
        </Link>
        </Zoom>
    )
}