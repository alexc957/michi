import Head from 'next/head'
import Layout from '../components/Layout'
import Photo from '../components/Photo';
import photos from '../data/data';
import Image from 'next/image'
import styles from '../styles/styles.module.css';
import Link from 'next/link';
export default function Home({catPhotos}) {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
     <div className={styles.container}>
       {catPhotos.map(photo=> (
            <Link href={`/michi/${photo.id}`}>
              <a><img src={photo.path} key={photo.id}    className={styles.photo} /></a>
            </Link>
       )
       )}

     </div>
     
    </Layout>
  )
}

export async function getStaticProps(){
  return {
    props: {
      catPhotos:photos
    }
  }
}

